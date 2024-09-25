// ----------------------------------------------------------- Доступ к элементам

// const item = document.querySelector('.link')
// const items = document.querySelectorAll('.link')

// const getById = document.getElementById('linkId')
// const itemsTags = document.getElementsByClassName('link')

// const newItems = [...items]

// console.log(itemsTags);


// const linkOne = document.querySelector('.link')
// const linkTwo = document.querySelector('.linkTwo')

// console.log(linkOne, linkTwo);

// ----------------------------------------------------------- Styles

// linkOne.style.color = 'red'

// -----------------------------------------------------------  Add Class
// linkOne.classList.add('active')
// linkOne.classList.remove('active')
// linkOne.classList.toggle('active')
// linkOne.className = 'tessssst'


// -----------------------------------------------------------  Attribute

// const field = document.querySelector('.field')

// field.setAttribute('type', 'text')
// field.getAttribute('type')


// -----------------------------------------------------------  События в js
// -------------------------------------Click

// const openItem = document.querySelector('.open')

// openItem.onclick = function(){
//     console.log('я кликнул');
// }

// openItem.addEventListener('click', function(){
//     console.log('click');
// })

// function onClick(){
//     console.log('click');
// }

// openItem.addEventListener('click', onClick)

// openItem.addEventListener('mouseover', () => {
//     console.log('Навел');
// })

// openItem.addEventListener('mouseout', () => {
//     console.log('Убрал');
// })

// openItem.addEventListener('mousemove', () => {
//     console.log('На элементе');
// })

// const field = document.querySelector('.field')
// const openItem = document.querySelector('.open')
// const hideBtn = document.querySelector('.hide')

// openItem.addEventListener('click', () => {
//     field.setAttribute('type', 'text')
//     hideBtn.style.display = 'block'
//     openItem.style.display = 'none'
// })

// hideBtn.addEventListener('click', () => {
//     field.setAttribute('type', 'password')
//        hideBtn.style.display = 'none'
//     openItem.style.display = 'block'
// })



// -----------------------------------------------------------  Create Tag


// const newDiv = document.createElement('div')
// const newLink = document.createElement('a')

// newLink.textContent = 'Google'
// newLink.href = 'https://google.com'
// newLink.className = 'link'

// console.log(newLink);block


// newDiv.setAttribute('class', 'test')
// newDiv.className = 'test'
// newDiv.classList.add('test')
// newDiv.textContent = 'Hello world!'

// -------------------------------------------------------- appendChild, insertBefore

// newDiv.appendChild(newLink)
// document.body.appendChild(newDiv)

// console.log(newDiv);

// const block = document.querySelector('.block')


// document.body.insertBefore(newDiv, block)



