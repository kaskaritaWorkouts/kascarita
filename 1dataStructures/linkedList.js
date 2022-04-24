//create a funciton for treen 
var tren = function(){
  var instancia = {}
  //crear un pointer a la cabeza 
  instancia.head = null
  //pointer a la cola 
  instancia.tail = null
//add to tail 
  instancia.agregar = function(valor){
  // crear un wagon
  var node = wagon(valor)
  //if there is no head 
    if(!instancia.head) {
      //set this node to be the head
      instancia.head = node
    }
  //if there is a tail 
    if(instancia.tail){
      // attach to tail
      instancia.tail.hook = node
    }
  //set the node to be the tail
    instancia.tail = node
  }
  //remove from head 
  instancia.removeHead = function(){
    //crear una caja para valor 
    var caja = instancia.head.value   
    //reasignar la cabeza al seguiente node 
    instancia.head = instancia.head.hook
    //regresar la caja
    return caja
  }


//contains
  instancia.contains = function(data) {
    var currentWagon = instancia.head
    //create loop
    while (currentWagon !== null) {
      //if the item is here return true
        if(currentWagon.value === data){
          return true
        }
      // cambiar al siguente wagon
      currentWagon = currentWagon.hook
    }
    //despues de la loop regresa falso
    return false
  }

  return instancia
}

//crear function para los bagones
var wagon = function(value){
  var wagonObj = {}
  wagonObj.value = value
  wagonObj.hook = null
  return wagonObj;v
  // value prop
  // hook to the next cart = null
}

module.exports = tren