const getRSI = (priceHist, period = 14, changeKey = 'change', setKey = 'rsi') => {
  for (let i = priceHist.length - 1; i >= 0; i--) {

    let gArr = []
    let lArr = []
    let gAve = null
    let lAve = null
    let gCur = null
    let lCur = null

    if (i <= priceHist.length - 1 - period) {
      for (let j = i; j < i + period; j++) {
        let change = parseFloat(priceHist[j][changeKey])
        change >= 0 ? gArr.push(change) : gArr.push(0)
        change < 0 ? lArr.push(Math.abs(change)) : lArr.push(0)
      }
    }
    if (i === priceHist.length - 1 - period) {
      gAve = gArr.reduce((sum, g) => sum + g) / gArr.length
      lAve = lArr.reduce((sum, l) => sum + l) / lArr.length
    } else if (i < priceHist.length - 1 - period) {
      gCur = gArr.slice(0, 1)[0]
      lCur = lArr.slice(0, 1)[0]
      gAve = ((priceHist[i + 1]['gAve'] * (period - 1)) + gCur) / period
      lAve = ((priceHist[i + 1]['lAve'] * (period - 1)) + lCur) / period
      
      delete priceHist[i + 1]['gAve']
      delete priceHist[i + 1]['lAve']
    } else {
      priceHist[i]['gAve'] = 0
      priceHist[i]['lAve'] = 0
      priceHist[i][`${setKey}${period}`] = (0).toFixed(2)
    }
    priceHist[i]['gAve'] = gAve
    priceHist[i]['lAve'] = lAve
    priceHist[i][`${setKey}${period}`] = (100 - (100 / (1 + (gAve / lAve)))).toFixed(4)
  }
  return priceHist
}

export { getRSI }
