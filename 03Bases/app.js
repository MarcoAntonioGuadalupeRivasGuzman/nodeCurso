const { error } = require('console');
const file=require('fs')

console.clear();

let base = 5
let salida = ''

for(let i=0; i<=10; i++){
    salida += `${base} x ${i} = ${i*base}\n`
    //console.log(`${base} x ${i} = ${i*base}`)
}

file.writeFile( `tabla${base}.txt`,salida, (error)=>{
    if (error) throw error
    console.log('archivo creado')
})