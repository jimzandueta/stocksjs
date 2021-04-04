import { getCCI } from './getCCI'

const getCCICross = (priceHist, limit = 100, period = 20, constant = 0.015, priceKeys = {c: 'close', h: 'high', l:'low'}) => {
  let isWithCCI = priceHist[0].hasOwnProperty('cci')

  priceHist = !isWithCCI ? getCCI(priceHist, period, constant, priceKeys) : priceHist

  let arr = []
  let cIdx = 0

  for (let i = 0; i < priceHist.length; i++) {
    let a = priceHist[cIdx]['cci'] >= limit
    let b = priceHist[cIdx]['cci'] < limit
    let c = priceHist[i]['cci'] >= limit
    let d = priceHist[i]['cci'] < limit

    if (a && d) {
      priceHist[cIdx]['days'] = cIdx
      arr.push(priceHist[cIdx])
      cIdx = i
    } else {
      cIdx = i
    }
    if (!isWithCCI) delete priceHist[i]['cci']
  }

  return arr
}

export { getCCICross }
