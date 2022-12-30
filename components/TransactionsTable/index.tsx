import { useQuery, gql } from "@apollo/client";
import TimeAgo from 'javascript-time-ago';
import ReactTimeAgo from 'react-time-ago';
import en from 'javascript-time-ago/locale/en.json';
import { Transaction, FiltersState, FilterActions } from '../../types';
import {
  Cell,
  Column,
  Row,
  TableBody,
  TableHeader,
  useTableState
} from 'react-stately';
import classnames from 'classnames';
import Table from '../design-library/Table';
import Paging from '../design-library/Paging';
import ColorPill from "./ColorPill";
import { STATUS_COLOR_MAP } from "../../types";

TimeAgo.addDefaultLocale(en);

// TODO: Only have the table body in ClientOnly so there's no flicker

const QUERY = gql`
query GetTransactions($page: Int, $pageSize: Int, $reviewerName: String, $statuses: [String], $recipientName: String) {
  getTransactions(page: $page, page_size: $pageSize, reviewer_name: $reviewerName, statuses: $statuses, recipient_name: $recipientName) {
    transactions {
      id,
      latest_state_change_at,
      reviewer_names,
      progress,
      state,
      first_recipient_name,
      first_recipient_email,
      first_recipient_completed_at,
      sender_entity_handle,
      template_name,
      state,
    }
    page
    page_size
    total
  }
}
`;

interface Props {
  state: FiltersState;
  dispatch: React.Dispatch<any>;
}

export default function TransactionsTable({ state, dispatch }: Props) {
  const { data, loading, error } = useQuery(QUERY,
    { 
      variables: state
    }
  );

  if (loading) {
    return null;
  }

  const { transactions, total, page_size } = data.getTransactions;

  return (
    <div className="bg-white rounded-xl shadow-light h-full max-h-[600px] flex flex-col justify-between text-sm">
      <Table
        aria-label="Transactions table"
        style={{ height: '210px', maxWidth: '400px' }}
      >
        <TableHeader>
          <Column>Last updated</Column>
          <Column>Recipient</Column>
          <Column>Template</Column>
          <Column>Invited by</Column>
          <Column>Reviewers</Column>
          <Column><div className="text-right">Unique ID</div></Column>
        </TableHeader>
        <TableBody>
          { transactions.map((transaction: Transaction) => {
            const statusColor = STATUS_COLOR_MAP[transaction.state];
            return (
              <Row key={transaction.id}>
                <Cell>
                  <div className={classnames(statusColor, 'font-medium')}>{transaction.state}</div>
                  <div className="text-sm text-[#c8c8c8] leading-tight"><ReactTimeAgo locale="en-US" date={new Date(transaction.latest_state_change_at)} /></div>
                </Cell>
                <Cell>
                  <div className="font-medium text-[#1c1c1c] leading-tight">{transaction.first_recipient_name}</div>
                  <div className="text-sm text-[#c8c8c8] leading-tight">{transaction.first_recipient_email}</div>
                </Cell>
                <Cell>
                  <div className="font-medium text-[#1c1c1c] leading-tight">{transaction.template_name}</div>
                </Cell>
                <Cell>
                  <div>{transaction.sender_entity_handle}</div>
                </Cell>
                <Cell>
                  {transaction.reviewer_names?.map((name, idx) => {
                    return (
                      <ColorPill key={name} className="mr-2" index={idx}>{name}</ColorPill>
                    )
                  })}
                </Cell>
                <Cell>
                <div className="font-medium text-[#1c1c1c] leading-tight text-right">{transaction.id}</div>
                </Cell>
              </Row>
            )
          })}
        </TableBody>
      </Table>
      <Paging currentPage={state.page-1} totalPages={Math.ceil(total/state.pageSize)} handleChangePage={(pageNum: number) => {
        dispatch({
          type: FilterActions.updatePage,
          payload: pageNum,
        });
      }} />
    </div>
  )
}