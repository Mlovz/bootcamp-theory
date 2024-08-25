let todo_list__btn = document.querySelector(".todo_list__btn");
let todo_list__inp = document.querySelector(".todo_list__inp");
let list = document.querySelector(".list");

todo_list__btn.addEventListener("click", () => {
  if (todo_list__inp.value !== "") {
    let listItem = document.createElement("li");
    let inputValue = todo_list__inp.value;

    listItem.textContent = inputValue;
    listItem.className = "list__item";

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "-";
    deleteBtn.className = "delete__btn";

    listItem.appendChild(deleteBtn);
    list.prepend(listItem);

    todo_list__inp.value = "";

    deleteBtn.addEventListener("click", () => {
      list.removeChild(listItem);
    });
  }
});
