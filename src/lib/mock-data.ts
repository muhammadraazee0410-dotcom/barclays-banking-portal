import { Account, Transaction, Notification } from '@/types'

export const accounts: Account[] = [
  {
    id: 'acc-1',
    name: 'Current Account',
    type: 'current',
    number: '****4829',
    sortCode: '20-45-67',
    balance: 12847.53,
    currency: 'GBP',
    lastUpdated: '2026-04-24T12:30:00Z',
  },
  {
    id: 'acc-2',
    name: 'Instant Saver',
    type: 'savings',
    number: '****7391',
    sortCode: '20-45-67',
    balance: 45230.00,
    currency: 'GBP',
    lastUpdated: '2026-04-24T12:30:00Z',
  },
  {
    id: 'acc-3',
    name: 'Barclaycard Platinum',
    type: 'credit',
    number: '****2156',
    sortCode: '',
    balance: -1524.67,
    currency: 'GBP',
    lastUpdated: '2026-04-24T12:30:00Z',
  },
  {
    id: 'acc-4',
    name: 'Home Mortgage',
    type: 'mortgage',
    number: '****8834',
    sortCode: '',
    balance: -187450.00,
    currency: 'GBP',
    lastUpdated: '2026-04-24T12:30:00Z',
  },
]

export const transactions: Transaction[] = [
  { id: 'txn-1', date: '2026-04-24', description: 'Tesco Superstore', amount: -67.42, type: 'debit', category: 'Groceries', accountId: 'acc-1' },
  { id: 'txn-2', date: '2026-04-24', description: 'Salary - Barclays PLC', amount: 4850.00, type: 'credit', category: 'Income', accountId: 'acc-1' },
  { id: 'txn-3', date: '2026-04-23', description: 'Amazon.co.uk', amount: -29.99, type: 'debit', category: 'Shopping', accountId: 'acc-1' },
  { id: 'txn-4', date: '2026-04-23', description: 'Netflix', amount: -15.99, type: 'debit', category: 'Entertainment', accountId: 'acc-1' },
  { id: 'txn-5', date: '2026-04-22', description: 'TfL Oyster', amount: -8.50, type: 'debit', category: 'Transport', accountId: 'acc-1' },
  { id: 'txn-6', date: '2026-04-22', description: 'Costa Coffee', amount: -4.75, type: 'debit', category: 'Food & Drink', accountId: 'acc-1' },
  { id: 'txn-7', date: '2026-04-21', description: 'Transfer to Savings', amount: -500.00, type: 'debit', category: 'Transfer', accountId: 'acc-1' },
  { id: 'txn-8', date: '2026-04-21', description: 'Transfer from Current', amount: 500.00, type: 'credit', category: 'Transfer', accountId: 'acc-2' },
  { id: 'txn-9', date: '2026-04-20', description: 'British Gas', amount: -124.00, type: 'debit', category: 'Bills', accountId: 'acc-1' },
  { id: 'txn-10', date: '2026-04-20', description: 'Gym Membership', amount: -39.99, type: 'debit', category: 'Health', accountId: 'acc-1' },
  { id: 'txn-11', date: '2026-04-19', description: 'Marks & Spencer', amount: -45.30, type: 'debit', category: 'Groceries', accountId: 'acc-1' },
  { id: 'txn-12', date: '2026-04-19', description: 'Interest Payment', amount: 18.75, type: 'credit', category: 'Interest', accountId: 'acc-2' },
]

export const notifications: Notification[] = [
  {
    id: 'notif-1',
    title: 'Salary Received',
    message: 'Your salary of £4,850.00 has been credited to your Current Account.',
    type: 'success',
    timestamp: '2026-04-24T09:15:00Z',
    read: false,
  },
  {
    id: 'notif-2',
    title: 'Direct Debit Reminder',
    message: 'Your mortgage payment of £1,245.00 is due on 28th April.',
    type: 'info',
    timestamp: '2026-04-23T14:00:00Z',
    read: false,
  },
  {
    id: 'notif-3',
    title: 'Security Alert',
    message: "A new device was used to log into your account. If this wasn't you, please contact us immediately.",
    type: 'alert',
    timestamp: '2026-04-22T18:30:00Z',
    read: true,
  },
  {
    id: 'notif-4',
    title: 'Savings Goal Achieved',
    message: 'Congratulations! Your Instant Saver balance has reached £45,000.',
    type: 'success',
    timestamp: '2026-04-21T10:00:00Z',
    read: true,
  },
]

export const spendingByCategory = [
  { category: 'Groceries', amount: 112.72, percentage: 13.4, color: '#00AEEF' },
  { category: 'Bills', amount: 124.00, percentage: 14.7, color: '#012169' },
  { category: 'Transport', amount: 8.50, percentage: 1.0, color: '#00B2A9' },
  { category: 'Entertainment', amount: 15.99, percentage: 1.9, color: '#FF6B35' },
  { category: 'Shopping', amount: 29.99, percentage: 3.6, color: '#7B2D8E' },
  { category: 'Food & Drink', amount: 4.75, percentage: 0.6, color: '#E63946' },
  { category: 'Health', amount: 39.99, percentage: 4.7, color: '#2A9D8F' },
  { category: 'Transfers', amount: 500.00, percentage: 59.3, color: '#00395D' },
]
