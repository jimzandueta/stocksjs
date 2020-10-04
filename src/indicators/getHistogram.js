import { getMACD } from './getMACD'
import { getSignal } from './getSignal'

const getHistogram = (priceHist, periods, priceKey = 'price', setKey = 'histogram') => {
  let fastPeriod = periods.fastPeriod ? period.fastPeriod : 12
  let slowPeriod = periods.slowPeriod ? period.slowPeriod : 26
  let signalLength = periods.signalLength ? period.signalLength : 9

  let isWithMACD = priceHist[i].hasOwnProperty('macd')
  let isWithSignal = priceHist[i].hasOwnProperty('signal')

  priceHist = !isWithMACD ? getMACD(priceHist, { fastPeriod, slowPeriod }, priceKey) : priceHist
  priceHist = !isWithSignal ? getSignal(priceHist, { fastPeriod, slowPeriod, signalLength }, priceKey) : priceHist

  for (let i = 0; i < priceHist.length; i++) {
    priceHist[i][setKey] = (parseFloat(priceHist[i].macd) - parseFloat(priceHist[i].signal)).toFixed(6)
  }
  return priceHist
}

export { getHistogram }
