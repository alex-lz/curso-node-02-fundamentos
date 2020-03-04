// setTimeout( () => {
//    console.log('Hola mundo');
// }, 3000);

let getUserById = (id, callback) => {
    let usuario = {
        nombre: 'Alejandro',
        // id: id
        id
    }

    if(id === 20) {
        console.log(`El usuario con id ${ id } no existe en la BD`)
    } else {
        callback(null, usuario);
    }
    
}


getUserById(10, (err, usuario) => {
    if(err) {
        return console.log(err)
    }
    console.log('Usuario de base de datos', usuario)
})