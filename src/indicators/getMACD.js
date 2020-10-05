import { getEMA } from './getEMA'
import { getSignal } from './getSignal'
import { getHistogram } from './getHistogram'

const getMACD = (priceHist, periods, priceKey = 'price', setKey = 'macd', options) => {
  let fastPeriod = periods.fastPeriod ? period.fastPeriod : 12
  let slowPeriod = periods.slowPeriod ? period.slowPeriod : 26
  let signalLength = periods.signalLength ? period.signalLength : 9

  let isWithEMAFast = priceHist[0].hasOwnProperty(`ema${fastPeriod}`)
  let isWithEMASlow = priceHist[0].hasOwnProperty(`ema${slowPeriod}`)

  priceHist = !isWithEMAFast ? getEMA(priceHist, fastPeriod, priceKey) : priceHist
  priceHist = !isWithEMASlow ? getEMA(priceHist, slowPeriod, priceKey) : priceHist

  for (let i = 0; i < priceHist.length; i++) {
    if (i < priceHist.length - slowPeriod - 1) {
      priceHist[i][setKey] = parseFloat(priceHist[i][`ema${fastPeriod}`] - priceHist[i][`ema${slowPeriod}`]).toFixed(6)
    } else {
      priceHist[i][setKey] = (0).toFixed(6)
    }

    if (!isWithEMAFast) delete priceHist[i][`ema${fastPeriod}`]
    if (!isWithEMASlow) delete priceHist[i][`ema${slowPeriod}`]
  }

  priceHist = options.includeSignal ? getSignal(priceHist, { fastPeriod, slowPeriod, signalLength }, priceKey) : priceHist
  priceHist = options.includeHistogram ? getHistogram(priceHist, { fastPeriod, slowPeriod, signalLength }, priceKey) : priceHist

  return priceHist
}

export { getMACD }
