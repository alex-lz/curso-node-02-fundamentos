let empleados = [{
    id: 1,
    nombre: 'Alejandro'
},
{
    id: 2,
    nombre: 'Juan'
},
{
    id: 3,
    nombre: 'Banessa'
}]

let salarios = [{
    id: 1,
    salario: 10000
},
{
    id: 2,
    salario: 2000
}]

let getEmpleado = (id) => {
    return new Promise( (resolve, reject) => {
        let empleadoDB = empleados.find( emp => emp.id === id )

        if(!empleadoDB) {
            callback(`No existe un empleado con el ID ${ id }`)
        } else {
            callback(null, empleadoDB)
        }
    });
}