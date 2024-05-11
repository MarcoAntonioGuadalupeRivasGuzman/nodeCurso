const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: true,
        describe: 'Muestra la tabla por consola'
    })
    .check((argv, options) => {
        if (isNaN(argv.base)) {
            throw 'La base debe ser un numero'
        }
        return true
    })
    .argv;

module.exports= argv