import { getRSI } from './getRSI'

const getRSICross = (priceHist, limits = [50, 55], period = 14, changeKey = 'changeVal') => {
  let isWithRSI = priceHist[0].hasOwnProperty(`rsi${period}`)

  priceHist = !isWithRSI ? getRSI(priceHist, period, changeKey) : priceHist

  let arr = []
  let cIdx = 0

  for (let i = 0; i < priceHist.length; i++) {
    let a = priceHist[cIdx][`rsi${period}`] >= limits[1]
    let b = priceHist[cIdx][`rsi${period}`] >= limits[0] && priceHist[cIdx][`rsi${period}`] < limits[1]
    let c = priceHist[cIdx][`rsi${period}`] < limits[0] 
    let d = priceHist[i][`rsi${period}`] >= limits[1]
    let e = priceHist[i][`rsi${period}`] >= limits[0] && priceHist[i][`rsi${period}`] < limits[1]
    let f = priceHist[i][`rsi${period}`] < limits[0] 

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
