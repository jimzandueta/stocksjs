import { getPivotT } from './getPivotT'
import { getTrend } from './getTrend'

const getFibRL = (priceHist, period = 20, priceKeys = { c: 'close', h: 'high', l: 'low' }) => {
    let rs = [.236, .382, .5, .618, .786]

    getPivotT(priceHist, period, priceKeys)
    for (let i = 0; i < priceHist.length; i++) {
        if (i < priceHist.length - period) {
            rs.forEach(r => {
                let p1 = priceHist[i][`s2${period}`]
                let p2 = priceHist[i][`r2${period}`]
                priceHist[i][`fib${r}`] = p2 - (Math.abs((p2 - p1)) * r)
            })
        }
    }
    return priceHist
}

export { getFibRL }