class Model {
  constructor() {
    console.log('1. Soy el modelo base');
    this.nombre = 'No tengo nombre';
  }

  setNombre = (nombre) => {
    this.nombre = nombre;
  };
}

module.exports = Model;
