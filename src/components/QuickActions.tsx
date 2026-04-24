'use client'

const actions = [
  { id: '1', label: 'Transfer Money', icon: '\ud83d\udcb8', color: 'bg-blue-50 text-blue-700 hover:bg-blue-100' },
  { id: '2', label: 'Pay Bills', icon: '\ud83d\udcc4', color: 'bg-green-50 text-green-700 hover:bg-green-100' },
  { id: '3', label: 'Mobile Top-up', icon: '\ud83d\udcf1', color: 'bg-purple-50 text-purple-700 hover:bg-purple-100' },
  { id: '4', label: 'Statements', icon: '\ud83d\udcca', color: 'bg-amber-50 text-amber-700 hover:bg-amber-100' },
  { id: '5', label: 'Standing Orders', icon: '\ud83d\udd04', color: 'bg-teal-50 text-teal-700 hover:bg-teal-100' },
  { id: '6', label: 'Settings', icon: '\u2699\ufe0f', color: 'bg-gray-50 text-gray-700 hover:bg-gray-100' },
]

export default function QuickActions() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3" data-testid="quick-actions">
      {actions.map((action) => (
        <button
          key={action.id}
          className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${action.color}`}
        >
          <span className="text-xl">{action.icon}</span>
          <span>{action.label}</span>
        </button>
      ))}
    </div>
  )
}
