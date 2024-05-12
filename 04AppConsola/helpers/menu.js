const inquirer = require('inquirer');
require('colors');

const menuOpts=[
    {
        type: 'list',
        name: 'opcion',
        message: ['opt1']
    }
]

const inquirerMenu = async () => {
    console.clear()
    console.log('========================'.green)
    console.log('Selecciona una opcion')
    console.log('========================\n'.green)

    const opt = inquirer.prompt([menuOpts])

    return opt

}

module.exports = {
    inquirerMenu
}
