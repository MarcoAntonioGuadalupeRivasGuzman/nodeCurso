import colors from 'colors'
import inquirer from 'inquirer'
//const { inquirerMenu } = require('./helpers/menu')
//const { showMenu, pausa } = require('./helpers/mensajes')


/*const main= async()=>{

    let opt=''

    do {
        opt = await inquirerMenu() 

        await pausa()

    }while(opt !== '0')

}

main()*/

const answer = await inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'number',
        name: 'age',
        message: 'Enter your age: '
    },
    {
        type: 'list',
        name: 'gender',
        message: 'What is your gender?',
        choices: ['Male', 'Female', 'Prefer not to say']
    }
]);