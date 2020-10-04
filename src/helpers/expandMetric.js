const expandMetric = (data) => {
  data = data + ''

  let checker = data.search(/[A-Z|a-z]/g)
  if (checker < 0) return data

  let num = data.split('').slice(0, -1).join('')
  let postChar = data.split('').splice(-1, 1).join('')
  if (postChar === 'K') num = parseFloat(num) * 1000
  if (postChar === 'M') num = parseFloat(num) * 1000000
  if (postChar === 'B') num = parseFloat(num) * 1000000000

  return num
}

export { expandMetric }
