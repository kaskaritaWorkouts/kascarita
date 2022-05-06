// Given an array of names iterate over then and return a new array that only keeps names with 4 chars or more
//first - Vanilla js only loops
function vanillaDupes (){
var arr2 = ["jackie", "luis", "nando", "jackie", "ed", "pancho", "jackie", "lili"]
 var temp2 = []
  arr2.forEach((el, ind)=>{
   var push = true
   for( key in temp2){
     console.log("el in loop", el, key)
     if(temp2[key] === el ){
       push = false
     }
   }
   if(push){
     temp2.push(el)
   }
   console.log(temp2)
 })
}

// Second - use only high order functions
function highOrderFuncDupes (){
  var arr = ["jackie", "luis", "nando", "jackie", "ed", "pancho", "jackie", "lili"]
  let temp = []
  arr.forEach((name, index)=>{
    if(arr.indexOf(name) == index){
      temp.push(name)
    }
  })
  console.log('with index',  temp)
}

// third - with methods 
function filterOverDupes (){
   var arr = ["jackie", "luis", "nando", "jackie", "ed", "pancho", "jackie", "lili"]
  
  var dupesRemoved = arr.filter((dupes, index) =>{
     return arr.indexOf(dupes) == index
  })
  return dupesRemoved
}

// forth - new ES6 standards
function ecScriptDupes (){
  var arr = ["jackie", "luis", "nando", "jackie", "ed", "pancho", "jackie", "lili"]
  return new Set(arr)
}

console.log("filter", filterOverDupes()) 
