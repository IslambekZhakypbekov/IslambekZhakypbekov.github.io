let button = document.querySelector('button')
let input1 = document.querySelector('#input-1')
let input2 = document.querySelector('#input-2')
let input3 = document.querySelector('#input-3')


button.addEventListener('mousedown', function(event) {
    let div = document.createElement('div')

    let chat = document.querySelector('#chat')
    let span = document.createElement('span')
    let span1 = document.createElement('span')
    div.append(span)
    div.append(span1)
    chat.append(div)
    span.innerText = input1.value + ': '
    span1.innerText = input2.value
    span.style.color = input3.value
})