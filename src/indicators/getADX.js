import { getWEMA } from './getWEMA'
import { getTR } from './getTR'
import { getDM } from './getDM'

const getADX = (priceHist, period = 14, priceKeys = { c: 'close', h: 'high', l: 'low' }, setKey = 'adx') => {

  // TR and Directional Movement
  priceHist = getTR(priceHist)
  priceHist = getDM(priceHist)

  // Average TR and Smoothed Directional Movement using Willer's Exponential Moving Average
  priceHist = getWEMA(priceHist, period, 0, 'tr', 'atr')
  priceHist = getWEMA(priceHist, period, 0, 'dmp', 'dmpS')
  priceHist = getWEMA(priceHist, period, 0, 'dmn', 'dmnS')

  // Directional Indicator (DI+ / DI-) and Directional Movement Index (DX)
  for (let i = 0; i < priceHist.length; i++) {
    if (i <= priceHist.length - period) {
      priceHist[i]['di+'] = (priceHist[i][`dmpS${period}`] / priceHist[i][`atr${period}`]) * 100
      priceHist[i]['di-'] = (priceHist[i][`dmnS${period}`] / priceHist[i][`atr${period}`]) * 100
      priceHist[i]['dx'] = (Math.abs(priceHist[i]['di+'] - priceHist[i]['di-']) / Math.abs(priceHist[i]['di+'] + priceHist[i]['di-'])) * 100
    }
  }

  // Average Directional Movement Index (ADX)
  priceHist = getWEMA(priceHist, period, 2 * period, 'dx', setKey)

  for (let i = 0; i < priceHist.length; i++) {
    //Remove unncessary data tr dmn dmp dx
    delete priceHist[i][`tr${period}`]
    delete priceHist[i][`dmn${period}`]
    delete priceHist[i][`dmp${period}`]
    delete priceHist[i][`dx${period}`]
  }

  return priceHist
}

export { getADX }
