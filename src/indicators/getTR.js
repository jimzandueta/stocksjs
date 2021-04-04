const getTR = (priceHist, priceKeys = { c: 'close', h: 'high', l: 'low' }, setKey = 'tr') => {
  for (let i = 0; i < priceHist.length; i++) {
    let arr = [
      priceHist[i][priceKeys.h] - priceHist[i][priceKeys.l],
      Math.abs(i === priceHist.length - 1 ? 0 : priceHist[i][priceKeys.h] - priceHist[i + 1][priceKeys.c]),
      Math.abs(i === priceHist.length - 1 ? 0 : priceHist[i][priceKeys.l] - priceHist[i + 1][priceKeys.c]),
    ]
    priceHist[i][setKey] = arr.sort().pop()
  }
  return priceHist
}

export { getTR }
