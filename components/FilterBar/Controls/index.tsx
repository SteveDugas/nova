import React from 'react';
import Popup from '../../design-library/Popup';
import StatusButton from './StatusButton';
import VerticalSpacingSize from '../../design-library/VerticalSpacing';

interface Props {
  setReviewer: (reviewerName: string) => void;
  setStatuses: (state: string) => void;
  activeStates: string[];
}

export default function FilterBarControls({ setReviewer, setStatuses, activeStates }: Props) {
  const [popupIsOpen, setPopupIsOpen] = React.useState(false);

  function handleStatusButtonClick(state: string) {
    setStatuses(state)
  }

  return (
    <div className="relative">
      <button onClick={() => {
        setPopupIsOpen(true);
      }}>Filters</button>
      <Popup open={popupIsOpen} onDismiss={() => setPopupIsOpen(false)}>
        <div className="w-[360px]">
          <VerticalSpacingSize>
            <VerticalSpacingSize>
              <div className="font-medium">Status</div>
              <div>
                <StatusButton onClick={() => { handleStatusButtonClick('Created') }}>Created</StatusButton>
                <StatusButton onClick={() => { handleStatusButtonClick('Invited') }}>Invited</StatusButton>
                <StatusButton onClick={() => { handleStatusButtonClick('In Progress') }}>In Progress</StatusButton>
              </div>
              <div>
                <StatusButton onClick={() => { handleStatusButtonClick('Submitted') }}>Submitted</StatusButton>
                <StatusButton onClick={() => { handleStatusButtonClick('Pending') }}>Pending</StatusButton>
                <StatusButton onClick={() => { handleStatusButtonClick('Completed') }} primary>Completed</StatusButton>
              </div>
            </VerticalSpacingSize>
            <VerticalSpacingSize>
              <div className="font-medium">Reviewer</div>
              <select onChange={(e) => { setReviewer(e.target.value) }} className="bg-primary/10 p-3 pr-4 rounded-xl">
                <option value="">Select a Reviewer</option>
                <option value="Random Person 1">Random Person 1</option>
                <option value="Random Person 2">Random Person 2</option>
                <option value="Steve Dugas">Steve Dugas</option>
                <option value="Pradyuman Vig">Pradyuman Vig</option>
              </select>
            </VerticalSpacingSize>
          </VerticalSpacingSize>
        </div>
      </Popup>
    </div>
  )
}