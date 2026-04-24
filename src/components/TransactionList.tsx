'use client'

import { Transaction } from '@/types'
import { formatCurrency, formatDate, getTransactionIcon, cn } from '@/lib/utils'

interface TransactionListProps {
  transactions: Transaction[]
  limit?: number
}

export default function TransactionList({ transactions, limit }: TransactionListProps) {
  const displayed = limit ? transactions.slice(0, limit) : transactions

  const grouped = displayed.reduce<Record<string, Transaction[]>>((acc, txn) => {
    if (!acc[txn.date]) acc[txn.date] = []
    acc[txn.date].push(txn)
    return acc
  }, {})

  return (
    <div className="space-y-4" data-testid="transaction-list">
      {Object.entries(grouped).map(([date, txns]) => (
        <div key={date}>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-1">
            {formatDate(date)}
          </p>
          <div className="space-y-1">
            {txns.map((txn) => (
              <div
                key={txn.id}
                className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                data-testid={`transaction-${txn.id}`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl w-8 text-center" role="img" aria-label={txn.category}>
                    {getTransactionIcon(txn.category)}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-barclays-text">{txn.description}</p>
                    <p className="text-xs text-gray-400">{txn.category}</p>
                  </div>
                </div>
                <span className={cn(
                  'text-sm font-semibold tabular-nums',
                  txn.amount > 0 ? 'text-green-600' : 'text-barclays-text'
                )}>
                  {txn.amount > 0 ? '+' : ''}{formatCurrency(txn.amount)}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
