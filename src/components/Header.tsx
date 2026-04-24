'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [notifOpen, setNotifOpen] = useState(false)

  return (
    <header className="bg-barclays-navy text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-barclays-blue flex items-center justify-center font-bold text-sm">
              B
            </div>
            <span className="text-xl font-bold tracking-tight">Barclays</span>
            <span className="hidden sm:inline text-barclays-blue text-sm font-medium ml-1">Portal</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {['Dashboard', 'Accounts', 'Payments', 'Cards', 'Support'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-4 py-2 rounded-lg text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setNotifOpen(!notifOpen)}
                className="relative p-2 rounded-lg hover:bg-white/10 transition-all"
                aria-label="Notifications"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              {notifOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 py-2 text-barclays-text">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <h3 className="font-semibold text-sm">Notifications</h3>
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    <div className="px-4 py-3 hover:bg-gray-50 border-l-4 border-green-500">
                      <p className="text-sm font-medium">Salary Received</p>
                      <p className="text-xs text-gray-500 mt-1">\u00a34,850.00 credited to Current Account</p>
                    </div>
                    <div className="px-4 py-3 hover:bg-gray-50 border-l-4 border-blue-500">
                      <p className="text-sm font-medium">Direct Debit Reminder</p>
                      <p className="text-xs text-gray-500 mt-1">Mortgage payment due 28th April</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Profile */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-barclays-blue flex items-center justify-center text-sm font-bold">
                JD
              </div>
              <span className="hidden sm:inline text-sm font-medium">John D.</span>
            </div>

            {/* Mobile menu */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/10"
              aria-label="Menu"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          'md:hidden overflow-hidden transition-all duration-300',
          menuOpen ? 'max-h-64 pb-4' : 'max-h-0'
        )}>
          {['Dashboard', 'Accounts', 'Payments', 'Cards', 'Support'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block px-4 py-2 rounded-lg text-sm font-medium text-white/80 hover:text-white hover:bg-white/10"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
