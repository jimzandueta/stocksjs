import { getEMA } from './getEMA'

const getTRIX = (priceHist, period = 18, priceKey = 'close', setKey = 'trix') => {
    priceHist = getEMA(priceHist, period, null, priceKey, 'ema1S')
    priceHist = getEMA(priceHist, period, period, `ema1S${period}`, 'ema2S')
    priceHist = getEMA(priceHist, period, period * 2, `ema2S${period}`, 'ema3S')

    for (let i = 0; i < priceHist.length; i++) {
        if (i < priceHist.length - 1) {
            priceHist[i][setKey] = ((priceHist[i][`ema3S${period}`] - priceHist[i + 1][`ema3S${period}`]) / priceHist[i + 1][`ema3S${period}`]) * 100
        } else {
            priceHist[i][setKey] = 0
        }
    }
    return priceHist
}

export { getTRIX }