const getDM = (priceHist, priceKeys = { c: 'close', h: 'high', l: 'low' }, setKey = 'tr') => {
  for (let i = 0; i < priceHist.length; i++) {
    priceHist[i]['dmp'] = priceHist[i][priceKeys.h] - (i === priceHist.length - 1 ? 0 : priceHist[i + 1][priceKeys.h])
    priceHist[i]['dmn'] = (i === priceHist.length - 1 ? 0 : priceHist[i + 1][priceKeys.l]) - priceHist[i][priceKeys.l]
    if (priceHist[i]['dmp'] < 0 && priceHist[i]['dmn'] < 0) {
      priceHist[i]['dmn'] = 0
      priceHist[i]['dmp'] = 0
    } else if (priceHist[i]['dmp'] > priceHist[i]['dmn']) {
      priceHist[i]['dmn'] = 0
    } else if (priceHist[i]['dmp'] < priceHist[i]['dmn']) {
      priceHist[i]['dmp'] = 0
    } else {
      priceHist[i]['dmn'] = 0
      priceHist[i]['dmp'] = 0
    }
  }
  return priceHist
}

export { getDM }
