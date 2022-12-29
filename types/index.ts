export interface Transaction {
  id: string;
  created_at: number;
  sender_entity_handle: string;
  template_name: string;
  first_recipient_name?: string;
  first_recipient_email?: string;
  first_recipient_completed_at?: number;
  state: string;
  progress: number;
  latest_state_change_at: number;
  reviewer_names?: string[];
}

export enum STATUS_COLOR_MAP {
  'Created' = 'text-created',
  'Invited' = 'text-invited',
  'In Progress' = 'text-inprogress',
  'Submitted' = 'text-submitted',
  'Pending' = 'text-pending',
  'Completed' = 'text-completed',
}

export enum FilterActions {
  updateReviewerName,
  addStatus,
  removeStatus,
  updateRecipientName,
  updatePage,
}

export type State = keyof typeof STATUS_COLOR_MAP;

export interface FiltersState {
  page: number;
  pageSize?: number;
  reviewerName: string;
  statuses: State[];
  recipientName: string;
}
