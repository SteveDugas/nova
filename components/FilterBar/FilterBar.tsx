import FilterBarSearch from './Search';
import FilterBarActiveFilters from './ActiveFilters';
import FilterBarControls from './Controls';
import FilterBarDivider from './Divider';

export default function FilterBar() {
  return (
    <div className="flex h-14 items-center">
      <FilterBarSearch />
      <FilterBarDivider />
      <FilterBarActiveFilters />
      <FilterBarDivider />
      <FilterBarControls />
    </div>
  )
}