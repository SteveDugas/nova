import React from 'react';
import Popup from '../../design-library/Popup';

export default function FilterBarControls() {
  const [popupIsOpen, setPopupIsOpen] = React.useState(false);

  return (
    <div className="relative">
      <button onClick={() => {
        setPopupIsOpen(true);
      }}>Filters</button>
      <Popup open={popupIsOpen} onDismiss={() => setPopupIsOpen(false)}>
        <div>
          <div>Status</div>
          <div>
            <div>Created</div>
            <div>Invited</div>
            <div>In Progress</div>
            <div>Submitted</div>
            <div>Pending</div>
            <div>Completed</div>
          </div>
        </div>
        <div>
          <div>Reviewer</div>
          <select>
            <option value="Person 1">Person 1</option>
            <option value="Person 2">Person 2</option>
            <option value="Person 3">Person 3</option>
            <option value="Person 4">Person 4</option>
          </select>
        </div>
      </Popup>
    </div>
  )
}