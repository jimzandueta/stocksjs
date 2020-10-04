const getALMA = (priceHist, period = 9, sigma = 6.0, offset = 0.85, keyPrice = 'price') => {
  const window = period + 1
  const m = Math.floor(offset * period)
  const s = period / sigma
  for (let i = 0; i < priceHist.length; i++) {
    let cSum = 0.0
    let norm = 0.0
    if (i + period < priceHist.length) {
      for (let j = i; j < i + window; j++) {
        let jj = j - i
        let coeff = Math.exp(-((jj - m) * (jj - m)) / (2 * s * s))
        cSum += parseFloat(priceHist[(i + window) - 1 - jj][keyPrice]) * coeff
        norm += coeff
      }
      priceHist[i].alma = (cSum / norm).toFixed(4)
    } else {
      priceHist[i].alma = (0).toFixed(4)
    }
  }
  return priceHist
}

export {getALMA}
