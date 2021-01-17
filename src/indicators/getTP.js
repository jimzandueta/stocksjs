const getTP = (priceHist, priceKeys = ['price', 'high', 'low'], setKey = 'tp') => {
  for (let i = 0; i < priceHist.length; i++) {
    let sum = parseFloat(priceHist[i][priceKeys[0]]) + parseFloat(priceHist[i][priceKeys[1]]) + parseFloat(priceHist[i][priceKeys[2]])
    priceHist[i][setKey] = (sum / priceKeys.length).toFixed(6)
  }
  return priceHist
}

export { getTP }
