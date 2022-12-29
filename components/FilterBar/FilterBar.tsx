import React from 'react';
import FilterBarSearch from './Search';
import FilterBarActiveFilters from './ActiveFilters';
import FilterBarControls from './Controls';
import FilterBarDivider from './Divider';
import { FilterActions, FiltersState, State } from '../../types';

interface FilterBarProps {
  dispatch: React.Dispatch<any>;
  state: FiltersState;
}

export default function FilterBar({ dispatch, state }: FilterBarProps) {
  function updateReviewerName(reviewerName: string) {
    dispatch({
      type: FilterActions.updateReviewerName,
      payload: reviewerName,
    })
  }

  function updateStatus(status: State) {
    if (state.statuses?.includes(status)) {
      dispatch({
        type: FilterActions.removeStatus,
        payload: status,
      })
    } else {
      dispatch({
        type: FilterActions.addStatus,
        payload: status,
      })
    }
  }

  function updateRecipient(name: string) {
    dispatch({
      type: FilterActions.updateRecipientName,
      payload: name,
    });
  }

  return (
    <div className="flex min-h-14 items-center">
      <FilterBarSearch setRecipientName={updateRecipient} recipientName={state.recipientName} />
      <FilterBarDivider />
      <FilterBarActiveFilters
        setReviewerName={updateReviewerName}
        setStatus={updateStatus}
        setRecipientName={updateRecipient}
        state={state}
      />
      <FilterBarDivider />
      <FilterBarControls
        setReviewerName={updateReviewerName}
        setStatuses={updateStatus}
        state={state}
      />
    </div>
  )
}