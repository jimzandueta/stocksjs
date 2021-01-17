import { getMACD } from './getMACD'

const getMACDCross = (priceHist, periods, priceKey = 'price') => {
  let fastPeriod = periods.fastPeriod ? periods.fastPeriod : 12
  let slowPeriod = periods.slowPeriod ? periods.slowPeriod : 26
  let signalLength = periods.signalLength ? periods.signalLength : 9
  let options = {
    includeSignal: true,
    includeHistogram: true
  }

  let isWithMACD = priceHist[0].hasOwnProperty('macd')
  priceHist = !isWithMACD ? getMACD(priceHist, { fastPeriod, slowPeriod, signalLength }, priceKey, 'macd', options) : priceHist
  
  let arr = []
  let cIdx = 0

  for (let i = 0; i < priceHist.length; i++) {
    let a = parseFloat(priceHist[cIdx].macd) > parseFloat(priceHist[cIdx].signal)
    let b = parseFloat(priceHist[i].macd) > parseFloat(priceHist[i].signal)
    if (!a != !b) {
      priceHist[i - cIdx - 1]['days'] = i - cIdx - 1
      arr.push(priceHist[i - cIdx - 1])
      cIdx = i
    }
    if (!isWithMACD) delete priceHist[i]['macd']
  }
  return arr
}

export { getMACDCross }
