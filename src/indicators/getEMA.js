import { getSMA } from './getSMA'

const getEMA = (priceHist, period, offset, priceKey = 'close', setKey = 'ema') => {
    let s = 2
    let k = s / (1 + period)
    let isWithSMA = priceHist[0].hasOwnProperty(`sma${period}`)
    offset = offset ? offset : 0

    priceHist = !isWithSMA ? getSMA(priceHist, period) : priceHist

    for (let i = priceHist.length - 1; i >= 0; i--) {
        if (i === priceHist.length - period - offset) {
            priceHist[i][`${setKey}${period}`] = priceHist[i][`sma${period}`]
        } else if (i < priceHist.length - period - offset) {
            priceHist[i][`${setKey}${period}`] = (priceHist[i][priceKey] * k) + (priceHist[i + 1][`${setKey}${period}`] * (1 - k))
        } else {
            priceHist[i][`${setKey}${period}`] = 0
        }

        if (!isWithSMA) delete priceHist[i][`sma${period}`]
    }
    return priceHist
}

export { getEMA }