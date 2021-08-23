const colors = require('colors');
const fs = require('fs');
const crearArchivo = (base, listar = false, hasta = 10) => {
    const nombreArchivo = `Tabla-${base}.txt`;
    console.log('============'.green);
    console.log(`TABLA DEL ${base}`.random);
    console.log('============'.green);

    return new Promise((resolve, reject) => {
        let salida = '';
        for (let index = 1; index <= hasta; index++) {
            console.log(`${base} ${'x'.red} ${index}=${base*index}\n`);
            salida += `${base} x ${index}=${base*index}\r\n`;

        }
        fs.writeFileSync(`./Tablas/tabla-${base}.txt`, salida);
        if (listar) {
            console.log(salida);
        }
        resolve(nombreArchivo);

    });

}

module.exports = { crearArchivo }