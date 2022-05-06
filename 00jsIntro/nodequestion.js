var test = {one: "one"}

function question() {
  return {
    test1: test?.one,
    unde: test?.notHere
  }
}
console.log(question())