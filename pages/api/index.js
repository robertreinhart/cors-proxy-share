const axios = require('axios');

export default function handler(req, res, next) {
  async function getURI(url) {
    try {
      const response = await axios.get(url);
      console.log(response)
      if (response.status !== 200) {
        return res.status(response.status).json({ type: 'error', message: response.statusText });
      } else {
      res.json(response.data);
      }
    } catch (error) {
      console.log(error)
      return res.status(500).json({ type: 'error', message: error.message });
    }
  }
  res.setHeader('Access-Control-Allow-Origin', '*');
  getURI(req.body['my-url'])
}
