const prompt = require('prompt-sync')({sigint: true});
const { searchRepos } = require('./src/searchRepos')
const { getLanguages } = require('./src/getLanguages')
const { printResults } = require('./src/printResults')

const countReposLanguages = async () => {
  const input = prompt('Enter the search phrase: ');

  if (!input) {
    console.error('\nYou must provide a search term! Try again.')
    return 1
  }

  console.log('Searching... (it may take a few seconds)')

  const reposData = await searchRepos(input)

  const languagesWithCounts = getLanguages(reposData)

  const results = printResults(languagesWithCounts)

  return results
}

countReposLanguages()

