import React from 'react';
import Popup from '../../design-library/Popup';
import StatusButton from './StatusButton';
import VerticalSpacingSize from '../../design-library/VerticalSpacing';
import { Select, Option } from '../../design-library/Select';
import { State, FiltersState } from '../../../types';

interface Props {
  setReviewerName: (reviewerName: string) => void;
  setStatuses: (state: State) => void;
  state: FiltersState;
}

export default function FilterBarControls({ setReviewerName, setStatuses, state }: Props) {
  const [popupIsOpen, setPopupIsOpen] = React.useState(false);
  const activeStates = state.statuses;

  return (
    <div className="relative">
      <button className="p-2" onClick={() => {
        setPopupIsOpen(true);
      }}>Filters</button>
      <Popup open={popupIsOpen} onDismiss={() => setPopupIsOpen(false)}>
        <div className="w-[360px]">
          <VerticalSpacingSize>
            <VerticalSpacingSize>
              <div className="font-medium">Status</div>
              <div>
                <StatusButton state="Created" active={activeStates.includes('Created')} onClick={setStatuses} />
                <StatusButton state="Invited" active={activeStates.includes('Invited')} onClick={setStatuses} />
                <StatusButton state="In Progress" active={activeStates.includes('In Progress')} onClick={setStatuses} />
              </div>
              <div>
                <StatusButton state="Submitted" active={activeStates.includes('Submitted')} onClick={setStatuses} />
                <StatusButton state="Pending" active={activeStates.includes('Pending')} onClick={setStatuses} />
                <StatusButton state="Completed" active={activeStates.includes('Completed')} onClick={setStatuses} primary />
              </div>
            </VerticalSpacingSize>
            <VerticalSpacingSize>
              <div className="font-medium">Reviewer</div>
              <Select value={state.reviewerName || ''} onChange={(reviewer) => { setReviewerName(reviewer) }}>
                <Option value="">Select a Reviewer</Option>
                <Option value="Random Person 1">Random Person 1</Option>
                <Option value="Random Person 2">Random Person 2</Option>
                <Option value="Steve Dugas">Steve Dugas</Option>
                <Option value="Pradyuman Vig">Pradyuman Vig</Option>
              </Select>
            </VerticalSpacingSize>
          </VerticalSpacingSize>
        </div>
      </Popup>
    </div>
  )
}