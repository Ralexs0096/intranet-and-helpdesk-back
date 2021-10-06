const mongoose = require('mongoose');

const dbConnection = async() => {
  try {

    await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    });

    console.log('Base de datos Online');

  } catch (e) {
    console.log(e);
    throw new Error('error a la hora de iniiciar la BD');
  }
}

module.exports = {
  dbConnection
}
