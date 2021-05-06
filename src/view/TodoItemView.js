import {element} from "./html-util.js";
export class TodoItemView{
  createElement(todoItem, {onUpdateTodo,onDeleteTodo})
  
  
        const todoItems=this.TodoListModel.getTodoItems();
      todoItems.forEach(item=>{
        const todoItemElement=item.completed
        ? element`<li><input type="checkbox" class="checkbox" checked><s>${item.title}</s></li>`
        : element`<li><input type="checkbox" class="checkbox" >${item.title}</li>`;
        const inputCheckboxElement=todoItemElement.querySelector(".checkbox");
        inputCheckboxElement.addEventListener("change",()=>{
          this.TodoListModel.updateTodo({
            id:item.id,
            completed:!item.completed
          });
        });
}