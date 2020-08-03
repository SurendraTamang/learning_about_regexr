// Learning about the regres


let description = "Hello world this is for testing and check the regrex let's see how it goes."

// first method
let first_method = new RegExp('Hello')

// second method
let second_method = /World/


console.log(first_method.test(description))
console.log(second_method.test(description))