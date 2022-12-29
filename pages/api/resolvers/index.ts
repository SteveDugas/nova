enum Status {
  Created,
  Invited,
  Submitted,
  InProgress,
  Pending,
  Completed,
}

type Transaction = {
  id: string;
  created_at: number;
  sender_entity_handle: string;
  template_name: string;
  first_recipient_name?: string;
  first_recipient_email?: string;
  first_recipient_completed_at?: number;
  state: Status;
  progress: number;
  latest_state_change_at: number;
  reviewer_names?: string[];
}



const mockData: [Transaction] = [
  {
    id: '9fa83b-234haf-2h4539',
    created_at: 1672278978745,
    sender_entity_handle: 'pnta-earlystage2',
    template_name: 'Pantera Early Stage Token Template',
    first_recipient_name: 'Pradyuman Vig',
    first_recipient_email: 'pradyuman@novahq.com',
    first_recipient_completed_at: 1672278978745,
    state: Status.Created,
    progress: 1,
    latest_state_change_at: 1672278978745,
    reviewer_names: ['Pradyuman Vig']
  }
]


export const resolvers = {
  Query: {
    getTransactions: async (_, args) => {
      return mockData;
    }
  },
};