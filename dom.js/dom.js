// const element = document.querySelector('.container')
// const button = document.createElement('button')
// button.textContent = 'Кнопка не нажата'

// element.appendChild(button)

1.
// button.addEventListener('click', () => {
//  button.textContent = 'кнопка нажата!'
// })

2.
// document.querySelector('button').addEventListener('mouseover', event => {
//   event.target.style.backgroundColor = 'red'
// })

3.
// const elementt = document.querySelector('.click')
// const li = document.createElement('li')
// li.textContent = 'Косо, но работает'
// document.querySelector('button').addEventListener('click', event => {
//   elementt.appendChild(li)  
// })

4.
// const text = document.querySelector('.text')
// const add = document.querySelector(".add")
// const show = document.querySelector('.show')

// function showText() {
//    show.textContent = text.value  
//    text.value = ''
// }
// add.addEventListener("click", showText) 

5.
// const click = document.querySelector('.tap')
// const text = document.querySelector('.text')
// function hideText() {
//   text.style.display = 'none'
// }
// click.addEventListener('dblclick', hideText)

6.
// const element = document.querySelector('.block')
// element.addEventListener('mouseover', () => {
//   element.style.width = '400px'
//   element.style.height = '300px'
// })

7.
// const a = document.querySelector('.link')
// const menu = document.querySelector('.menu')

// a.addEventListener('mouseover', () => {
//   menu.style.display = 'block'
// })

8.

9.
// const time = document.querySelector('.timer')
// let count = 0
// setInterval(() => {
//   count++
//   time.textContent = count
// }, 1000)

10.
// const text = document.querySelector('.text')
// text.addEventListener('click', () => {
//   text.style.color = 'red';
// })  

11.
// const button = document.querySelector('.btn')
// button.addEventListener('click', () => {
//   button.style.background = 'pink' 
// })

12.
// const text = document.querySelector('.text')
// function text1() {
// text.style.fontSize = 50 + 'px'
// }
// text.addEventListener('dblclick', text1)

13.

14.
// let ball = document.querySelector('.ball');
// let upButton = document.querySelector('#up');
// let downButton = document.querySelector('#down');
// let leftButton = document.querySelector('#left');
// let rightButton = document.querySelector('#right');

// upButton.addEventListener('click', function(e){
//   let goUp = ball.offsetTop;
//   ball.style.top = goUp - 40 + "px";
// });
// downButton.addEventListener('click', function(e){
//  let goDown = ball.offsetTop;
//   ball.style.top = goDown + 40 + "px";
// });
// leftButton.addEventListener('click', function(e){
//   let goLeft = ball.offsetLeft;
//   ball.style.left = goLeft - 40 + "px";
// });
// rightButton.addEventListener('click', function(e){
//   let goRight = ball.offsetLeft;
//   ball.style.left = goRight + 40 + "px";
// });

// window.addEventListener('keydown', function(e){

//     console.log('key code - ', e.keyCode);
//     if(e.keyCode == 38){
//         let goUp = ball.offsetTop;
//         console.log(goUp);
//         ball.style.top = goUp - 40 + "px";
//     }
//     if(e.keyCode == 40){
//         let goDown = ball.offsetTop
//         ball.style.top = goDown + 40 + "px"
//     }
//     if(e.keyCode == 37){
//         let goLeft = ball.offsetLeft
//         ball.style.left = goLeft - 40 + "px"
//     }
//     if(e.keyCode == 39){
//         let goRight = ball.offsetLeft
//         ball.style.left = goRight + 40 + "px"
//     }
// })

15.
// const email = document.getElementById("mail");

// email.addEventListener("input", function (event) {
//   if (email.validity.typeMismatch) {
//     email.setCustomValidity("Нормально введи!");
//   } else {
//     email.setCustomValidity("");
//   }
// });

16.
// const button = document.querySelector('.btn')
// function button0() {
//   button.style.opacity = 0
// }
// function button1() {
  // button.style.opacity = 1
// }
// button.addEventListener('mouseover', button0)
// button.addEventListener('mouseout', button1)

17.
// const result = document.querySelector('.result')
// const plus = document.querySelector('.plus')
// const minus = document.querySelector('.minus')
// const reset = document.querySelector('.reset')
// let count = 0

// minus.addEventListener('click', () => {
//   count--
//   result.textContent = count
// })
// plus.addEventListener('click', () => {
//   count++
//   result.textContent = count
// })
// reset.addEventListener('click', () => {
//   count = 0
//   result.textContent = 0
// })

18.

19.
// const text = document.createElement('h1')
// text.textContent = 'Пиовтышфомагвьшавллыд'
// document.body.appendChild(text)

// text.addEventListener('mouseover', () => {
//  text.style.color = 'red'
// })
// text.addEventListener('mouseout', () => {
//   text.style.color = 'black'
//  })

20.
// const slider = document.querySelector('.container')
// const button1 = document.querySelector('.next')
// const button2 = document.querySelector('.last')

// const slides = [...slider.querySelectorAll('img')]
// const slideCount = slides.length;
// let slideIndex = 0;

// slides[slideIndex].style.display = 'block'

// button1.addEventListener('click', () => {
//   slideIndex++
//   if(slideIndex === slideCount) slideIndex = 0
//   update()
// })

// button2.addEventListener('click', () => {
//   if(slideIndex === 0) {
//     slideIndex = slideCount
//   }
//   slideIndex--
//   update()
// })

// function update() {
//   slides.forEach((item) => {
//     item.style.display = 'none'
//   })
//   slides[slideIndex].style.display = 'block'
// }

21.
// const container = document.querySelector('.container')
// let text = document.querySelectorAll('p')

// text.forEach((a) => {
//   a.addEventListener('click', () => {
//     a.style.background = 'red'
//   })
// })

// text.forEach((a) => {
//   a.addEventListener('dblclick', () => {
//     a.style.background = '#fff'
//   })
// })

22.
// const tasksListElement = document.querySelector(`.tasks__list`);
// const taskElements = tasksListElement.querySelectorAll(`.tasks__item`);
// for (const task of taskElements) {
//   task.draggable = true;
// }
// tasksListElement.addEventListener(`dragstart`, (evt) => {
//   evt.target.classList.add(`selected`);
// })

// tasksListElement.addEventListener(`dragend`, (evt) => {
//   evt.target.classList.remove(`selected`);
// });

// tasksListElement.addEventListener(`dragover`, (evt) => {
//   evt.preventDefault();

//   const activeElement = tasksListElement.querySelector(`.selected`);
//   const currentElement = evt.target;
//   const isMoveable = activeElement !== currentElement &&
//     currentElement.classList.contains(`tasks__item`);
//   if (!isMoveable) {
//     return;
//   }
//   const nextElement = (currentElement === activeElement.nextElementSibling) ?
//   currentElement.nextElementSibling :
//   currentElement;
// tasksListElement.insertBefore(activeElement, nextElement);
// });


23.

24.
