const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config-yargs/yargs');
const { base, listar, hasta } = argv;
crearArchivo(base, listar, hasta)
    .then((nombreArchivo) => console.log(`Nombre de archivo ${nombreArchivo}`))
    .catch((err) => console.log(err));


//const [, , baseArg3 = 'base=5'] = process.argv;
//const [, base = 5] = baseArg3.split('=');
//console.log(base);