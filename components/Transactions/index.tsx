import React from 'react';
import VerticalSpacing, { VerticalSpacingSize } from '../../components/design-library/VerticalSpacing';
import Heading from '../../components/design-library/Heading';
import SubHeading from '../../components/design-library/SubHeading';
import FilterBar from '../../components/FilterBar/FilterBar';
import ClientOnly from '../../components/ClientOnly';
import TransactionsTable from '../../components/TransactionsTable';
import reducer, { DEFAULT_FILTERS_STATE } from './reducer';

export default function Transactions() {
  const [state, dispatch] = React.useReducer(reducer, DEFAULT_FILTERS_STATE);

  return (
    <>
      <div className="pb-3">
        <VerticalSpacing size={VerticalSpacingSize.SMALL}>
          <Heading>Transactions</Heading>
          <SubHeading>Your business contracts, including fund subscriptions or applications.</SubHeading>
        </VerticalSpacing>
      </div>
      <div className="pb-3">
        <FilterBar dispatch={dispatch} state={state} />
      </div>
      <div className="pb-3 grow">
        <ClientOnly className="h-full">
          <TransactionsTable state={state} />
        </ClientOnly>
        </div>
    </>
  )
}