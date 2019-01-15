let empleados =[{
    id: 1,
    nombre: 'Ian'
},{
    id:2,
    nombre: 'Pau'
},{
    id: 3,
    nombre: 'Erick'
}]

let salarios = [{
    id:1,
    salario: 1000
},{
    id:2,
    salario: 30000
}]



let getEmpleado = (id, callback) => {
    
    let empleadoDB =empleados.find( empleado => empleado.id === id)

    // console.log(empleadoDB);
    if(!empleadoDB) {
        callback(`No existe un empleado con el ID ${ id }`)
    } else {
        callback(null, empleadoDB)
        
    }

}

let getSalario = (empleado, callback) => {

    let empleadoDB2 = empleados.find( empleado => empleado.nombre === empleado)

    if(!empleadoDB2) {
        callback(`No se encontro un salario para el usuario ${empleado}`)
    } else {
        let empleadoID = 
        callback(null, empleadoDB2)
    }
}

getSalario

getEmpleado(1, (err, empleado)=> {

    if(err) {
        return console.log(err);
    }    
    console.log(empleado);
});