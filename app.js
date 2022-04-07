
const { searchRepos } = require('./src/searchRepos')
const { getLanguages } = require('./src/getLanguages')

const getReposLanguages = async () => {

  const reposData = await searchRepos()

  const languagesWithCounts = getLanguages(reposData)

console.log(languagesWithCounts)
}

getReposLanguages()

