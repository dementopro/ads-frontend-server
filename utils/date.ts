export function formatDate(date: string) {
  return new Date(date).toLocaleDateString()
}

export function getToday() {
  return new Date().toLocaleDateString()
}

export function getDateRange(gap: number) {
  const today = new Date()
  const start = new Date(today.setDate(today.getDate() - (gap - 1)))
  const end = new Date()
  return formatDateRange([start, end])
}

export function formatDateRange(range: Date[]) {
  // YYYY-MM-DD
  return range.map(date => date.toISOString().split('T')[0])
}

export function getDateListBetween(start: string, end: string) {
  const startDate = new Date(start)
  const endDate = new Date(end)
  const dateList = []
  while (startDate <= endDate) {
    dateList.push(new Date(startDate))
    startDate.setDate(startDate.getDate() + 1)
  }
  return formatDateRange(dateList)
}
