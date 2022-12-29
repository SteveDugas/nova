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

export enum FilterActions {
  updateReviewerName,
  updateStatuses,
  updateRecipientName,
  updatePage,
}