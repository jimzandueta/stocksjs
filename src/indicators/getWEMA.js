import { getSMA } from './getSMA'

const getWEMA = (priceHist, period, offset, priceKey = 'close', setKey = 'wema') => {
  let k = 1 / period
  let isWithSMA = priceHist[0].hasOwnProperty(`sma${setKey}${period}`)
  offset = offset ? offset : 0

  priceHist = !isWithSMA ? getSMA(priceHist, period, priceKey, `sma${setKey}`) : priceHist

  for (let i = priceHist.length - 1; i >= 0; i--) {
    if (i === priceHist.length - period - offset) {
      priceHist[i][`${setKey}${period}`] = priceHist[i][`sma${setKey}${period}`]
    } else if (i < priceHist.length - period - offset) {
      priceHist[i][`${setKey}${period}`] = priceHist[i + 1][`${setKey}${period}`] * (1 - k) + priceHist[i][priceKey] * k
    } else {
      priceHist[i][`${setKey}${period}`] = 0
    }
    if (!isWithSMA) delete priceHist[i][`sma${setKey}${period}`]
  }
  return priceHist
}

export { getWEMA }
