const getDeliveryDateRange = () => {
  const today = new Date()
  const startDate = new Date(today.getTime() + 3 * 24 * 60 * 60 * 1000) // Add 3 days
  const endDate = new Date(today.getTime() + 8 * 24 * 60 * 60 * 1000) // Add 7 days

  const isSameYear = startDate.getFullYear() === endDate.getFullYear()

  const startOptions: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    day: 'numeric',
    month: 'numeric',
    year: isSameYear ? undefined : 'numeric',
  }

  const endOptions: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    day: 'numeric',
    month: 'numeric',
    year: isSameYear ? undefined : 'numeric',
  }

  const startDateString = startDate
    .toLocaleDateString('en-GB', startOptions)
    .replace(/\//g, '.')
  const endDateString = endDate
    .toLocaleDateString('en-GB', endOptions)
    .replace(/\//g, '.')

  return [startDateString.toLowerCase(), endDateString.toLowerCase()]
}

export default getDeliveryDateRange
