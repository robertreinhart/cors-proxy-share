const axios = require("axios");

export default function handler(req, res, next) {
  console.log(req.headers["my-url"]);
  async function getURI(url) {
    try {
      const response = await axios.get(url);
      if (response.status !== 200) {
        return res.status(response.status).json({
          type: "error",
          status: response.status,
          message: response.statusText,
        });
      } else {
        return res.json(response.data);
      }
    } catch (error) {
      console.log(error.response)
      return res.status(500).json({ type: "error", message: error.message });
    }
  }
  res.setHeader("Access-Control-Allow-Origin", "*", {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
  });
  getURI(req.headers["my-url"]);
}
