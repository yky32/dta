var BASE_URL
if (process.env.API_URL) {
    BASE_URL = process.env.API_URL
} else {
    BASE_URL = 'http://localhost:3000/'
}

const requests = {
  fetchGames: `${BASE_URL}/api/games`,
}

export default requests