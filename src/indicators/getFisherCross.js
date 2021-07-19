import { getFisher } from './getFisher'

const getFisherCross = (priceHist, period = 9, priceKeys = { c: 'close', h: 'high', l: 'low' }) => {
    let isWithFisherT = priceHist[0].hasOwnProperty('fisherTransform')
    priceHist = !isWithFisherT ? getFisher(priceHist, period, priceKeys) : priceHist

    let arr = []
    let cIdx = 0

    for (let i = 0; i < priceHist.length; i++) {
        let a = priceHist[cIdx].fisherTransform > priceHist[cIdx].fisherSignal
        let b = priceHist[i].fisherTransform > priceHist[i].fisherSignal
        if (!a != !b) {
            priceHist[i - cIdx - 1]['days'] = i - cIdx - 1
            arr.push(priceHist[i - cIdx - 1])
            cIdx = i
        }
    }
    return arr
}

export { getFisherCross }