import React from 'react';
import FilterBarSearch from './Search';
import FilterBarActiveFilters from './ActiveFilters';
import FilterBarControls from './Controls';
import FilterBarDivider from './Divider';
import { FilterActions } from '../../types';

interface FilterBarProps {
  dispatch: React.Dispatch<any>;
}

export default function FilterBar({ dispatch }: FilterBarProps) {
  return (
    <div className="flex h-14 items-center">
      <FilterBarSearch setRecipientName={(recipientName: string) => {
        dispatch({
          type: FilterActions.updateRecipientName,
          payload: recipientName,
        });
      }} />
      <FilterBarDivider />
      <FilterBarActiveFilters />
      <FilterBarDivider />
      <FilterBarControls />
    </div>
  )
}