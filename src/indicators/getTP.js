const getTP = (priceHist, priceKeys = {c: 'close', h: 'high', l:'low'}, setKey = 'tp') => {
  for (let i = 0; i < priceHist.length; i++) {
    let sum = priceHist[i][priceKeys.c] + priceHist[i][priceKeys.h] + priceHist[i][priceKeys.l]
    priceHist[i][setKey] = parseFloat((sum / 3).toFixed(6))
  }
  return priceHist
}

export { getTP }
