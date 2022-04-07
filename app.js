const { searchRepos } = require('./src/searchRepos')
const { getLanguages } = require('./src/getLanguages')
const { printResults } = require('./src/printResults')

const countReposLanguages = async (input) => {

  const reposData = await searchRepos(input)

  const languagesWithCounts = getLanguages(reposData)

  const result = printResults(languagesWithCounts)

  return result
}

countReposLanguages('shampoo')

