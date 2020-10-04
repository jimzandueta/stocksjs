import { getSMA } from './getSMA'
import { getMACD } from './getMACD'

const getSignal = (priceHist, periods, priceKey = 'price', setKey = 'signal') => {
  let fastPeriod = periods.fastPeriod ? period.fastPeriod : 12
  let slowPeriod = periods.slowPeriod ? period.slowPeriod : 26
  let signalLength = periods.signalLength ? period.signalLength : 9

  let isWithMACD = priceHist[i].hasOwnProperty('macd')
  let isWithMACDSMA = priceHist[i].hasOwnProperty(`macdsma${signalLength}`)

  priceHist = !isWithMACD ? getMACD(priceHist, { fastPeriod, slowPeriod }, priceKey) : priceHist
  priceHist = !isWithMACDSMA ? getSMA(priceHist, signalLength, 'macd', 'macdsma') : priceHist

  let s = 2
  let k = s / (1 + signalLength)
  for (let i = priceHist.length - 1; i >= 0; i--) {
    if (i === priceHist.length - signalLength - slowPeriod - 1) {
      priceHist[i][setKey] = priceHist[i][`macdsma${signalLength}`]
    } else if (i < priceHist.length - signalLength - slowPeriod - 1) {
      priceHist[i][setKey] = ((parseFloat(priceHist[i].macd * k)) + parseFloat(priceHist[i + 1][setKey] * (1 - k))).toFixed(6)
    } else {
      priceHist[i][setKey] = (0).toFixed(6)
    }
    if (!isWithMACD) delete priceHist[i]['macd']
    if (!isWithMACDSMA) delete priceHist[i][`macdsma${signalLength}`]
  }
  return priceHist
}

export { getSignal }
