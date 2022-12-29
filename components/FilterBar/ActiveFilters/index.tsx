import { FiltersState } from '../../../types';

interface Props {
  state: FiltersState;
}


export default function FilterBarActiveFilters({ state }: Props) {
  return (
    <div className="grow">
      <div className="text-primary">Filtering by</div>
      <div>
        {state.statuses.map((state) => {
          return <div>Status {state}</div>
        })}
        {state.recipientName && <div>Recipient {state.recipientName}</div>}
        {state.reviewerName && <div>Reviewer {state.reviewerName}</div>}
      </div>
    </div>
  )
}