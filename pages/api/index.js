const axios = require("axios");

export default function handler(req, res, next) {
    console.log(req.query.url);
    const url = req.query.url;
  async function getURI() {
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
      console.log("ERROR ", error.message);
      return res.status(500).json({ type: "error", message: error.message });
    }
  }

  getURI();
}
