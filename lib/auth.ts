export function isUserLogin() {
  if (typeof window === 'undefined') return false
  return localStorage.getItem('Authorization') === 'true'
}

export function onLogin() {
  localStorage.setItem('Authorization', 'true')
}

export function onLogout() {
  localStorage.removeItem('Authorization')
}
