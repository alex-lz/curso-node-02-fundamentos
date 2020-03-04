let nombre = 'Juan'
let apellido = 'Perez Perez'

// console.log(nombre + ' ' + apellido)
// console.log(`${nombre} ${apellido}`)

// let nombreCompleto = nombre + ' ' + apellido;
// let nombreTemplate = `${nombre} ${apellido}`;

// console.log(nombreCompleto === nombreTemplate)

function getNombre() {
    return `${nombre} ${apellido}`
}

console.log(`Nombre completo: ${ getNombre() }`)