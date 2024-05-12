require('colors')
const { showMenu, pausa } = require('./helpers/mensajes')


const main= async()=>{

    let opt=''

    do {
        opt = await showMenu() 

        await pausa()

    }while(opt !== '0')

}

main()