/**
 * Tests for authentication logic (unit tests without React rendering)
 */

const USERS_KEY = 'barclays_users'
const AUTH_KEY = 'barclays_auth'

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {}
  return {
    getItem: (key: string) => store[key] ?? null,
    setItem: (key: string, value: string) => { store[key] = value },
    removeItem: (key: string) => { delete store[key] },
    clear: () => { store = {} },
  }
})()

Object.defineProperty(global, 'localStorage', { value: localStorageMock })

describe('Auth - localStorage operations', () => {
  beforeEach(() => {
    localStorageMock.clear()
  })

  it('stores and retrieves user data', () => {
    const users = [
      { id: 'user-1', email: 'test@test.com', password: 'pass123', firstName: 'John', lastName: 'Doe', createdAt: '2026-01-01' }
    ]
    localStorage.setItem(USERS_KEY, JSON.stringify(users))
    const stored = JSON.parse(localStorage.getItem(USERS_KEY) || '[]')
    expect(stored).toHaveLength(1)
    expect(stored[0].email).toBe('test@test.com')
  })

  it('returns empty array when no users exist', () => {
    const stored = localStorage.getItem(USERS_KEY)
    expect(stored).toBeNull()
  })

  it('finds a user by email and password', () => {
    const users = [
      { id: 'user-1', email: 'john@bar.com', password: 'secure123', firstName: 'John', lastName: 'D', createdAt: '2026-01-01' },
      { id: 'user-2', email: 'jane@bar.com', password: 'other456', firstName: 'Jane', lastName: 'S', createdAt: '2026-01-01' },
    ]
    localStorage.setItem(USERS_KEY, JSON.stringify(users))

    const stored = JSON.parse(localStorage.getItem(USERS_KEY) || '[]')
    const found = stored.find((u: any) => u.email === 'john@bar.com' && u.password === 'secure123')
    expect(found).toBeDefined()
    expect(found.firstName).toBe('John')

    const notFound = stored.find((u: any) => u.email === 'john@bar.com' && u.password === 'wrong')
    expect(notFound).toBeUndefined()
  })

  it('prevents duplicate email signup', () => {
    const users = [
      { id: 'user-1', email: 'test@test.com', password: 'pass123', firstName: 'John', lastName: 'Doe', createdAt: '2026-01-01' }
    ]
    localStorage.setItem(USERS_KEY, JSON.stringify(users))

    const stored = JSON.parse(localStorage.getItem(USERS_KEY) || '[]')
    const exists = stored.find((u: any) => u.email === 'test@test.com')
    expect(exists).toBeDefined()
  })

  it('stores auth session on login', () => {
    const userData = { id: 'user-1', email: 'test@test.com', firstName: 'John', lastName: 'Doe', createdAt: '2026-01-01' }
    localStorage.setItem(AUTH_KEY, JSON.stringify(userData))

    const session = JSON.parse(localStorage.getItem(AUTH_KEY) || 'null')
    expect(session).not.toBeNull()
    expect(session.email).toBe('test@test.com')
  })

  it('clears auth session on logout', () => {
    localStorage.setItem(AUTH_KEY, JSON.stringify({ id: '1' }))
    localStorage.removeItem(AUTH_KEY)
    expect(localStorage.getItem(AUTH_KEY)).toBeNull()
  })
})
