const formatCarPrice = (price: number) => {
  return `$${parseFloat(price.toString()).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`
}

export default formatCarPrice
