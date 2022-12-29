import React from 'react';
import FilterBarSearch from './Search';
import FilterBarActiveFilters from './ActiveFilters';
import FilterBarControls from './Controls';
import FilterBarDivider from './Divider';
import { FilterActions, FiltersState } from '../../types';

interface FilterBarProps {
  dispatch: React.Dispatch<any>;
  state: FiltersState;
}

export default function FilterBar({ dispatch, state }: FilterBarProps) {
  return (
    <div className="flex h-14 items-center">
      <FilterBarSearch setRecipientName={(recipientName: string) => {
        dispatch({
          type: FilterActions.updateRecipientName,
          payload: recipientName,
        });
      }} />
      <FilterBarDivider />
      <FilterBarActiveFilters state={state} />
      <FilterBarDivider />
      <FilterBarControls
        setReviewer={(reviewerName: string) => {
          dispatch({
            type: FilterActions.updateReviewerName,
            payload: reviewerName,
          })
        }}
        setStatuses={(status: string) => {
          console.log("setStatuses?")
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
        }}
        activeStates={state.statuses}
      />
    </div>
  )
}