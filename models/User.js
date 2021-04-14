const Model = require('./Model');

class User extends Model {
  constructor() {
    super();
    console.log('2. Soy el modelo user hijo del modelo base');
  }
}

module.exports = new User();
