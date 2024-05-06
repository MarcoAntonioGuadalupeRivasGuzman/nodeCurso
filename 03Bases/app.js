const {createFile} = require('./helpers/multiplicar')

console.clear();

const [ , ,arg3='base:5']=process.argv
const [, base]=arg3.split(':');
//console.log(base)

//let base = 3
let salida = ''

for(let i=0; i<=10; i++){
    salida += `${base} x ${i} = ${i*base}\n`
    //console.log(`${base} x ${i} = ${i*base}`)
}

createFile(salida,base)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err))

console.log('archivo creado')