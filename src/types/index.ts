export interface Account {
  id: string
  name: string
  type: 'current' | 'savings' | 'credit' | 'mortgage'
  number: string
  sortCode: string
  balance: number
  currency: string
  lastUpdated: string
}

export interface Transaction {
  id: string
  date: string
  description: string
  amount: number
  type: 'credit' | 'debit'
  category: string
  accountId: string
}

export interface QuickAction {
  id: string
  label: string
  icon: string
  href: string
  color: string
}

export interface Notification {
  id: string
  title: string
  message: string
  type: 'info' | 'warning' | 'success' | 'alert'
  timestamp: string
  read: boolean
}
