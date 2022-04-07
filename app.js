const { searchRepos } = require('./src/searchRepos')
const { getLanguages } = require('./src/getLanguages')
const { printResults } = require('./src/printResults')

const countReposLanguages = async () => {

  const reposData = await searchRepos()

  const languagesWithCounts = getLanguages(reposData)

  const result = printResults(languagesWithCounts)

  return result
}

countReposLanguages()

