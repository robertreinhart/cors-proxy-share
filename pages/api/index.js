const axios = require('axios');

export default function handler(req, res, next) {
  let x=0;
  let  success = false;
  async function getURI(url) {
   do {
      console.log(x)
    try {
      const response = await axios.get(url);
      if (response.status !== 200) {
        return res.status(response.status).json({ type: 'error', message: response.statusText });
      } else {
      success = true
      res.json(JSON.stringify(response.data))
      }
    } catch (error) {
      x++
      console.log(error.message, "ERR")
      // return res.status(500).json({ type: 'error', message: error.message });
    }
  } while (!success && x<100)
  }
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  getURI(JSON.parse(req.body)['my-url'])
}
