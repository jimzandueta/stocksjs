const getPivotT = (priceHist, period = 20, priceKeys = { c: 'close', h: 'high', l: 'low' }) => {
  for (let i = 0; i < priceHist.length; i = i + period) {
    if (i < priceHist.length - 2 * period) {
      let c = priceHist[i + period][priceKeys.c]
      let h, l
      for (let j = i + period; j < i + 2 * period; j++) {
        h = h || priceHist[j][priceKeys.h]
        l = l || priceHist[j][priceKeys.l]
        h = h < priceHist[j][priceKeys.h] ? priceHist[j][priceKeys.h] : h
        l = l > priceHist[j][priceKeys.l] ? priceHist[j][priceKeys.l] : l
      }
      for (let j = i; j < i + period; j++) {
        priceHist[j][`pp${period}`] = (c + h + l) / 3

        priceHist[j][`r1${period}`] = (2 * priceHist[j][`pp${period}`]) - l
        priceHist[j][`s1${period}`] = (2 * priceHist[j][`pp${period}`]) - h

        priceHist[j][`r2${period}`] = priceHist[j][`pp${period}`] + (h - l)
        priceHist[j][`s2${period}`] = priceHist[j][`pp${period}`] - (h - l)
      }
    }
  }
  return priceHist
}

export { getPivotT }
