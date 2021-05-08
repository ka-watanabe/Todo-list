import {TodoListModel} from "./model/TodoListModel.js";
import {TodoItemModel} from "./model/TodoItemModel.js";
import {TodoListView} from "./view/TodoListView";
import {render} from "./view/html-util.js";
export class App {
  constructor(){
    this.TodoListModel=new TodoListModel();
  }
  handleAdd(title){
    this.TodoListModel.addTodo(new TodoItemModel({title,completed:false}));
  }
  handleUpdate({id,completed}){
    this.TodoListModel.updateTodo({id,completed});
  }
  handleDelete({id}){
    this.TodoListModel.deleteTodo({id});
  }
  mount() {
    const formElement=document.querySelector("#js-form");
    const inputElement=document.querySelector("#js-form-input");
    const containerElement=document.querySelector("#js-todo-list");
    const todoItemCountElement=document.querySelector("#js-todo-count");
    this.TodoListModel.onChange(()=>{
      const todoItems=this.TodoListModel.getTodoItems();
      const todoListView=new TodoListView;
      const todoListElement=todoListView.createElement(todoItems,{
        onUpdateTodo:({id,completed})=>{
          this.handleUpdate({id,completed});
        },
        onDeleteTodo:({id})=>{
          this.handleDelete({id});
        }
      });
      render(todoListElement,containerElement);
      todoItemCountElement.textContent=`Todoアイテム数${this.TodoListModel.getTotalCount()}`;
    });
    formElement.addEventListener("submit", (event)=>{
      event.preventDefault();
      this.handleAdd(inputElement.value);
      inputElement.value="";
    });
  }
}