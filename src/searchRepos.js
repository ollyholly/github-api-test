const axios = require('axios');

const searchRepos = async () => {

  let repos = []

  const config = {
    url: 'https://api.github.com/search/repositories',
    method: 'get',
    params: {
      q: "shampoo",
      page: 1,
      per_page: 1
    }
  }

  const numberOfPages = await axios.request(config)
    .then(res => {
      //Saving first page of results
      repos = [...repos, ...res.data.items]

      const count = res.data.total_count
      console.log(count)
      return count > 9 ? 9 : count
    })
    .catch(e => console.log(e.response.data.message))

  let promiseArray = []

  for (let i = 1; i < numberOfPages + 1; i++) {
    const newConfig = { ...config, params: { ...config.params, page: i } }

    const page = axios.request(newConfig)
      .then(res => res.data.items)
      .catch(e => console.log(e.response.data.message))

    promiseArray.push(page)
  }

  await Promise.all(promiseArray).then((items) => {
    repos = [...repos, ...items.flat()]
    // console.log(items.length);
  });

  // console.log(repos)
  console.log(repos.length)
  return repos
}

module.exports = {
  searchRepos
}