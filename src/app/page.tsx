'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AccountCard from '@/components/AccountCard'
import TransactionList from '@/components/TransactionList'
import SpendingChart from '@/components/SpendingChart'
import QuickActions from '@/components/QuickActions'
import TransferForm from '@/components/TransferForm'
import { accounts, transactions, spendingByCategory } from '@/lib/mock-data'
import { formatCurrency } from '@/lib/utils'

export default function Home() {
  const [selectedAccount, setSelectedAccount] = useState<string>('acc-1')
  const [activeTab, setActiveTab] = useState<'overview' | 'transfer'>('overview')

  const filteredTransactions = transactions.filter(
    (t) => t.accountId === selectedAccount
  )

  const totalBalance = accounts
    .filter((a) => a.type === 'current' || a.type === 'savings')
    .reduce((sum, a) => sum + a.balance, 0)

  return (
    <>
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero text-white py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-white/70 text-sm">Welcome back,</p>
                <h1 className="text-3xl sm:text-4xl font-bold mt-1">John Davidson</h1>
                <p className="text-white/60 text-sm mt-2">
                  Last login: 24 Apr 2026 at 10:30 AM
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 border border-white/20">
                <p className="text-white/70 text-xs mb-1">Total Available Balance</p>
                <p className="text-3xl font-bold">{formatCurrency(totalBalance)}</p>
                <p className="text-white/50 text-xs mt-1">Across {accounts.filter(a => a.type === 'current' || a.type === 'savings').length} accounts</p>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Accounts Section */}
          <section id="accounts" className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-barclays-dark">Your Accounts</h2>
              <a href="#" className="text-barclays-blue text-sm font-medium hover:underline">
                View All \u2192
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {accounts.map((account) => (
                <AccountCard
                  key={account.id}
                  account={account}
                  isSelected={selectedAccount === account.id}
                  onClick={() => setSelectedAccount(account.id)}
                />
              ))}
            </div>
          </section>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Transactions & Transfer */}
            <div className="lg:col-span-2 space-y-6">
              {/* Tab Controls */}
              <div className="flex gap-1 bg-gray-100 p-1 rounded-xl">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-all ${
                    activeTab === 'overview'
                      ? 'bg-white text-barclays-dark shadow-sm'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Recent Activity
                </button>
                <button
                  onClick={() => setActiveTab('transfer')}
                  className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-all ${
                    activeTab === 'transfer'
                      ? 'bg-white text-barclays-dark shadow-sm'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Make a Transfer
                </button>
              </div>

              {activeTab === 'overview' ? (
                <div className="card">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-barclays-dark">
                      Transactions \u2014 {accounts.find(a => a.id === selectedAccount)?.name}
                    </h3>
                    <span className="text-xs text-gray-400">{filteredTransactions.length} transactions</span>
                  </div>
                  {filteredTransactions.length > 0 ? (
                    <TransactionList transactions={filteredTransactions} limit={8} />
                  ) : (
                    <div className="text-center py-12 text-gray-400">
                      <p className="text-4xl mb-2">\ud83d\udced</p>
                      <p className="text-sm">No recent transactions for this account</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="card" id="payments">
                  <h3 className="font-semibold text-barclays-dark mb-4">Transfer Money</h3>
                  <TransferForm />
                </div>
              )}
            </div>

            {/* Right Column - Spending & Quick Actions */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="card">
                <h3 className="font-semibold text-barclays-dark mb-4">Quick Actions</h3>
                <QuickActions />
              </div>

              {/* Spending Breakdown */}
              <div className="card">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-barclays-dark">Spending This Month</h3>
                  <span className="text-xs text-gray-400">April 2026</span>
                </div>
                <SpendingChart data={spendingByCategory} />
              </div>

              {/* Security Info */}
              <div className="bg-barclays-light rounded-xl p-5 border border-barclays-blue/20">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-barclays-blue/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-barclays-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-barclays-dark text-sm">Security Centre</h4>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                      Your account is protected with 2-factor authentication. We will never ask for your full PIN or password.
                    </p>
                    <a href="#" className="text-barclays-blue text-xs font-medium mt-2 inline-block hover:underline">
                      Review Security Settings \u2192
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
