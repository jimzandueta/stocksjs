import { getSMA } from './getSMA'

const getSTS = (priceHist, period = 14, priceKeys = { c: 'close', h: 'high', l: 'low' }, setKey = { k: 'stsK', d: 'stsD' }) => {
    let arrH = []
    let arrL = []
    let hP, lP
    for (let i = 0; i < priceHist.length - period; i++) {
        arrH = []
        arrL = []
        for (let j = i; j < i + period; j++) {
            arrH.push(priceHist[j][priceKeys.h])
            arrL.push(priceHist[j][priceKeys.l])
        }
        hP = arrH.sort().pop()
        lP = arrL.sort().reverse().pop()
        priceHist[i][setKey.k] = ((priceHist[i][priceKeys.c] - lP) / (hP - lP)) * 100
    }
    priceHist = getSMA(priceHist, 3, setKey.k, setKey.d)

    return priceHist
}

export { getSTS }