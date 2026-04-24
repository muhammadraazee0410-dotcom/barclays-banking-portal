import { accounts, transactions, notifications, spendingByCategory } from '@/lib/mock-data'

describe('Mock Data', () => {
  describe('accounts', () => {
    it('has 4 accounts', () => {
      expect(accounts).toHaveLength(4)
    })

    it('each account has required fields', () => {
      accounts.forEach((account) => {
        expect(account).toHaveProperty('id')
        expect(account).toHaveProperty('name')
        expect(account).toHaveProperty('type')
        expect(account).toHaveProperty('balance')
        expect(account).toHaveProperty('currency')
        expect(['current', 'savings', 'credit', 'mortgage']).toContain(account.type)
      })
    })

    it('current and savings have positive balances', () => {
      const positive = accounts.filter(a => a.type === 'current' || a.type === 'savings')
      positive.forEach((a) => expect(a.balance).toBeGreaterThan(0))
    })

    it('credit and mortgage have negative balances', () => {
      const negative = accounts.filter(a => a.type === 'credit' || a.type === 'mortgage')
      negative.forEach((a) => expect(a.balance).toBeLessThan(0))
    })
  })

  describe('transactions', () => {
    it('has at least 10 transactions', () => {
      expect(transactions.length).toBeGreaterThanOrEqual(10)
    })

    it('each transaction has correct type', () => {
      transactions.forEach((t) => {
        expect(['credit', 'debit']).toContain(t.type)
        if (t.type === 'credit') expect(t.amount).toBeGreaterThan(0)
        if (t.type === 'debit') expect(t.amount).toBeLessThan(0)
      })
    })
  })

  describe('notifications', () => {
    it('has notifications', () => {
      expect(notifications.length).toBeGreaterThan(0)
    })

    it('each notification has required fields', () => {
      notifications.forEach((n) => {
        expect(n).toHaveProperty('id')
        expect(n).toHaveProperty('title')
        expect(n).toHaveProperty('message')
        expect(n).toHaveProperty('type')
        expect(['info', 'warning', 'success', 'alert']).toContain(n.type)
      })
    })
  })

  describe('spendingByCategory', () => {
    it('has spending data', () => {
      expect(spendingByCategory.length).toBeGreaterThan(0)
    })

    it('each item has a color', () => {
      spendingByCategory.forEach((s) => {
        expect(s.color).toMatch(/^#[0-9A-Fa-f]{6}$/)
      })
    })
  })
})
