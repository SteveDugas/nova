export enum FilterActions {
  addStatus,
  removeStatus,
  updateReviewerName,
  updateRecipientName,
}

export type State = keyof typeof STATUS_COLOR_MAP;

export interface Transaction {
  id: string;
  created_at: number;
  sender_entity_handle: string;
  template_name: string;
  first_recipient_name?: string;
  first_recipient_email?: string;
  first_recipient_completed_at?: number;
  state: State;
  progress: number;
  latest_state_change_at: number;
  reviewer_names?: string[];
}

export interface GetTransactionsResponse {
  reviewersList: string[];
  transactions: Transaction[];
  page: number;
  page_size: number;
  total: number;
}

export enum STATUS_COLOR_MAP {
  'Created' = 'text-created',
  'Invited' = 'text-invited',
  'In Progress' = 'text-inprogress',
  'Submitted' = 'text-submitted',
  'Pending' = 'text-pending',
  'Completed' = 'text-completed',
}

export interface FiltersState {
  recipientName: string;
  reviewerName: string;
  statuses: State[];
}
