export const runCalculator = (fn) => {
  return (...args) => {
    return fn(...args)
  }
}

