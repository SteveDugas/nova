import { FilterActions, FiltersState } from '../../types';

export const DEFAULT_FILTERS_STATE = {
  recipientName: '',
  reviewerName: '',
  statuses: [],
}

interface FilterAction {
  type: FilterActions;
  payload: any;
}

export default function filtersReducer(state: FiltersState, action: FilterAction) {
  switch(action.type) {
    case FilterActions.addStatus: {
      const statuses = Array.from(state.statuses);
      statuses.push(action.payload);

      return {
        ...state,
        statuses,
      }
    }
    case FilterActions.removeStatus: {
      const statuses = state.statuses.filter((state) => state !== action.payload);
      return {
        ...state,
        statuses,
      }
    }
    case FilterActions.updateRecipientName: {
      return {
        ...state,
        recipientName: action.payload,
      }
    }
    case FilterActions.updateReviewerName: {
      return {
        ...state,
        reviewerName: action.payload,
      }
    }
    case FilterActions.updateReviewersList: {
      return {
        ...state,
        reviewersList: action.payload,
      }
    }
    default:
      return state;
  }
}