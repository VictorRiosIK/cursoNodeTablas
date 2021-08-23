const { crearArchivo } = require('./helpers/multiplicar')

const base = 10;
console.clear();

crearArchivo(base)
    .then((nombreArchivo) => console.log(`Nombre de archivo ${nombreArchivo}`))
    .catch((err) => console.log(err));