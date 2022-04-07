const prompt = require('prompt-sync')({sigint: true});
const { searchRepos } = require('./src/searchRepos')
const { getLanguages } = require('./src/getLanguages')
const { printResults } = require('./src/printResults')

const countReposLanguages = async () => {
  const input = prompt('Enter the search phrase: ');

  const reposData = await searchRepos(input)

  const languagesWithCounts = getLanguages(reposData)

  const result = printResults(languagesWithCounts)

  return result
}

countReposLanguages()

