/*
* Functional Shared instatiation
* Best for
* 
* 
*/

const Functional = function(){
  // Este objecto representa la instancia que regrasamor al final de la funcion
  var instancia = {}
  // assesmbly line
  instancia.almacenamiento = {}
  instancia.tope = 0
  instancia.add= (valor) =>{
    instancia.tope ++
    instancia.almacenamiento[instancia.tope] = valor
  }
  instancia.remove = () =>{
    // if(Object.keys(instancia.almacenamiento).length > 0){
    if(instancia.tope > 0){
      var temp = instancia.almacenamiento[instancia.tope]
      delete instancia.almacenamiento[instancia.tope]
      instancia.tope--
      return temp
    }
  }
  instancia.size = () =>{
    return instancia.tope 
  }
  return instancia 
}
var test = Functional()
test.add("miguel")
test.add("mia")
console.log(test)
test.remove()
console.log(test.size())

module.exports = Functional