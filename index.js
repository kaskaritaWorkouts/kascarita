console.log("running index file")

const linkedList = require('./1dataStructures/linkedList')

var nuestroTren = linkedList()
nuestroTren.agregar("miguel")
nuestroTren.agregar("Rodolfo")
nuestroTren.agregar("francisco")

console.log(nuestroTren)