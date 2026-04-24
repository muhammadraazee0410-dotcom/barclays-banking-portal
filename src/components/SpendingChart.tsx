'use client'

import { formatCurrency } from '@/lib/utils'

interface SpendingItem {
  category: string
  amount: number
  percentage: number
  color: string
}

interface SpendingChartProps {
  data: SpendingItem[]
}

export default function SpendingChart({ data }: SpendingChartProps) {
  const total = data.reduce((sum, item) => sum + item.amount, 0)

  const radius = 80
  const circumference = 2 * Math.PI * radius
  let offset = 0

  const segments = data.map((item) => {
    const length = (item.amount / total) * circumference
    const segment = { ...item, offset, length }
    offset += length
    return segment
  })

  return (
    <div className="flex flex-col lg:flex-row items-center gap-6" data-testid="spending-chart">
      {/* Donut */}
      <div className="relative">
        <svg width="200" height="200" viewBox="0 0 200 200" className="transform -rotate-90">
          {segments.map((seg, i) => (
            <circle
              key={i}
              cx="100"
              cy="100"
              r={radius}
              fill="none"
              stroke={seg.color}
              strokeWidth="24"
              strokeDasharray={`${seg.length} ${circumference - seg.length}`}
              strokeDashoffset={-seg.offset}
              className="transition-all duration-500"
            />
          ))}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-xs text-gray-500">Total Spend</p>
          <p className="text-lg font-bold text-barclays-dark">{formatCurrency(total)}</p>
        </div>
      </div>

      {/* Legend */}
      <div className="grid grid-cols-2 gap-2 flex-1 w-full">
        {data.map((item) => (
          <div key={item.category} className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50">
            <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
            <div className="min-w-0">
              <p className="text-xs font-medium text-barclays-text truncate">{item.category}</p>
              <p className="text-xs text-gray-400">{formatCurrency(item.amount)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
