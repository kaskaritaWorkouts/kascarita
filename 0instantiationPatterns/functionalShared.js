/*
* Functional instatiation
* Best for 
* 
* 
*/

// helper function that will create props in obj pointing to the mothods in the methods Obj
let extend = function(obj, methods) {
    for(let key in methods){
        obj[key] = methods[key]
    }
}
// crear constructores
let functionalSharedHandler = function(species, name, sonido){
  const mainObject = {};
  mainObject.species = species;
  mainObject.name = name;
  mainObject.sonido = sonido
  extend(mainObject, mainObjectMethods)
  return mainObject
}
// caja de heramienta
let mainObjectMethods = {
  makeSound: function(){
    console.log(this.sonido)
  },
  changeName: (name) => {
   mainObject.name !== name ? mainObject.name = name : null;
  }
}
// Here we are actually using our functions
let test = functionalSharedHandler("monkey", "pancho", "hasodfhaosdh")
let perro = functionalSharedHandler("canine", "nala", "grrr")
let gato = functionalSharedHandler("feline", "coco", "uwu")


const Carro = (marca, modelo, color) => {
  const auto = {};
  auto.marca = marca;
  auto.modelo = modelo;
  auto.color = color;
  extend(auto, autoMetodos); 
};

module.exports = functionalSharedHandler