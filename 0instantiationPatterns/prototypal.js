/*
* Functional instatiation
* En este patron creamos un instancias Object.create()
* Cuales usan Object.create para aceder al los metodos 
* 
*/

var Prototypal = () => {
  var tortillero = Object.create(herramientas)
  tortillero.tope = 0
  tortillero.almacen = {}
  return tortillero 
}

var herramientas = {
  insertar(tortilla){
    this.tope++
    this.almacen[this.tope] = tortilla
  },
  remover() {
    //este if es por que solo queremos hacer algo si es que tenemos algo dentro del almacen
    if(this.tope > 0){
      var temp = this.almacen[this.tope]
      delete this.almacen[this.tope]
      this.tope--
      return temp
    }
  },
  tamano() {
    return this.tope
  }
}

var abuelita = Prototypal()
abuelita.insertar("roja")
abuelita.insertar("azul")
abuelita.insertar("amarilla")
console.log(abuelita.tamano())
console.log(abuelita)
abuelita.remover()
console.log(abuelita)

module.exports = Prototypal