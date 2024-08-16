// const elements = document.querySelectorAll('.container')

// const byId = document.getElementById('text')

// const byClassName = document.getElementsByClassName('container')

// console.log(byClassName);

// const constainer = document.querySelector('.container')

// const newElement = document.createElement('div')
// newElement.className = 'test'
// newElement.textContent = 'Hello, World!'

// constainer.appendChild(newElement)

// const newLink = document.createElement('a')
// newLink.className = 'link'
// newLink.textContent = 'youtube'

// constainer.appendChild(newLink)

// document.body.innerHTML = '<div></div>'

// console.log(newElement);

// const container = document.querySelector('.container')
// const newItem = document.querySelector('.newItem')

// const newLink = document.createElement('a')
// newLink.className = 'link'
// newLink.textContent = 'youtube'

// container.insertBefore(newLink, newItem)

// События click, dblclick

// const newItem = document.querySelector(".newItem");

// newItem.addEventListener('click', () => {
//     console.log(1);
// })

// newItem.addEventListener('click', function() {
//     console.log(1);
// })

// const onSubmit = () => {
//     console.log(1);
// }

// newItem.addEventListener('click', onSubmit)

// newItem.addEventListener("click", function () {
//   newItem.textContent = "Hello, World!";
//   newItem.style.backgroundColor = "#000";
//   newItem.style.color = "#fff";

//   const container = document.querySelector(".container");

//   const newElement = document.createElement("div");
//   newElement.className = "test";
//   newElement.textContent = "NEwElement";

//   container.appendChild(newElement);
// });

// mouseover - наведение ,
// mouseout - отведение, 
// mousemove - фокус на элемента

// newItem.addEventListener('mouseover', (e) => {
//     console.log(e);
// })


// const a = document.querySelectorAll('.newItem')
// const a = document.getElementById('newId')


// // a.onclick = () => {}

// a.addEventListener('click', (e) => {

// })

// console.log(a);

// const show = document.querySelector('.show')
// const text = document.querySelector('.text')

// console.log(show, text);

// show.addEventListener('click', () => {
//     // text.style.display = 'block'
//     // text.classList.remove('textShow')
// })


// ---------------------- Счетчик ----------------------

// const inc = document.querySelector('.inc')
// const dec = document.querySelector('.dec')
// const reset = document.querySelector('.reset')
// const result = document.querySelector('.count')

// let counter = 0

// inc.addEventListener('click', () => {
//     counter++
//     result.textContent = counter
// })

// dec.addEventListener('click', () => {
//     if(counter === 0) return
//     counter--
//     result.textContent = counter
// })

// reset.addEventListener('click', () => {
//     counter = 0
//     result.textContent = counter
// })


// setInterval(() => {
//     console.log(1);
// }, 5000)

// setTimeout(() => {
//     console.log(1);
// }, 5000)


// const field = document.querySelector('.field')
// const add = document.querySelector('.add')
// const list = document.querySelector('.list')

// add.addEventListener('click', () => {
//     list.innerHTML += `<div>
//         ${field.value}
//         <button class="delete">Delete</button>
//         <button class="edit">Edit</button>
//      </div>`
//     field.value = ''
// })  


// const item = document.querySelector('.link')
// const items = document.querySelectorAll('.link')

// const getById = document.getElementById('linkId')
// const itemsTags = document.getElementsByClassName('link')

// const newItems = [...items]

// console.log(itemsTags);


// const linkOne = document.querySelector('.link')
// const linkTwo = document.querySelector('.linkTwo')

// console.log(linkOne, linkTwo);
// Styles

// linkOne.style.color = 'red'

// Add Class
// linkOne.classList.add('active')
// linkOne.classList.remove('active')
// linkOne.classList.toggle('active')
// linkOne.className = 'tessssst'


// Attribute

// const field = document.querySelector('.field')

// field.setAttribute('type', 'text')
// field.getAttribute('type')


// События в js
// Click

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



// Create Div


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


// newDiv.appendChild(newLink)
// document.body.appendChild(newDiv)

// console.log(newDiv);

// const block = document.querySelector('.block')


// document.body.insertBefore(newDiv, block)



