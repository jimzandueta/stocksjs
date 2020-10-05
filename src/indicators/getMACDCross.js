import { getMACD } from './getMACD'

const getMACDCross = (priceHist, periods, priceKey = 'price') => {
  let fastPeriod = periods.fastPeriod ? period.fastPeriod : 12
  let slowPeriod = periods.slowPeriod ? period.slowPeriod : 26
  let signalLength = periods.signalLength ? period.signalLength : 9
  let options = {
    includeSignal: true,
    includeHistogram: true
  }

  histArr = getMACD(histArr, { fastPeriod, slowPeriod, signalLength }, priceKey, 'macd', options)

  let arr = []
  let cIdx = 0

  for (let i = 0; i < priceHist.length; i++) {
    let a = parseFloat(priceHist[cIdx].macd) > parseFloat(priceHist[cIdx].signal)
    let b = parseFloat(priceHist[i].macd) > parseFloat(priceHist[i].signal)
    if (!a != !b) {
      arr.push(priceHist[i - cIdx - 1])
      cIdx = i
    }
  }
  return arr
}

export { getMACDCross }
