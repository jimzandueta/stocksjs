import { getCCI } from './getCCI'

const getCCICross = (priceHist, period = 20, constant = 0.015, priceKeys = ['price', 'high', 'low'], limit = 100) => {
  let isWithCCI = priceHist[0].hasOwnProperty('cci')

  priceHist = !isWithCCI ? getCCI(priceHist, period, constant, priceKeys) : priceHist

  let arr = []
  let cIdx = 0

  for (let i = 0; i < priceHist.length; i++) {
    let a = parseFloat(priceHist[cIdx]['cci']) >= limit
    let b = parseFloat(priceHist[cIdx]['cci']) < limit
    let c = parseFloat(priceHist[i]['cci']) >= limit
    let d = parseFloat(priceHist[i]['cci']) < limit

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
