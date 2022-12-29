import { useQuery, gql } from "@apollo/client";
import { Transaction, FiltersState } from '../../types';
import {
  Cell,
  Column,
  Row,
  TableBody,
  TableHeader,
  useTableState
} from 'react-stately';
import Table from '../design-library/Table';

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
  filters: FiltersState;
}

export default function TransactionsTable({ filters }: Props) {
  const { data, loading, error } = useQuery(QUERY,
    { 
      variables: filters
    }
  );

  if (loading) {
    return null;
  }

  const { transactions } = data.getTransactions;

  return (
    <div>
      <Table
        aria-label="Example static collection table"
        style={{ height: '210px', maxWidth: '400px' }}
      >
        <TableHeader>
          <Column>Last updated</Column>
          <Column>Recipient</Column>
          <Column>Template</Column>
          <Column>Invited by</Column>
          <Column>Reviewers</Column>
          <Column>Unique ID</Column>
        </TableHeader>
        <TableBody>
          { transactions.map((transaction: Transaction) => {
            return (
              <Row key={transaction.id}>
                <Cell>{transaction.state}</Cell>
                <Cell>
                  <div>{transaction.first_recipient_name}</div>
                  <div>{transaction.first_recipient_email}</div>
                </Cell>
                <Cell>
                  <div>{transaction.template_name}</div>
                  <div>{transaction.sender_entity_handle}</div>
                </Cell>
                <Cell>
                  <div>{transaction.sender_entity_handle}</div>
                </Cell>
                <Cell>
                  {transaction.reviewer_names?.map((name) => {
                    return <div key={name}>{name}</div>
                  })}
                </Cell>
                <Cell>
                  {transaction.id}
                </Cell>
              </Row>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}