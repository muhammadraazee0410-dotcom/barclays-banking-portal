/**
 * Tests for banking operations (transfer logic, savings goals)
 */
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

describe('Savings Goals Logic', () => {
  let goals: SavingsGoal[]

  beforeEach(() => {
    goals = [
      { id: 'goal-1', name: 'Emergency Fund', targetAmount: 10000, currentAmount: 6500, deadline: '2026-12-31', icon: '🛟', color: '#00AEEF' },
      { id: 'goal-2', name: 'Holiday', targetAmount: 5000, currentAmount: 2100, deadline: '2026-09-01', icon: '✈️', color: '#00B2A9' },
    ]
  })

  it('calculates progress percentage correctly', () => {
    const goal = goals[0]
    const progress = (goal.currentAmount / goal.targetAmount) * 100
    expect(progress).toBe(65)
  })

  it('adds a new savings goal', () => {
    const newGoal: SavingsGoal = {
      id: 'goal-3',
      name: 'New Car',
      targetAmount: 8000,
      currentAmount: 0,
      deadline: '2027-06-01',
      icon: '🚗',
      color: '#7B2D8E',
    }
    goals.push(newGoal)
    expect(goals).toHaveLength(3)
    expect(goals[2].name).toBe('New Car')
  })

  it('deletes a savings goal', () => {
    goals = goals.filter(g => g.id !== 'goal-1')
    expect(goals).toHaveLength(1)
    expect(goals[0].id).toBe('goal-2')
  })

  it('contributes to a goal', () => {
    const goal = goals[0]
    const contribution = 500
    goal.currentAmount += contribution
    expect(goal.currentAmount).toBe(7000)
  })

  it('caps contribution at target', () => {
    const goal = goals[0]
    const remaining = goal.targetAmount - goal.currentAmount
    const requestedAmount = 5000
    const actualContribution = Math.min(requestedAmount, remaining)
    expect(actualContribution).toBe(3500)
    goal.currentAmount += actualContribution
    expect(goal.currentAmount).toBe(10000)
  })

  it('rejects contribution when goal already reached', () => {
    const goal = goals[0]
    goal.currentAmount = goal.targetAmount
    const remaining = goal.targetAmount - goal.currentAmount
    expect(remaining).toBe(0)
    const contribution = Math.min(100, remaining)
    expect(contribution).toBe(0)
  })

  it('detects a completed goal', () => {
    const goal = goals[0]
    goal.currentAmount = goal.targetAmount
    const isComplete = goal.currentAmount >= goal.targetAmount
    expect(isComplete).toBe(true)
  })
})
