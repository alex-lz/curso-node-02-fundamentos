// function sumar(a, b) {
//     return a + b;
// }

// function saludar() {
//     return 'Hola mundo';
// } 

/* let sumar = (a, b) => a + b

let saludar = () => 'Hola mundo';

let saludarA = (nombre) => `Hola ${nombre}`

console.log(sumar(10,20))
console.log(saludar())
console.log(saludarA('Alex')) */

// Nota el this en las funciones de flecha apunta afuera de ellas
// Ojetos: "window" para HTML Y  "global" para NODE

let deadpool = {
    nombre: 'Wade',
    apellido: 'Wiston',
    poder: 'Regeneracion',
    // getNombre:() => {  
    getNombre() {
        return `${this.nombre} ${this.apellido} - poder ${this.poder}`
    }
}

console.log(deadpool.getNombre())