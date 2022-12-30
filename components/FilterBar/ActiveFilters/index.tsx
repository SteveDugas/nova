import classnames from 'classnames';
import { FiltersState } from '../../../types';
import Pill from '../../design-library/Pill';
import { STATUS_COLOR_MAP, State } from '../../../types';

interface Props {
  state: FiltersState;
  setReviewerName: (name: string) => void;
  setStatus: (status: State) => void;
  setRecipientName: (name: string) => void;
}

export default function FilterBarActiveFilters({ state, setReviewerName, setStatus, setRecipientName }: Props) {
  return (
    <div className="grow">
      <div className="flex items-center">
        <div className="text-primary mr-4 shrink-0">Filtering by</div>
        <div className="grow flex flex-wrap">
          {state.statuses.map((state) => {
            const color = STATUS_COLOR_MAP[state];

            return (
              <div className="mr-2 mb-1" key={state}>
                <Pill
                  name="Status"
                  value={<span className={classnames(STATUS_COLOR_MAP[state])}>{state}</span>}
                  onDismiss={() => setStatus(state)}
                  dismissable
                />
              </div>
            )
          })}
          {state.recipientName && (
            <div className="mr-2 mb-1">
              <Pill
                name="Recipient"
                value={<span>{state.recipientName}</span>}
                onDismiss={() => setRecipientName('') }
                dismissable
              />
            </div>
          )}
          {state.reviewerName && (
            <div className="mr-2 mb-1">
              <Pill
                name="Reviewer"
                value={<span>{state.reviewerName}</span>}
                onDismiss={() => setReviewerName('') }
                dismissable
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}