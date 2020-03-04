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

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find( emp => emp.id === id )

    if(!empleadoDB) {
        callback(`No existe un empleado con el ID ${ id }`)
    } else {
        callback(null, empleadoDB)
    }
}

let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find( sal => sal.id === empleado.id )

    if(!salarioDB) {
        callback(`No se encontro un salario para el empleado ${ empleado.nombre }`)
    } else {
        callback(null, {
            id: empleado.id,
            nombre: empleado.nombre,
            salario: salarioDB.salario
        })
    }
}


getEmpleado(3, (err, emp) => {
    if(err) {
        return console.log(err)
    }
    // console.log(emp)
    getSalario(emp, (err, resp) => {
        if(err) {
            return console.log(err)
        }
        console.log(`El salario de ${ resp.nombre } es de $ ${ resp.salario }`)
    })
})