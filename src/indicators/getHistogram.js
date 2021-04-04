import { getMACD } from './getMACD'
import { getSignal } from './getSignal'

const getHistogram = (priceHist, periods, priceKey = 'close', setKey = 'histogram') => {
  let fastPeriod = periods.fastPeriod ? periods.fastPeriod : 12
  let slowPeriod = periods.slowPeriod ? periods.slowPeriod : 26
  let signalLength = periods.signalLength ? periods.signalLength : 9

  let isWithMACD = priceHist[0].hasOwnProperty('macd')
  let isWithSignal = priceHist[0].hasOwnProperty('signal')

  priceHist = !isWithMACD ? getMACD(priceHist, { fastPeriod, slowPeriod }, {}, priceKey) : priceHist
  priceHist = !isWithSignal ? getSignal(priceHist, { fastPeriod, slowPeriod, signalLength }, priceKey) : priceHist

  for (let i = 0; i < priceHist.length; i++) {
    priceHist[i][setKey] = parseFloat((priceHist[i].macd - priceHist[i].signal).toFixed(6))
  }
  return priceHist
}

export { getHistogram }
