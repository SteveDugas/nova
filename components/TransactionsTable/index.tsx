import { useQuery, gql } from "@apollo/client";
import { Transaction } from '../../types';

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

export default function TransactionsTable({ filters }) {
  console.log("FILTERS", filters);
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
      {!loading && transactions.map((transaction: Transaction) => {
        return (
          <div key={transaction.id}>{transaction.id}</div>
        )
      })}
    </div>
  )
}