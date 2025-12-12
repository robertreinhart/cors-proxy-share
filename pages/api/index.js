const axios = require('axios');

export default function handler(req, res, next) {
  async function getURI(url) {
    try {
      const response = await axios.get(url);
    
      if (response.status !== 200) {
        return res.status(response.status).json({ type: 'error', status:response.status, message: response.statusText });
      } else {
      res.json(response.data);
      }
    } catch (error) {
 
      return res.status(500).json({ type: 'error', status:"500", message: error.message });
    }
  }
  res.setHeader('Access-Control-Allow-Origin', '*');
    getURI(req.headers['my-url'])
}
