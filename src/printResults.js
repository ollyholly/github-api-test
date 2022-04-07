const printResults = (languageData) => {
  const result = languageData.reduce((acc, i) => {
    console.log(`${i[0]} : ${i[1]}`)
    acc += i[1]
    return acc
  }, 0)

  console.log(`=> ${result} total result(s) found`)

  return result
}

module.exports = {
  printResults
}