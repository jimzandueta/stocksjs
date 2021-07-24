const getWilliamsR = (priceHist, period = 14, priceKeys = { c: 'close', h: 'high', l: 'low' }, setKey = 'williamsR') => {
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
        priceHist[i][setKey] = ((hP - priceHist[i][priceKeys.c]) / (hP - lP)) * -1
    }
    return priceHist
}

export { getWilliamsR }