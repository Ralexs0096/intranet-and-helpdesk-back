const {response} = require('express');
const Request = require('../models/Request');

const getAllRequests = async (req, res = response, next) => {
  const peticiones = await Request.find({});
  res.json({
    peticiones
  })
}

const createNewRequest = async (req, res = response, next) => {
  try {
    const peticiones = new Request(req.body);

    await peticiones.save();
    res.json({
      msg: "Solicitud Agregada",
    })
  } catch (e) {
    console.log(e);
    next();
  }
}


module.exports = {
  getAllRequests,
  createNewRequest
}
