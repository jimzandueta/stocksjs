import { getSMA } from './getSMA'

const getEMA = (priceHist, period, offset, priceKey = 'close', setKey = 'ema') => {
  let s = 2
  let k = s / (1 + period)
  let isWithSMA = priceHist[0].hasOwnProperty(`sma${period}`)
  offset = offset || period

  priceHist = !isWithSMA ? getSMA(priceHist, period) : priceHist

  for (let i = priceHist.length - 1; i >= 0; i--) {
    if (i === priceHist.length - period) {
      priceHist[i][`${setKey}${period}`] = priceHist[i][`sma${period}`]
    } else if (i < priceHist.length - period) {
      priceHist[i][`${setKey}${period}`] = parseFloat(((priceHist[i][priceKey] * k) + priceHist[i + 1][`${setKey}${period}`] * (1 - k)).toFixed(6))
    } else {
      priceHist[i][`${setKey}${period}`] = 0
    }

    if (!isWithSMA) delete priceHist[i][`sma${period}`]
  }
  return priceHist
}

export { getEMA }
