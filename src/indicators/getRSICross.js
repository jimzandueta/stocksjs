import { getRSI } from './getRSI'
import { getTrend } from './getTrend'

const getRSICross = (priceHist, period = 14, changeKey = 'change', limits = [50, 55]) => {
  let isWithRSI = priceHist[0].hasOwnProperty(`rsi${period}`)

  priceHist = !isWithRSI ? getRSI(priceHist, period, changeKey) : priceHist

  let arr = []
  let cIdx = 0

  for (let i = 0; i < priceHist.length; i++) {
    let a = parseFloat(priceHist[cIdx][`rsi${period}`]) >= limits[1]
    let b = parseFloat(priceHist[cIdx][`rsi${period}`]) >= limits[0] && parseFloat(priceHist[cIdx][`rsi${period}`]) < limits[1]
    let c = parseFloat(priceHist[cIdx][`rsi${period}`]) < limits[0] 
    let d = parseFloat(priceHist[i][`rsi${period}`]) >= limits[1]
    let e = parseFloat(priceHist[i][`rsi${period}`]) >= limits[0] && parseFloat(priceHist[i][`rsi${period}`]) < limits[1]
    let f = parseFloat(priceHist[i][`rsi${period}`]) < limits[0] 

    if ((a && (e || f)) || b && f) {
      priceHist[cIdx]['days'] = cIdx
      arr.push(priceHist[cIdx])
      cIdx = i
    } else if((c && (f || e || d)) || (b && (e || d)) || (a && d)) {
      cIdx = i
    }
    if (!isWithRSI) delete priceHist[i][`rsi${period}`]
  }

  return arr
}

export { getRSICross }
