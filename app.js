
const { searchRepos } = require('./src/searchRepos')

const getReposLanguages = async () => {

  const result = await searchRepos()

  console.log('R ', result.length)
}

getReposLanguages()

