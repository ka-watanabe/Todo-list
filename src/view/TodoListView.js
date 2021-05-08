import {element} from "./html-util.js";
import {TodoItemView} from "./TodoItemView.js";

export class TodoListView{
  createElement(todoItems, {onUpdateTodo,onDeleteTodo}){
    const todolistElement=element`<ul />`;
    todoItems.forEach(todoItem=>{
      const todoItemView=new TodoItemView();
      const todoItemElement=todoItemView.createElement(todoItem,{
        onDeleteTodo,
        onUpdateTodo
      });
      todolistElement.appendChild(todoItemElement);
    });
    return todolistElement;
  }
}