
const cleanupLanguages = (languages) => languages.filter(l => l != null && l != '')

const countLanguages = (languages) => {

  const counts = {};

  for (const num of languages) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }

  console.log(counts)
  return counts
}


const getLanguages = (reposData) => {
  const rawLanguages = reposData.reduce((acc, i) => {
    acc.push(i.language)
    return acc
  }, [])

  const cleanedLanguages = cleanupLanguages(rawLanguages)

  const languagesWithCounts = countLanguages(cleanedLanguages)

  return languagesWithCounts
}

module.exports = {
  getLanguages,
  cleanupLanguages,
  countLanguages
}