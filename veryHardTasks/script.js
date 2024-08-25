// Драг-н-дроп элементов:
// Реализуйте возможность перетаскивания элементов по странице.

/* var ball = document.getElementById("ball");
ball.onmousedown = function (e) {
  ball.style.position = "absolute";

  document.body.appendChild(ball);
  moveAt(e);

  ball.style.zIndex = 1000;
  function moveAt(e) {
    ball.style.left = e.pageX - ball.offsetWidth / 2 + "px";
    ball.style.top = e.pageY - ball.offsetHeight / 2 + "px";
  }

  document.onmousemove = function (e) {
    moveAt(e);
  };
  ball.onmouseup = function () {
    document.onmousemove = null;
    ball.onmouseup = null;
  };
}; */

// Создание вкладок (Tabs):
// Реализуйте систему вкладок, где при нажатии на одну вкладку отображается соответствующее содержимое.

/* let task2_btn1 = document.querySelector(".task2_btn1");
let task2_btn2 = document.querySelector(".task2_btn2");
let task2_btn3 = document.querySelector(".task2_btn3");
let task2_tab_hid1 = document.querySelector(".task2_tab_hid1");
let task2_tab_hid2 = document.querySelector(".task2_tab_hid2");
let task2_tab_hid3 = document.querySelector(".task2_tab_hid3");

function hideAllTabs() {
  task2_tab_hid1.classList.remove("active");
  task2_tab_hid2.classList.remove("active");
  task2_tab_hid3.classList.remove("active");
}

task2_btn1.addEventListener("click", () => {
  hideAllTabs();
  task2_tab_hid1.classList.add("active");
});

task2_btn2.addEventListener("click", () => {
  hideAllTabs();
  task2_tab_hid2.classList.add("active");
});

task2_btn3.addEventListener("click", () => {
  hideAllTabs();
  task2_tab_hid3.classList.add("active");
}); */

// Построение дерева элементов:
// Создайте дерево элементов (подобное файловой системе) и реализуйте возможность сворачивания/разворачивания узлов.

/* let list_cont = document.querySelector(".list_cont");

const arr = [
  {
    text: "Item1",
    disabled: false,
    isClicked: false,
  },
  {
    text: "Item2",
    disabled: true,
    isClicked: false,
  },
  {
    text: "Item3",
    isClicked: true,
    newItems: [
      {
        text: "Item11",
        isClicked: false,
      },
      {
        text: "Item22",
        isClicked: false,
      },
      {
        text: "Item33",
        isClicked: true,
        newItems: [
          {
            text: "Item111",
          },
        ],
      },
    ],
  },
];

function Qwe(arr, parent) {
  let list = document.createElement("ul");

  arr.forEach((element) => {
    let list_item = document.createElement("li");
    list_item.textContent = element.text;
    list.appendChild(list_item);

    if (element.newItems) {
      let isExpanded = false;

      list_item.addEventListener("click", function (e) {
        e.stopPropagation();

        if (isExpanded) {
          let childList = list_item.querySelector("ul");
          if (childList) {
            list_item.removeChild(childList);
          }
        } else {
          Qwe(element.newItems, list_item);
        }

        isExpanded = !isExpanded;
      });
    }
  });
  parent.appendChild(list);
}
Qwe(arr, list_cont); */

// Создание калькулятора:
// Реализуйте простой калькулятор с базовыми операциями (сложение, вычитание, умножение, деление).

/* let inp_value1 = document.querySelector(".inp_value1");
let inp_value2 = document.querySelector(".inp_value2");
let result_btn = document.querySelector(".result_btn");
let result_calc = document.querySelector(".result_calc");
let operation_select = document.getElementById("operation_select");

result_btn.addEventListener("click", () => {
  let result;
  let value1 = +inp_value1.value;
  let value2 = +inp_value2.value;
  if (operation_select.value === "sum") {
    result = value1 + value2;
  } else if (operation_select.value === "substract") {
    result = value1 - value2;
  } else if (operation_select.value === "division") {
    result = value1 / value2;
  } else if (operation_select.value === "multiply") {
    result = value1 * value2;
  }
  if (isNaN(result)) {
    result_calc.textContent = "ПИШИ НОРМАЛЬНО";
  } else {
    result_calc.textContent = result;
  }
}); */

// Сохранение состояния в localStorage:
// Создайте форму, которая сохраняет введенные данные в localStorage, и при перезагрузке страницы восстанавливает их.
/* let name = document.getElementById("name");
let user_form = document.getElementById("user_form");
name.value = localStorage.getItem("name1");
user_form.addEventListener("submit", (event) => {
  event.preventDefault();
  localStorage.setItem("name1", name.value);
  alert("данные сохранены");
});
 */
