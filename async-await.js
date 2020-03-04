/** Async Await */
// Nota: El "async" convierte el return de una funcion en una promesa
// Nota: El "await" solo puede usarse dentro de una funcion con "async"

let getNombre = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve('Alejandro');
        }, 3000)
    })
}

let saludo = async () => {
    let nombre = await getNombre();
    return ` Hola ${ nombre }`
}

saludo().then( msg => {
    console.log(msg)
})


/** Old way */
/* let getNombre = async() => {
    // throw new Error('Error en el usuario')
    return 'Alejandro';
}

getNombre().then( nombre => {
    console.log(nombre)
}).catch( err => {
    console.log('Error de ASYNC', err)
}) */