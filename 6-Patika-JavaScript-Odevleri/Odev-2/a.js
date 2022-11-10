let allTodos = [
  { id: 1, title: "Todo 1", completed: false },
  { id: 2, title: "Todo 2", completed: false },
];

const deleteTodo = (id) => {
  allTodos = allTodos.filter((todo) => todo.id !== id);
  displayTodos();
};

const hightlightTodo = (id) => {
  const todo = document.getElementById(id);
  todo.classList.toggle("highlight");
  allTodos = allTodos.map((todo) => {
    if (todo.id === id) {
      todo.completed = !todo.completed;
    }
    return todo;
  });
};

const displayTodos = () => {
  const todos = allTodos.map((todo) => {
    return `
      <li class="flex" id="${todo.id}" onclick="hightlightTodo(${todo.id})">
      ${todo.title}
      <span onclick="deleteTodo(${todo.id})"><?xml version="1.0" ?><svg class="feather feather-x" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg></span>
      </li>`;
  });

  document.getElementById("list").innerHTML = todos.join("");
};

window.addEventListener("DOMContentLoaded", (event) => {
  displayTodos();
});

const newElement = () => {
  const input = document.getElementById("task");
  if (input.value === "") {
    return $("#liveToastEmpty").toast("show")
  }
  const inputValue = input.value;
  const newTodo = {
    id: Math.floor(Math.random() * 999999),
    title: inputValue,
    completed: false,
  };
  allTodos.push(newTodo);
  input.value = "";
  $("#liveToast").toast("show")
  displayTodos();
};
