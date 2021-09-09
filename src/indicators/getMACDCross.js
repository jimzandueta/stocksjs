import { getMACD } from './getMACD'

const getMACDCross = (priceHist, periods, priceKey = 'close') => {
    if (!periods) {
        periods = {
            fastPeriod: 12,
            slowPeriod: 26,
            signalLength: 9
        }
    }
    let options = {
        includeSignal: true,
        includeHistogram: true
    }

    let isWithMACD = priceHist[0].hasOwnProperty('macd')
    priceHist = !isWithMACD ? getMACD(priceHist, { fastPeriod, slowPeriod, signalLength }, options, priceKey, 'macd') : priceHist

    let arr = []
    let cIdx = 0

    for (let i = 0; i < priceHist.length; i++) {
        let a = priceHist[cIdx].macd > priceHist[cIdx].signal
        let b = priceHist[i].macd > priceHist[i].signal
        if (!a != !b) {
            priceHist[i - cIdx - 1]['days'] = i - cIdx - 1
            arr.push(priceHist[i - 1])
            cIdx = i
        }
        if (!isWithMACD) delete priceHist[i]['macd']
    }
    return arr
}

export { getMACDCross }