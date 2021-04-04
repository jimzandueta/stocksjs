const getSMA = (priceHist, period, priceKey = 'close', setKey = 'sma') => {
  for (let i = 0; i < priceHist.length; i++) {
    if (i < priceHist.length - period + 1) {
      let tt = 0
      for (let j = i; j < i + period; j++) {
        tt += priceHist[j][priceKey]
      }
      priceHist[i][`${setKey}${period}`] = parseFloat((tt / period).toFixed(6))
    } else {
      priceHist[i][`${setKey}${period}`] = 0
    }
  }
  return priceHist
}

export { getSMA }
