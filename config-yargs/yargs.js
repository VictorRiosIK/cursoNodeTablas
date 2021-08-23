const argv = require("yargs")
    .options('b', { //configura un atajo para comando en consola
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base de la tabla de multiplicar'
    })
    .options('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        demandOption: true,
        describe: 'muestra la tabla en consola'
    })
    .options('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        describe: 'Limite para la tabla de multiplicar'
    })
    .check((argv) => {
        console.log(argv.b);
        if (isNaN(argv.b) || isNaN(argv.base)) {
            throw 'la base tiene que ser un número';
        }
        if (isNaN(argv.h)) {
            throw 'El limite tiene que ser un número';
        }
        return true;
    })
    .argv;

module.exports = argv