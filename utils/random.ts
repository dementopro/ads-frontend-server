export const random = (min: number, max: number, decimal = 2) => {
  return Number((Math.random() * (max - min) + min).toFixed(decimal))
}
