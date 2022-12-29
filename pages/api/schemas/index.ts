import { gql } from "apollo-server-micro"; 

export const typeDefs = gql`
  type Transaction {
    id: String!
    created_at: Float!
    sender_entity_handle: String!
    template_name: String
    first_recipient_name: String
    first_recipient_email: String
    first_recipient_completed_at: Float
    state: String!
    progress: Float!
    latest_state_change_at: Float!
    reviewer_names: [String]
  }

  type ReturnData {
    transactions: [Transaction],
    page: Int!,
    page_size: Int!,
    total: Int!,
  }

  type Query {
    getTransactions(statuses: [String], recipient_name: String, reviewer_name: String, page: Int, page_size: Int): ReturnData
  }`