export function formatCurrency(amount: number, currency: string = 'GBP'): string {
  const symbol = currency === 'GBP' ? '£' : currency === 'USD' ? '$' : '€'
  const absAmount = Math.abs(amount)
  const formatted = absAmount.toLocaleString('en-GB', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
  return amount < 0 ? `-${symbol}${formatted}` : `${symbol}${formatted}`
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export function formatRelativeTime(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffMins = Math.floor(diffMs / 60000)
  const diffHours = Math.floor(diffMs / 3600000)
  const diffDays = Math.floor(diffMs / 86400000)

  if (diffMins < 1) return 'Just now'
  if (diffMins < 60) return `${diffMins}m ago`
  if (diffHours < 24) return `${diffHours}h ago`
  if (diffDays < 7) return `${diffDays}d ago`
  return formatDate(dateString)
}

export function getAccountIcon(type: string): string {
  switch (type) {
    case 'current': return '🏦'
    case 'savings': return '💰'
    case 'credit': return '💳'
    case 'mortgage': return '🏠'
    default: return '📊'
  }
}

export function getTransactionIcon(category: string): string {
  const icons: Record<string, string> = {
    'Groceries': '🛒',
    'Income': '💰',
    'Shopping': '🛍️',
    'Entertainment': '🎬',
    'Transport': '🚇',
    'Food & Drink': '☕',
    'Transfer': '↔️',
    'Bills': '📄',
    'Health': '🏋️',
    'Interest': '📈',
  }
  return icons[category] || '💸'
}

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ')
}
