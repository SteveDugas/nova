import React from 'react';
import VerticalSpacing, { VerticalSpacingSize } from '../../components/design-library/VerticalSpacing';
import Heading from '../../components/design-library/Heading';
import SubHeading from '../../components/design-library/SubHeading';
import FilterBar from '../../components/FilterBar/FilterBar';
import ClientOnly from '../../components/ClientOnly';
import TransactionsTable from '../../components/TransactionsTable';
import { FilterActions, FiltersState } from '../../types';



interface FilterAction {
  type: FilterActions;
  payload: any;
}

const DEFAULT_FILTERS_STATE = {
  pageSize: 3,
  page: 1,
  reviewerName: '',
  statuses: [],
  recipientName: '',
  totalTransactions: 0,
}

function filtersReducer(state: FiltersState, action: FilterAction) {
  console.log("reducer");
  switch(action.type) {
    case FilterActions.updateRecipientName: {
      return {
        ...state,
        recipientName: action.payload,
      }
    }
    case FilterActions.updateReviewerName: {
      return {
        ...state,
        reviewerName: action.payload,
      }
    }
    case FilterActions.addStatus: {
      const statuses = Array.from(state.statuses);
      statuses.push(action.payload);

      return {
        ...state,
        statuses,
      }
    }
    case FilterActions.removeStatus: {
      const statuses = state.statuses.filter((state) => state !== action.payload);
      return {
        ...state,
        statuses,
      }
    }
    case FilterActions.updatePage: {
      return {
        ...state,
        page: action.payload,
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
      <FilterBar dispatch={dispatch} state={state} />
      <ClientOnly>
        <TransactionsTable state={state} dispatch={dispatch} />
      </ClientOnly>
    </VerticalSpacing>
  )
}