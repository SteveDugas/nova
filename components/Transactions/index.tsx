import React from 'react';
import VerticalSpacing, { VerticalSpacingSize } from '../../components/design-library/VerticalSpacing';
import Heading from '../../components/design-library/Heading';
import SubHeading from '../../components/design-library/SubHeading';
import FilterBar from '../../components/FilterBar/FilterBar';
import ClientOnly from '../../components/ClientOnly';
import TransactionsTable from '../../components/TransactionsTable';
import { FilterActions } from '../../types';


interface FilterAction {
  type: FilterActions;
  payload: any;
}

interface FiltersState {
  page: number;
  pageSize?: number;
  reviewerName?: string;
  statuses?: string[];
  recipientName?: string;
}

const DEFAULT_FILTERS_STATE = {
  pageSize: 3,
  page: 1,
  reviewerName: '',
  statuses: [],
  recipientName: '',
}

function filtersReducer(state: FiltersState, action: FilterAction) {
  switch(action.type) {
    case FilterActions.updateRecipientName: {
      return {
        ...state,
        recipientName: action.payload,
      }
    }
    default:
      return state;
  }
}

export default function Transactions() {
  const [state, dispatch] = React.useReducer(filtersReducer, DEFAULT_FILTERS_STATE);

  return (
    <VerticalSpacing>
      <VerticalSpacing size={VerticalSpacingSize.SMALL}>
        <Heading>Transactions</Heading>
        <SubHeading>Your business contracts, including fund subscriptions or applications.</SubHeading>
      </VerticalSpacing>
      <FilterBar dispatch={dispatch} />
      <ClientOnly>
        <TransactionsTable filters={state} />
      </ClientOnly>
    </VerticalSpacing>
  )
}