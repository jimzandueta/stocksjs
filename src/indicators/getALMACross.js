import { getALMA } from './getALMA'

const getALMACross = (priceHist, period = 9, sigma = 6.0, offset = 0.85, keyPrice = 'price') => {
  let isWithALMA = priceHist[0].hasOwnProperty('alma')

  priceHist = !isWithALMA ? getALMA(priceHist, period, sigma, offset, keyPrice) : priceHist

  let arr = []
  let cIdx = 0

  for (let i = 0; i < priceHist.length; i++) {
    let a = parseFloat(priceHist[cIdx][keyPrice]) >= parseFloat(priceHist[cIdx]['alma'])
    let b = parseFloat(priceHist[cIdx][keyPrice]) < parseFloat(priceHist[cIdx]['alma'])
    let c = parseFloat(priceHist[i][keyPrice]) >= parseFloat(priceHist[i]['alma'])
    let d = parseFloat(priceHist[i][keyPrice]) < parseFloat(priceHist[i]['alma'])

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
