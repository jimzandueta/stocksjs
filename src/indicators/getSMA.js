const getSMA = (priceHist, period, priceKey = 'price', setKey = 'sma') => {
  for (let i = 0; i < priceHist.length; i++) {
    if (i < priceHist.length - period + 1) {
      let tt = 0
      for (let j = i; j < i + period; j++) {
        tt += parseFloat(priceHist[j][priceKey])
      }
      priceHist[i][`${setKey}${period}`] = (tt / period).toFixed(6)
    } else {
      priceHist[i][`${setKey}${period}`] = (0).toFixed(6)
    }
  }
  return priceHist
}

export { getSMA }
