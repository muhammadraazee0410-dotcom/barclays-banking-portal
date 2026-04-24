'use client'

import { useState } from 'react'

export default function TransferForm() {
  const [formData, setFormData] = useState({
    fromAccount: 'acc-1',
    toAccount: '',
    sortCode: '',
    accountNumber: '',
    amount: '',
    reference: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!formData.amount || parseFloat(formData.amount) <= 0) {
      setError('Please enter a valid amount')
      return
    }
    if (!formData.accountNumber && !formData.toAccount) {
      setError('Please enter recipient details')
      return
    }

    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" data-testid="transfer-form">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">From Account</label>
        <select
          value={formData.fromAccount}
          onChange={(e) => setFormData({ ...formData, fromAccount: e.target.value })}
          className="input-field"
        >
          <option value="acc-1">Current Account (****4829) \u2014 \u00a312,847.53</option>
          <option value="acc-2">Instant Saver (****7391) \u2014 \u00a345,230.00</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Sort Code</label>
          <input
            type="text"
            placeholder="XX-XX-XX"
            value={formData.sortCode}
            onChange={(e) => setFormData({ ...formData, sortCode: e.target.value })}
            className="input-field"
            maxLength={8}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Account Number</label>
          <input
            type="text"
            placeholder="12345678"
            value={formData.accountNumber}
            onChange={(e) => setFormData({ ...formData, accountNumber: e.target.value })}
            className="input-field"
            maxLength={8}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Amount (\u00a3)</label>
        <input
          type="number"
          placeholder="0.00"
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
          className="input-field"
          min="0.01"
          step="0.01"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Reference</label>
        <input
          type="text"
          placeholder="Payment reference"
          value={formData.reference}
          onChange={(e) => setFormData({ ...formData, reference: e.target.value })}
          className="input-field"
          maxLength={18}
        />
      </div>

      {error && (
        <div className="bg-red-50 text-red-700 px-4 py-2 rounded-lg text-sm" data-testid="transfer-error">
          {error}
        </div>
      )}

      {submitted && (
        <div className="bg-green-50 text-green-700 px-4 py-2 rounded-lg text-sm" data-testid="transfer-success">
          \u2705 Transfer initiated successfully!
        </div>
      )}

      <button type="submit" className="btn-primary w-full">
        Send Payment
      </button>
    </form>
  )
}
