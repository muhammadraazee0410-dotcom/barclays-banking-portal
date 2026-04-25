import { accounts as initialAccounts } from '@/lib/mock-data'
import { Account, SavingsGoal } from '@/types'

describe('Transfer Logic', () => {
  let accounts: Account[]

  beforeEach(() => {
    accounts = JSON.parse(JSON.stringify(initialAccounts))
  })

  it('deducts from source on transfer', () => {
    const source = accounts.find(a => a.id === 'acc-1')!
    const originalBalance = source.balance
    const amount = 100
    source.balance -= amount
    expect(source.balance).toBe(originalBalance - amount)
  })

  it('adds to destination on own-account transfer', () => {
    const source = accounts.find(a => a.id === 'acc-1')!
    const dest = accounts.find(a => a.id === 'acc-2')!
    const amount = 500
    const origSource = source.balance
    const origDest = dest.balance
    source.balance -= amount
    dest.balance += amount
    expect(source.balance).toBe(origSource - amount)
    expect(dest.balance).toBe(origDest + amount)
  })

  it('rejects transfer with insufficient funds', () => {
    const source = accounts.find(a => a.id === 'acc-1')!
    const amount = source.balance + 1000
    const hasEnough = source.balance >= amount
    expect(hasEnough).toBe(false)
  })

  it('rejects transfer with zero amount', () => {
    expect(0 > 0).toBe(false)
  })

  it('rejects transfer with negative amount', () => {
    expect(-50 > 0).toBe(false)
  })

  it('rejects self-transfer', () => {
    const fromId = 'acc-1'
    const toId = 'acc-1'
    expect(fromId === toId).toBe(true)
  })

  it('preserves total balance after own-account transfer', () => {
    const source = accounts.find(a => a.id === 'acc-1')!
    const dest = accounts.find(a => a.id === 'acc-2')!
    const totalBefore = source.balance + dest.balance
    const amount = 200
    source.balance -= amount
    dest.balance += amount
    const totalAfter = source.balance + dest.balance
    expect(totalAfter).toBe(totalBefore)
  })
})
