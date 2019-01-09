let deadpool = {
    nombre = 'Wade',
    apellido = 'Wilson',
    poder = 'Regeneracion',
    getNombre: function(){
        return `${this.nombre} ${this.apellido} -Poder: ${this.poder}`
    }
}

console.log(deadpool.getNombre());