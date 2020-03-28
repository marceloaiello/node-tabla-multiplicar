const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
} 


const argv = require('yargs')
    .command('listar','Lista la tabla de multiplicar en consola',opts)
    .command('crear','Crea la tabla de multiplicar en un archivo',opts)    
    .help()
    .argv;

module.exports = {
    argv
}    
