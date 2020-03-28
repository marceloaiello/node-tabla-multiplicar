
const fs = require('fs');
const colors = require('colors');


let  listarTabla = (base, limite = 10) => {
    return new Promise((resolve,reject)=>{

        let data = '';
    
        if (!Number(base)){
            reject (` la base '${ base }' no es un numero`);
            return;
        };

        if (!Number(limite)){
            reject (` el límite '${ limite }' no es un numero`);
            return;
        };

        console.log(`===================================================`.green)
        console.log(`   ======= tabla de multiplicar ${ base } =============`.green)
        console.log(`===================================================`.green)


        for (let i = 1; i <= limite; i++){
           console.log( colors.cyan(`${base} * ${i}`) +  " = " +  colors.bgMagenta(`${ base * i}`));
        };

        resolve('OK');
    
    })
};


let  crearArhivo = (base, limite = 10) => {
    return new Promise((resolve,reject)=>{

        let data = '';
    
        if (!Number(base)){
            reject (` la base '${ base }' no es un numero`);
            return;
        };


        for (let i = 1; i <= limite; i++){
            data += `${base} * ${i} =  ${ base * i}\n` ;
        };
        
        
        fs.writeFile( `tablas/tabla-${ base }.txt`, data, (err) => {
            if (err) {
                reject (err)
            }else{
            //console.log(`El archivo tablas/tabla-${ base }.txt se ha guardado con exito`);
                resolve (`tabla-${ base }.txt`);
            };
          });
    
    })

    
};

module.exports = {
    crearArhivo, 
    listarTabla
}
