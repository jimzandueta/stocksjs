import { getALMA } from './getALMA'

const getALMACross = (priceHist, period = 9, sigma = 6.0, offset = 0.85, keyPrice = 'close') => {
  let isWithALMA = priceHist[0].hasOwnProperty('alma')

  priceHist = !isWithALMA ? getALMA(priceHist, period, sigma, offset, keyPrice) : priceHist

  let arr = []
  let cIdx = 0

  for (let i = 0; i < priceHist.length; i++) {
    let a = priceHist[cIdx][keyPrice] >= priceHist[cIdx]['alma']
    let b = priceHist[cIdx][keyPrice] < priceHist[cIdx]['alma']
    let c = priceHist[i][keyPrice] >= priceHist[i]['alma']
    let d = priceHist[i][keyPrice] < priceHist[i]['alma']

    if (a && d) {
      priceHist[cIdx]['days'] = cIdx
      arr.push(priceHist[cIdx])
      cIdx = i
    } else {
      cIdx = i
    }
    if (!isWithALMA) delete priceHist[i]['alma']
  }

  return arr
}

export { getALMACross }
