const express = require('express');
const request = require('request');

export default function handler(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  request.get(
    { url: req.body['my-url'] },
    (error, response, body) => {
      console.log(body)
      if (error || response.statusCode !== 200) {
        console.log("__________")
        if (error) {
          return res.status(500).json({ type: 'error', message: error.message });
        } else {
          return res.status(response.statusCode).json({ type: 'error', message: response.statusMessage });
        }
      }

      res.json(JSON.parse(body));
    }
  )
}
