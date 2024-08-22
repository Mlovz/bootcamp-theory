#### 1. DOM-дерево

#### 1.1 Структура DOM-дерева

Когда браузер загружает HTML-документ, он создает DOM-дерево, где каждый элемент и атрибут представляют собой узел. Вот пример, как HTML-структура отображается в DOM-дереве:

<!DOCTYPE html>
<html>
  <head>
    <title>Example</title>
  </head>
  <body>
    <div id="container">
      <p class="text">Hello, World!</p>
    </div>
  </body>
</html>/home/mlovz/Desktop/javascript-themes/js/domm.md

#### В DOM-дереве это представляется следующим образом:

#document
├── html
│ ├── head
│ │ └── title
│ │ └── "Example"
│ └── body
│ └── div#container
│ └── p.text
│ └── "Hello, World!"

#### 1.2 Типы узлов в DOM

DOM состоит из нескольких типов узлов:

1. Document: Корневой узел, представляющий весь документ.
2. Element: Узлы, представляющие HTML-теги.
3. Text: Узлы, представляющие текст внутри элементов.
4. Comment: Узлы комментариев.
5. DocumentFragment:
   1. Специальный тип узла, который используется для временного хранения групп элементов перед вставкой их в документ.
   2. Методы доступа к элементам
      2.1 getElementById

###### Метод getElementById возвращает элемент с определенным id. Этот метод очень быстрый и используется часто:

`let container = document.getElementById('container')`
2.2 `getElementsByClassName`
Метод `getElementsByClassName` возвращает коллекцию всех элементов с указанным классом:

`let paragraphs = document.getElementsByClassName('text');`

###### 2.3 `getElementsByTagName`

Метод `getElementsByTagName` возвращает коллекцию всех элементов с определенным тегом:

`let divs = document.getElementsByTagName('div');`

###### 2.4 querySelector и querySelectorAll

Эти методы используют CSS-селекторы для поиска элементов:

`let firstParagraph = document.querySelector('.text'); // первый элемент с классом text`
`let allParagraphs = document.querySelectorAll('p'); // все <p> на странице 3. Манипуляции с элементами`

3.1 Создание элементов
Создать новый элемент можно с помощью document.createElement:

`let newDiv = document.createElement('div');`
`newDiv.textContent = "I'm a new div!";`
3.2 Вставка элементов в DOM
Существует несколько методов для вставки элементов в DOM:

`appendChild`: Добавляет элемент как последний дочерний.
`insertBefore`: Вставляет элемент перед указанным дочерним элементом.

`document.body.appendChild(newDiv);` // Вставка нового div в конец body
`let container = document.getElementById('container');`
`container.insertBefore(newDiv, container.firstChild);` // Вставка нового div перед первым дочерним элементом
3.3 Удаление элементов
Удалить элемент можно с помощью метода remove:

`newDiv.remove();` // Удаление нового div 4. Работа с атрибутами
4.1 Установка и получение атрибутов
Методы `setAttribute` и `getAttribute` позволяют управлять атрибутами элементов:

`let link = document.createElement('a');`
`link.setAttribute('href', 'https://example.com');`
`console.log(link.getAttribute('href'));` // Выводит: "https://example.com"

4.2 Удаление атрибутов
Атрибуты можно удалять с помощью метода removeAttribute:

`link.removeAttribute('href'); ` 5. Работа с текстовым и HTML содержимым
5.1 innerHTML
innerHTML используется для вставки HTML-кода в элемент:

`container.innerHTML = "<p>New paragraph</p>";`
Этот метод мощный, но может быть небезопасным, если вставляемый HTML-код не проверен (может вызвать XSS-уязвимость).

5.2 textContent
textContent безопасен для вставки текста, так как он не обрабатывает HTML:

`container.textContent = "Just text";`

6. Обработка событий
   6.1 Добавление событий
   События в DOM позволяют реагировать на действия пользователя. Самый распространенный способ добавления событий — это addEventListener:

`document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});`

6.2 Виды событий
Есть множество событий, на которые можно реагировать:

1. Клики: click, dblclick
2. Форма: submit, change, input
3. Клавиатура: keydown, keyup
4. Мышь: mouseover, mouseout, mousemove
5. Окно: resize, scroll

6.3 Удаление событий
Чтобы удалить обработчик событий, нужно использовать removeEventListener:

`function handleClick() {
    alert('Button clicked!');
}`
`document.getElementById('myButton').addEventListener('click', handleClick);`
`document.getElementById('myButton').removeEventListener('click', handleClick); `

7. Навигация по DOM
   7.1 Родительские и дочерние элементы
   DOM позволяет перемещаться между элементами:

`let parent = element.parentNode;`
`let firstChild = element.firstChild;`
`let lastChild = element.lastChild;`
`let children = element.childNodes;` // возвращает все дочерние узлы, включая текстовые

7.2 Соседние элементы
Вы можете перемещаться между элементами на одном уровне:

let next = element.nextSibling;
let previous = element.previousSibling; 8. Продвинутые темы
8.1 DocumentFragment
DocumentFragment используется для создания документа "в памяти", чтобы затем добавить его в DOM:

let fragment = document.createDocumentFragment();
let newElement1 = document.createElement('p');
let newElement2 = document.createElement('p');
fragment.appendChild(newElement1);
fragment.appendChild(newElement2);
document.body.appendChild(fragment); // Все элементы добавляются в DOM сразу
8.2 Шаблоны и клоны элементов
Иногда нужно клонировать элементы, это можно сделать с помощью cloneNode:

let clonedElement = element.cloneNode(true); // true для глубокого клонирования (вместе с дочерними элементами) 9. Работа с формами и вводом данных
9.1 Доступ к элементам формы
Формы и их элементы доступны через объект form:

let form = document.forms['myForm'];
let input = form.elements['myInput'];
9.2 Управление состоянием форм
Вы можете изменять значения полей, проверять их и отправлять форму программно:

input.value = "New value";
form.submit(); // Отправка формы
