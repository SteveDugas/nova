import React from 'react';
import TimeAgo from 'javascript-time-ago';
import ReactTimeAgo from 'react-time-ago';
import en from 'javascript-time-ago/locale/en.json';
import { Transaction, GetTransactionsResponse, STATUS_COLOR_MAP } from '../../../types';
import {
  Cell,
  Column,
  Row,
  TableBody,
  TableHeader,
} from 'react-stately';
import classnames from 'classnames';
import Table from '../../design-library/Table';
import Paging from '../../design-library/Paging';
import ColorPill from "../../TransactionsTable/ColorPill";

TimeAgo.addDefaultLocale(en);

interface Props {
  fetchMore: (variablesObj: any) => void;
  loading: boolean;
  data: GetTransactionsResponse;
}

export default function TransactionsTable({ data, loading, fetchMore }: Props) {
  const { transactions, total, page, page_size, reviewersList } = data;

  function handlePageChange(pageNum: number) {
    fetchMore({
      variables: {
        page: pageNum,
      }
    })
  }

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
            const sortedReviewers = [...transaction.reviewer_names || []].sort();

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
                  {sortedReviewers.map((name) => {
                    const reviewerColor = reviewersList.indexOf(name) || 0;
                    return (
                      <ColorPill key={name} className="mr-2" index={reviewerColor}>{name}</ColorPill>
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
      { loading && (
        <div className="text-center text-xl">Loading</div>
      )}
      {!loading && transactions.length < 1 && (
        <div className="text-center text-xl">There are no transactions that match your filters. Try a different search.</div>
      )}
      {!loading && Math.ceil(total/page_size) > 1 ?
        <Paging currentPage={page-1} totalPages={Math.ceil(total/page_size)} handleChangePage={handlePageChange} />
      :
        <div className="p-4 border-t border-tableBorder"/>
      }
    </div>
  )
}