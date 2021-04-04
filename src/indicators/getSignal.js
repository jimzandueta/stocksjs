import { getSMA } from './getSMA'
import { getMACD } from './getMACD'

const getSignal = (priceHist, periods, priceKey = 'close', setKey = 'signal') => {
  let fastPeriod = periods.fastPeriod ? periods.fastPeriod : 12
  let slowPeriod = periods.slowPeriod ? periods.slowPeriod : 26
  let signalLength = periods.signalLength ? periods.signalLength : 9

  let isWithMACD = priceHist[0].hasOwnProperty('macd')
  let isWithMACDSMA = priceHist[0].hasOwnProperty(`macdsma${signalLength}`)

  priceHist = !isWithMACD ? getMACD(priceHist, { fastPeriod, slowPeriod }, {}, priceKey) : priceHist
  priceHist = !isWithMACDSMA ? getSMA(priceHist, signalLength, 'macd', 'macdsma') : priceHist

  let s = 2
  let k = s / (1 + signalLength)
  for (let i = priceHist.length - 1; i >= 0; i--) {
    if (i === priceHist.length - signalLength - slowPeriod - 1) {
      priceHist[i][setKey] = priceHist[i][`macdsma${signalLength}`]
    } else if (i < priceHist.length - signalLength - slowPeriod - 1) {
      priceHist[i][setKey] = parseFloat(((priceHist[i].macd * k) + (priceHist[i + 1][setKey] * (1 - k))).toFixed(6))
    } else {
      priceHist[i][setKey] = 0
    }
    if (!isWithMACD) delete priceHist[i]['macd']
    if (!isWithMACDSMA) delete priceHist[i][`macdsma${signalLength}`]
  }
  return priceHist
}

export { getSignal }
