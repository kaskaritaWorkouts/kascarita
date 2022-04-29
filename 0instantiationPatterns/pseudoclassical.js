/*
* Pseudoclassical instatiation
* Pseudoclassical instantiation attempts to overcome the amount of typing required to create an object using prototypal instantiation.
*  Like prototypal, Pseudoclassical instantiation uses the prototype chain.
* 
*/

// cuidado no va funcionar con un arrow function
var Pseudoclassical = function() {
  // this = {}
  this.tope = 0
  this.almacen = {}
  //return this
}

Pseudoclassical.prototype.insertar = function(tortilla) {
  this.tope++
  this.almacen[this.tope] = tortilla
},
Pseudoclassical.prototype.remover = function() {
  //este if es por que solo queremos hacer algo si es que tenemos algo dentro del almacen
  if(this.tope > 0){
    var temp = this.almacen[this.tope]
    delete this.almacen[this.tope]
    this.tope--
    return temp
  }
},
Pseudoclassical.prototype.tamano = function() {
  return this.tope
}

// importante usa el new para insertlar los dos comments en el constructor
var abuelita = new Pseudoclassical()
abuelita.insertar("roja")
abuelita.insertar("azul")
abuelita.insertar("amarilla")
console.log(abuelita.tamano())
console.log(abuelita)
abuelita.remover()
console.log(abuelita)

module.exports = Pseudoclassical