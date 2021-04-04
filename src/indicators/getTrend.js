
const getTrend = (priceHist, key, start = 0, end, isVector = false) => {
  const diff = {
    increasing: [],
    decreasing: [],
    equals: []
  }
  let arr = priceHist.slice(start, end).reverse()
  arr.map((item, index, array) => {
    if (index > 0) {
      let difference = item[key] - array[index - 1][key]
      difference = isVector ? Math.abs(difference) : difference

      if (difference === 0) diff.equals.push(difference)
      else if (difference > 0) diff.increasing.push(difference)
      else diff.decreasing.push(difference)
    }

    return item;
  })

  if (diff.increasing.length > (diff.decreasing.length + diff.equals.length)) return 1
  if (diff.decreasing.length > (diff.increasing.length + diff.equals.length)) return -1
  if (diff.equals.length > (diff.increasing.length + diff.decreasing.length)) return 0

  return 0
}

export { getTrend }
