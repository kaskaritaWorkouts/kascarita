/*
* ES6 instatiation
* Casi igual que el pseudoclassical  
* declaramos un constructor donde generamos nuestra instancia
* Despues los methodos dentro del class como react
*/

class ES6 {
  constructor(){
    // this = {}  
    this.tope = 0
    this.almacen = {}
  }
  insertar(tortilla){
    this.tope++
    this.almacen[this.tope] = tortilla
  }
  remover(){
    //este if es por que solo queremos hacer algo si es que tenemos algo dentro del almacen
    if(this.tope > 0){
      var temp = this.almacen[this.tope]
      delete this.almacen[this.tope]
      this.tope--
      return temp
    }
  }
  tamano() {
    return this.tope
  }
}

var abuelita = new ES6()
abuelita.insertar("roja")
abuelita.insertar("azul")
abuelita.insertar("amarilla")
console.log(abuelita.tamano())
console.log(abuelita)
abuelita.remover()
abuelita.remover()
console.log(abuelita)

module.exports = ES6