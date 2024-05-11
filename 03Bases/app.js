const { options } = require('yargs');
const { createFile } = require('./helpers/multiplicar')
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: true
    })
    .check((argv, options) => {
        if (isNaN(argv.base)) {
            throw 'La base debe ser un numero'
        }
        return true
    })
    .argv;

console.clear();

//const [ , ,arg3='base:5']=process.argv
//const [, base]=arg3.split(':');
//console.log(base)

//let base = 3
let salida = ''

for (let i = 0; i <= 10; i++) {
    salida += `${argv.b} x ${i} = ${i * argv.b}\n`
    if (argv.l) {
        console.log(`${argv.b} x ${i} = ${i * argv.b}`)
    }
}

createFile(salida, argv.b)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err))

//console.log('archivo creado')

//console.log(process.argv)
//console.log(argv)
