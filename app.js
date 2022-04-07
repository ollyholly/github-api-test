
const { searchRepos } = require('./src/searchRepos')

const getReposLanguages = async () => {

  const reposData = await searchRepos()

  console.log('R ', reposData.length)
  
  const rawLanguages = reposData.reduce((acc, i) => {
    acc.push(i.language)
    return acc
  }, [])

  console.log('L ', rawLanguages)

  const cleanedLanguages = rawLanguages.filter(l => l != null && l != '')

    console.log(cleanedLanguages)
  

    const counts = {};

  for (const num of cleanedLanguages) {
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}

console.log(counts)
}

getReposLanguages()

