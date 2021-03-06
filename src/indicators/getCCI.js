import { getTP } from './getTP'
import { getSMA } from './getSMA'

const getCCI = (priceHist, period = 20, constant = 0.015, priceKeys = {c: 'close', h: 'high', l:'low'}, setKey = 'cci') => {
  priceHist = getTP(priceHist, priceKeys)
  priceHist = getSMA(priceHist, period, 'tp', 'smatp')

  for (let i = priceHist.length - 1; i >= 0; i--) {
    if (i <= priceHist.length - period) {
      let mdSum = 0.0
      for (let j = i; j < i + period; j++) {
        mdSum += Math.abs(priceHist[j]['tp'] - priceHist[i][`smatp${period}`])
      }
      let md = mdSum / period
      priceHist[i][setKey] = parseFloat(((priceHist[i]['tp'] - priceHist[i][`smatp${period}`]) / (constant * md)).toFixed(4))
    } else {
      priceHist[i][setKey] = 0
    }
  }
  return priceHist
}

export { getCCI }
