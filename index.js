const {registrar,leer} = require('./operaciones')


const argumentos = process.argv.slice(2);

if (argumentos[0].toLocaleLowerCase() === 'registrar'){
    {argumentos.slice(1).length === 5 ? registrar(argumentos) : console.log('Se requiere ingresar todoos los datos: \n -Nombre \n -Edad \n -Tipo \n -Color \n -Enfermedad')}
    
}else if (argumentos[0].toLocaleLowerCase() === 'leer'){
    leer()
}else{
    console.log('Metodo ingresado no valido!. \n Solo tenemos 2 metodos :(\n .-Registrar \n .-Leer')
}

