let deadpool = {
    nombre: 'Wade',
    apellido: 'Wiston',
    poder: 'Regeneracion',
    getNombre: function () {
        return `${this.nombre} ${this.apellido} - poder ${this.poder}`
    }
}

// let nombre = deadpool.nombre
// let apellido = deadpool.apellido
// let poder = deadpool.poder

/* console.log(deadpool.getNombre()) */

let { nombre: primerNombre, apellido, poder } = deadpool

console.log(primerNombre, apellido, poder)