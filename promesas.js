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
            reject(`No existe un empleado con el ID ${ id }`)
        } else {
            resolve(empleadoDB)
        }
    });
}

let getSalario = (empleado) => {
    return new Promise( (resolve, reject) => {
        let salarioDB = salarios.find( sal => sal.id === empleado.id )

        if(!salarioDB) {
            reject(`No se encontro un salario para el empleado ${ empleado.nombre }`)
        } else {
            resolve({
                id: empleado.id,
                nombre: empleado.nombre,
                salario: salarioDB.salario
            })
        }
    })
}

getEmpleado(1).then( emp => {

    return getSalario(emp);

})
.then( resp => {
    console.log(`El salario de ${ resp.nombre } es $${ resp.salario }`)
})
.catch( err => {
    console.log(err)
})

/** Old way */
/* getEmpleado(2).then( emp => {
    // console.log('Empleado de BD', emp)
    getSalario(emp).then( resp => {
        console.log(`El salario de ${ resp.nombre } es de $${ resp.salario }`)
    }, err => console.log(err) )

}, err => console.log(err) ) */