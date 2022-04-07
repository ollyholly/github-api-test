const axios = require('axios');

const getReposLanguages = async () => {

  const config = {
    url: 'https://api.github.com/search/repositories',
    method: 'get',
    params: {
      q: "shampoo",
      page: 1,
      per_page: 1
    }
  }

  const result = await axios.request(config).then(res => res.data.items).catch(e => console.log(e.response))

  console.log(result)
}

getReposLanguages()

