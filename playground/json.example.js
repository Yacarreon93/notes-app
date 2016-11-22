var obj = {
  name: 'Yasser'
}

var stringObj = JSON.stringify(obj)

console.log(obj)
console.log(typeof stringObj)
console.log(stringObj)

var personString = '{"name":"Jose","lastname":"Perez","age":"25"}'
var person = JSON.parse(personString)

console.log(typeof person)
console.log(person)
