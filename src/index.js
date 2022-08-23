document.addEventListener("DOMContentLoaded", () =>{
  document.addEventListener("submit", function(event){
    event.preventDefault();
  });
  let form = document.getElementById("create-task-form");
  form.addEventListener("submit", addTask);


function addTask(e){
  e.preventDefault();
  const task = e.target.querySelector('#new-task-description').value;
  let listTask = document.createElement("li");
  let btn = document.createElement("button");
  btn.addEventListener("click", handleDelete)
  btn.textContent= "X";
  listTask.innerText = `${task} `;
  document.getElementById('tasks').appendChild(listTask);
  listTask.appendChild(btn);
  e.target.querySelector('#new-task-description').value = '';
}} )

function handleDelete(e) {
  e.target.parentNode.remove();
}