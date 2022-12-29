import { Transaction } from './index';

const mockData: Transaction[] = [
  {
    id: '9fa83b-234haf-2h4539',
    created_at: 1672278978745,
    sender_entity_handle: 'pnta-earlystage2',
    template_name: 'Pantera Early Stage Token Template',
    first_recipient_name: 'Pradyuman Vig',
    first_recipient_email: 'pradyuman@novahq.com',
    first_recipient_completed_at: 1672278978745,
    state: 'Created',
    progress: 1,
    latest_state_change_at: 1672278978745,
    reviewer_names: ['Pradyuman Vig']
  },
  {
    id: '9fa83b-234haf-2h4540',
    created_at: 1672278978745,
    sender_entity_handle: 'pnta-earlystage2',
    template_name: 'Pantera Early Stage Token Template',
    first_recipient_name: 'Steve Dugas',
    first_recipient_email: 'steven.dugas@gmail.com',
    first_recipient_completed_at: 1672278978745,
    state: 'Submitted',
    progress: 1,
    latest_state_change_at: 1672278978745,
    reviewer_names: ['Random Person 1', 'Pradyuman Vig']
  },
  {
    id: '9fa83b-234haf-2h4541',
    created_at: 1672278978745,
    sender_entity_handle: 'pnta-earlystage2',
    template_name: 'Pantera Early Stage Token Template',
    first_recipient_name: 'Random Person 1',
    first_recipient_email: 'randomperson1@novahq.com',
    first_recipient_completed_at: 1672278978745,
    state: 'Created',
    progress: 1,
    latest_state_change_at: 1672278978745,
    reviewer_names: ['Pradyuman Vig', 'Steve Dugas']
  },
  {
    id: '9fa83b-234haf-2h4542',
    created_at: 1672278978745,
    sender_entity_handle: 'pnta-earlystage2',
    template_name: 'Pantera Early Stage Token Template',
    first_recipient_name: 'Random Person 1',
    first_recipient_email: 'randomperson1@novahq.com',
    first_recipient_completed_at: 1672278978745,
    state: 'Completed',
    progress: 1,
    latest_state_change_at: 1672278978745,
    reviewer_names: ['Random Person 2', 'Steve Dugas']
  },
  {
    id: '9fa83b-234haf-2h4543',
    created_at: 1672278978745,
    sender_entity_handle: 'pnta-earlystage2',
    template_name: 'Pantera Early Stage Token Template',
    first_recipient_name: 'Random Person 2',
    first_recipient_email: 'randomperson2@novahq.com',
    first_recipient_completed_at: 1672278978745,
    state: 'Created',
    progress: 1,
    latest_state_change_at: 1672278978745,
    reviewer_names: ['Pradyuman Vig', 'Random Person 1']
  },
  {
    id: '9fa83b-234haf-2h4544',
    created_at: 1672278978745,
    sender_entity_handle: 'pnta-earlystage2',
    template_name: 'Pantera Early Stage Token Template',
    first_recipient_name: 'Pradyuman Vig',
    first_recipient_email: 'pradyuman@novahq.com',
    first_recipient_completed_at: 1672278978745,
    state: 'Invited',
    progress: 1,
    latest_state_change_at: 1672278978745,
    reviewer_names: ['Steve Dugas', 'Random Person 2']
  },
  {
    id: '9fa83b-234haf-2h4545',
    created_at: 1672278978745,
    sender_entity_handle: 'pnta-earlystage2',
    template_name: 'Pantera Early Stage Token Template',
    first_recipient_name: 'Steve Dugas',
    first_recipient_email: 'steven.dugas@gmail.com',
    first_recipient_completed_at: 1672278978745,
    state: 'Pending',
    progress: 1,
    latest_state_change_at: 1672278978745,
    reviewer_names: ['Pradyuman Vig']
  },
];

export default mockData;