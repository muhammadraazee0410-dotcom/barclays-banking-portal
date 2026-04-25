import { formatCurrency, formatDate, getAccountIcon, getTransactionIcon, cn } from '@/lib/utils'

describe('formatCurrency', () => {
  it('formats positive GBP amount', () => {
    expect(formatCurrency(12847.53)).toBe('£12,847.53')
  })

  it('formats negative amount with minus sign', () => {
    expect(formatCurrency(-1524.67)).toBe('-£1,524.67')
  })

  it('formats zero', () => {
    expect(formatCurrency(0)).toBe('£0.00')
  })

  it('formats USD', () => {
    expect(formatCurrency(100, 'USD')).toBe('$100.00')
  })

  it('formats EUR', () => {
    expect(formatCurrency(100, 'EUR')).toBe('€100.00')
  })
})

describe('formatDate', () => {
  it('formats a date string', () => {
    const result = formatDate('2026-04-24')
    expect(result).toMatch(/24/)
    expect(result).toMatch(/Apr/)
    expect(result).toMatch(/2026/)
  })
})

describe('getAccountIcon', () => {
  it('returns correct icons', () => {
    expect(getAccountIcon('current')).toBe('🏦')
    expect(getAccountIcon('savings')).toBe('💰')
    expect(getAccountIcon('credit')).toBe('💳')
    expect(getAccountIcon('mortgage')).toBe('🏠')
    expect(getAccountIcon('unknown')).toBe('📊')
  })
})

describe('getTransactionIcon', () => {
  it('returns correct icons for known categories', () => {
    expect(getTransactionIcon('Groceries')).toBe('🛒')
    expect(getTransactionIcon('Income')).toBe('💰')
  })

  it('returns default icon for unknown category', () => {
    expect(getTransactionIcon('Other')).toBe('💸')
  })
})

describe('cn', () => {
  it('joins classes', () => {
    expect(cn('a', 'b', 'c')).toBe('a b c')
  })

  it('filters falsy values', () => {
    expect(cn('a', false, undefined, null, 'b')).toBe('a b')
  })
})
