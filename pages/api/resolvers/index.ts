import mockData from './mock';

export type Transaction = {
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

function filterByStatuses(data: Transaction[], statuses: string[]) {
  return data.filter((transaction) => statuses.includes(transaction.state));
}

function filterByRecipientName(data: Transaction[], recipientName: string) {
  return data.filter((transaction) => transaction.first_recipient_name?.toLowerCase() === recipientName.toLowerCase());
}

function filterByReviewerName(data: Transaction[], reviewerName: string) {
  return data.filter((transaction) => transaction.reviewer_names?.includes(reviewerName));
}

function splitIntoPages(data: Transaction[], pageSize: number) {
  return data.reduce((prev: any, current) => {
    if (prev.at(-1).length < pageSize) {
      prev.at(-1).push(current);
    } else {
      prev.push([current]);
    }
    return prev;
  }, [[]])
}

interface GetTransactionsArgs {
  recipient_name: string;
  statuses: string[];
  reviewer_name: string;
  page: number;
  page_size: number;
}

export const resolvers = {
  Query: {
    getTransactions: async (_: any, args: GetTransactionsArgs) => {
      const data = mockData;
      const pageSize = args.page_size || 10;
      const page = args.page || 1;
      let returnData: Transaction[] = data;

      if (args.recipient_name) {
        returnData = filterByRecipientName(returnData, args.recipient_name)
      }
      if (args.statuses) {
        returnData = filterByStatuses(returnData, args.statuses || [])
      }
      if (args.reviewer_name) {
        returnData = filterByReviewerName(returnData, args.reviewer_name)
      }

      if (returnData.length > pageSize) {
        returnData = splitIntoPages(returnData, pageSize);
        return returnData.at(page-1);
      }

      return returnData;
    }
  },
};