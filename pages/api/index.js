export default function handler(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  request.get(
    { url: req.body["my-url"] },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  )
}
