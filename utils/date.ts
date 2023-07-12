export function formatDate(date: string) {
  return new Date(date).toLocaleDateString()
}

export function getToday() {
  return new Date().toLocaleDateString()
}
