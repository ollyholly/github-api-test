const printResults = (languageData) => {
  const results = languageData.reduce((acc, i) => {
    console.log(`${i[0]} : ${i[1]}`)
    acc += i[1]
    return acc
  }, 0)

  console.log(`=> ${results} total result(s) found`)

  return results
}

module.exports = {
  printResults
}