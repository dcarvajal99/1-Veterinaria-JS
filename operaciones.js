const fs = require('fs')

let citas = {
    nombre:"",
    edad:"" ,
    tipo: "",
    color:"",
    enfermedad:"",
}

var n = 0;

/* let citas = [] */

const registrar = (input) =>{
    input.slice(1).map(a => {
        const nombrePropiedad = Object.keys(citas)[n];
        citas[nombrePropiedad] = a.toString();
    n++;
    })
    /* arrayCitas.push(citas) */
    archivo = JSON.parse(fs.readFileSync('citas.json','utf-8'))
    archivo.push(citas)
    console.log(citas)
    fs.writeFileSync('citas.json',JSON.stringify(archivo))
    /*  {fs.readFileSync('citas.js','utf-8').length == 2 ? 
    fs.writeFileSync('citas.js',JSON.stringify(arrayCitas)) : 
    fs.appendFileSync('citas.js',JSON.stringify(arrayCitas))} */
}

const leer = ()=>console.log(JSON.parse(fs.readFileSync('citas.json','utf-8')))


module.exports = {registrar,leer}


