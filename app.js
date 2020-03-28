//const { argv } = require('./config/yargs');
const argv = require('./config/yargs').argv;

const colors = require('colors');

const { crearArhivo,listarTabla } = require('./multiplicar/multiplicar.js');

const comando = argv._[0];

switch ( comando ){
    case 'crear':
        crearArhivo( argv.base ,argv.limite )
        .then( archivo => console.log( "Archivo creado " +  colors.blue(`${ archivo }`)))
        .catch(e => console.log( e)
        );
            break;
    case 'listar':
        listarTabla (argv.base, argv.limite )
        .then( respuesta => console.log(`${ respuesta }`))
        .catch(e => console.log( e)
        );
        break;
    default:
        console.log('comando no reconocido');
};
