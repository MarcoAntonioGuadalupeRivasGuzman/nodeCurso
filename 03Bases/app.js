const { options } = require('yargs');
const { createFile } = require('./helpers/multiplicar')
const argv = require('./config/yargs')
const colors = require('colors')

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
    .then(nombreArchivo => console.log(nombreArchivo.blue, 'creado'))
    .catch(err => console.log(err))

//console.log('archivo creado')

//console.log(process.argv)
//console.log(argv)
