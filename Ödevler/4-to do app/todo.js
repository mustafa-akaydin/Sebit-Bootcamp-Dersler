const addForm = document.querySelector(".add");
const list = document.querySelector(".todoList");
const search = document.querySelector(".search input");

const generateTemplate = (todo) => {
  const html = `         
  <li
    class="list-group-item d-flex justify-content-between aling-items-center">
    <span>${todo}</span>
    <i class="fa-solid fa-trash delete"></i>
  </li>`;
  list.innerHTML += html;
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  if (todo.length > 0) {
    generateTemplate(todo);
    addForm.reset();
  }
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});
const filterTodo = (term) => {
  console.log(term);
  console.log(list.children);
  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("filtered"));

  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
};

//aranacak harfleri term adlı değişken de tutuyoruz
search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
  filterTodo(term);
});
