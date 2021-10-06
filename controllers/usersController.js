const {response} = require('express');
const Users = require('../models/Users');

const getAllUsers = async (req, res = response) => {
  const limite = parseInt(req.query.limite, 10)
  const user = await Users.find({}).limit(limite);
  res.json({
    msg: `Los usuarios encontrados: `,
    user
  });
}


const createNewUser = async (req, res = response) => {
  const user = new Users(req.body);
  try {
    await user.save();
    res.json({
      msg: "el usuario fue creado exitosamente"
    })
  } catch (e) {
    console.log(`ocurrio un error: ${e}`);
    res.json({
      msg: '' + e,
    })
  }
}


const filtrarUsers = async (req, res = response) => {
  try {
    const {name} = req.query
    const query = {
      $or: [{'FirstName': {'$regex': name, '$options': 'i'}},
      {'LastName': {'$regex': name, '$options': 'i'}}]

    }
    const users = await Users.find(query);
    res.json({users});

  } catch (e) {
      console.log(e);
      res.status(500).send('Hubo un error');
  }
}


const filtrarPbx = async (req, res = response) => {
  try {
    const {name} = req.query
    const query = {
      $or: [{'Area': {'$regex': name, '$options': 'i'}},
      {'FirstName': {'$regex': name, '$options': 'i'}}]
    }
    const users = await Users.find(query);
    res.json({users});
  } catch (e) {
      console.log(e);
      res.status(500).send('Hubo un error');
  }
}


module.exports = {
  getAllUsers,
  createNewUser,
  filtrarUsers,
  filtrarPbx
}
