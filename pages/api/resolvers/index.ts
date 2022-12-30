import mockData from './mock';
import { Transaction } from '../../../types';

const DEFAULT_PAGE_SIZE = 10;

interface GetTransactionsArgs {
  recipient_name: string;
  statuses: string[];
  reviewer_name: string;
  page: number;
  page_size: number;
}

interface ReturnData {
  transactions: Transaction[];
  page: number;
  page_size: number;
}

function filterByStatuses(data: Transaction[], statuses: string[]) {
  return data.filter((transaction) => statuses.includes(transaction.state));
}

function filterByRecipientName(data: Transaction[], recipientName: string) {
  return data.filter((transaction) => transaction.first_recipient_name?.toLowerCase().includes(recipientName.toLowerCase()));
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

export const resolvers = {
  Query: {
    getTransactions: async (_: any, args: GetTransactionsArgs) => {
      const data = mockData;
      const pageSize = args.page_size || DEFAULT_PAGE_SIZE;
      const page = args.page || 1;
      let returnTransactions: Transaction[] = data;

      if (args.recipient_name?.length) {
        returnTransactions = filterByRecipientName(returnTransactions, args.recipient_name)
      }
      if (args.statuses?.length) {
        returnTransactions = filterByStatuses(returnTransactions, args.statuses)
      }
      if (args.reviewer_name?.length) {
        returnTransactions = filterByReviewerName(returnTransactions, args.reviewer_name)
      }

      const total = returnTransactions.length;

      if (returnTransactions.length > pageSize) {
        returnTransactions = splitIntoPages(returnTransactions, pageSize).at(page-1);
      }

      return {
        page,
        page_size: pageSize,
        transactions: returnTransactions,
        total,
      };
    }
  },
};