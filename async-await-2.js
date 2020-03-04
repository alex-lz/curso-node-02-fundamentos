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

let getEmpleado = async (id) => {
    let empleadoDB = empleados.find( emp => emp.id === id )

    if(!empleadoDB) {
        throw new Error(`No existe un empleado con el ID ${ id }`)
    } else {
        return empleadoDB
    }
}

let getSalario = async (empleado) => {
    let salarioDB = salarios.find( sal => sal.id === empleado.id )

    if(!salarioDB) {
        throw new Error(`No se encontro un salario para el empleado ${ empleado.nombre }`)
    } else {
          return{
               id: empleado.id,
              nombre: empleado.nombre,
             salario: salarioDB.salario
        }
    }
}

let getInformacion = async (id) => {
    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado)
    // console.log(resp)
    return `${ resp.nombre } tiene un salario de $${ resp.salario }`;
}

getInformacion(4)
  .then( msg => console.log(msg) )
  .catch( err => console.log(err) )