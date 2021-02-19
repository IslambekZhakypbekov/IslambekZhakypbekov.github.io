let button = document.querySelector('button')
let input1 = document.querySelector('#input-1')
let input2 = document.querySelector('#input-2')
let input3 = document.querySelector('#input-3')
button.addEventListener('mousedown', function(event) {
    console.log(input1.value)
    console.log(input2.value)
    console.log(input3.value)

})