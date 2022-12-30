import React from 'react';
import { useQuery, gql } from "@apollo/client";
import VerticalSpacing, { VerticalSpacingSize } from '../../components/design-library/VerticalSpacing';
import Heading from '../../components/design-library/Heading';
import SubHeading from '../../components/design-library/SubHeading';
import FilterBar from '../../components/FilterBar/FilterBar';
import TransactionsTable from '../../components/TransactionsTable';
import reducer, { DEFAULT_FILTERS_STATE } from './reducer';

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
    reviewersList
  }
}
`;

const defaultData = {
  reviewersList: [],
  transactions: [],
  page: 1,
  page_size: 6,
  total: 0,
}

export default function Transactions() {
  const [state, dispatch] = React.useReducer(reducer, DEFAULT_FILTERS_STATE);
  const { data, loading, error, fetchMore } = useQuery(QUERY,
    { 
      variables: {
        ...state,
        page: 1,
        pageSize: 6,
      }
    }
  );

  return (
    <>
      <div className="pb-3">
        <VerticalSpacing size={VerticalSpacingSize.SMALL}>
          <Heading>Transactions</Heading>
          <SubHeading>Your business contracts, including fund subscriptions or applications.</SubHeading>
        </VerticalSpacing>
      </div>
      <div className="pb-4">
        <FilterBar dispatch={dispatch} state={state} data={data?.getTransactions || defaultData} />
      </div>
      <div className="pb-3 grow">
        <TransactionsTable
          data={data?.getTransactions || defaultData}
          loading={loading}
          fetchMore={fetchMore}
        />
      </div>
    </>
  )
}