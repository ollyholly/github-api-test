
const { searchRepos } = require('./src/searchRepos')
const { getLanguages } = require('./src/getLanguages')

const getReposLanguages = async () => {

  const reposData = await searchRepos()

  const languagesWithCounts = getLanguages(reposData)

console.log(languagesWithCounts)

const result = languagesWithCounts.reduce((acc, i) => {
  console.log(`${i[0]} : ${i[1]}`)
  acc += i[1]
  return acc
}, 0)
console.log(`=> ${result} total result(s) found`)

return result
}

getReposLanguages()

