'use client'

import { Account } from '@/types'
import { formatCurrency, getAccountIcon, cn } from '@/lib/utils'

interface AccountCardProps {
  account: Account
  isSelected?: boolean
  onClick?: () => void
}

export default function AccountCard({ account, isSelected, onClick }: AccountCardProps) {
  const isNegative = account.balance < 0
  const typeLabels: Record<string, string> = {
    current: 'Current Account',
    savings: 'Savings Account',
    credit: 'Credit Card',
    mortgage: 'Mortgage',
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        'card w-full text-left transition-all duration-200',
        isSelected && 'ring-2 ring-barclays-blue shadow-lg',
        'hover:scale-[1.01]'
      )}
      data-testid={`account-card-${account.id}`}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <span className="text-2xl" role="img" aria-label={account.type}>
            {getAccountIcon(account.type)}
          </span>
          <div>
            <h3 className="font-semibold text-barclays-dark">{account.name}</h3>
            <p className="text-xs text-gray-500">{typeLabels[account.type]}</p>
          </div>
        </div>
        <span className="text-xs text-gray-400 font-mono">{account.number}</span>
      </div>

      <div className="mt-4">
        <p className="text-xs text-gray-500 mb-1">
          {account.type === 'credit' ? 'Outstanding Balance' : account.type === 'mortgage' ? 'Remaining' : 'Available Balance'}
        </p>
        <p className={cn(
          'text-2xl font-bold',
          isNegative ? 'text-red-600' : 'text-barclays-dark'
        )}>
          {formatCurrency(account.balance, account.currency)}
        </p>
      </div>

      {account.sortCode && (
        <p className="text-xs text-gray-400 mt-3">Sort Code: {account.sortCode}</p>
      )}
    </button>
  )
}
