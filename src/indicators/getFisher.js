const getFisher = (priceHist, period = 9, priceKeys = { c: 'close', h: 'high', l: 'low' }, setKeys = { t: 'fisherTransform', s: 'fisherSignal' }) => {
    //t = Fisher Transform
    //s = Fisher Trigger
    let hl2Arr = []
    let sto = 0
    for (let i = 0; i < priceHist.length; i++) {
        priceHist[i]['hl2'] = (priceHist[i][priceKeys.h] + priceHist[i][priceKeys.l]) / 2
        hl2Arr.push(priceHist[i]['hl2'])
    }
    for (let i = 0; i < priceHist.length; i++) {
        let arr = hl2Arr.slice(i, i + period)
        priceHist[i]['hlMax'] = Math.max(...arr)
        priceHist[i]['hlMin'] = Math.min(...arr)
    }
    for (let i = priceHist.length - 1; i >= 0; i--) {
        if (i === priceHist.length - 1) {
            priceHist[i]['fish'] = 0.0
            priceHist[i][setKeys.t] = 0.0
        } else {
            sto = (priceHist[i]['hlMax'] - priceHist[i]['hlMin']) != 0 ? (priceHist[i]['hl2'] - priceHist[i]['hlMin']) / (priceHist[i]['hlMax'] - priceHist[i]['hlMin']) : 0
            priceHist[i]['fish'] = Math.max(Math.min((0.33 * 2 * (sto - 0.5)) + (0.67 * priceHist[i + 1]['fish']), 0.999), -0.999)

            priceHist[i][setKeys.t] = (0.5 * Math.log((1 + priceHist[i]['fish']) / (1 - priceHist[i]['fish']))) + (0.5 * priceHist[i + 1][setKeys.t])
            priceHist[i][setKeys.s] = priceHist[i + 1][setKeys.t]
        }
    }
    return priceHist
}

export { getFisher }