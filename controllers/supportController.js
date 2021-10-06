const {response} = require('express');

const supportGet = (req, res = response) => {
  res.json({
    msg: 'get API - controlador Support'
  });
}

module.exports = {
  supportGet
}
