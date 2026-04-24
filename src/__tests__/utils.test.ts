import { formatCurrency, formatDate, getAccountIcon, getTransactionIcon, cn } from '@/lib/utils'

describe('formatCurrency', () => {
  it('formats positive GBP amount', () => {
    expect(formatCurrency(12847.53)).toBe('\u00a312,847.53')
  })

  it('formats negative amount with minus sign', () => {
    expect(formatCurrency(-1524.67)).toBe('-\u00a31,524.67')
  })

  it('formats zero', () => {
    expect(formatCurrency(0)).toBe('\u00a30.00')
  })

  it('formats USD', () => {
    expect(formatCurrency(100, 'USD')).toBe('$100.00')
  })

  it('formats EUR', () => {
    expect(formatCurrency(100, 'EUR')).toBe('\u20ac100.00')
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
    expect(getAccountIcon('current')).toBe('\ud83c\udfe6')
    expect(getAccountIcon('savings')).toBe('\ud83d\udcb0')
    expect(getAccountIcon('credit')).toBe('\ud83d\udcb3')
    expect(getAccountIcon('mortgage')).toBe('\ud83c\udfe0')
    expect(getAccountIcon('unknown')).toBe('\ud83d\udcca')
  })
})

describe('getTransactionIcon', () => {
  it('returns correct icons for known categories', () => {
    expect(getTransactionIcon('Groceries')).toBe('\ud83d\uded2')
    expect(getTransactionIcon('Income')).toBe('\ud83d\udcb0')
  })

  it('returns default icon for unknown category', () => {
    expect(getTransactionIcon('Other')).toBe('\ud83d\udcb8')
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
