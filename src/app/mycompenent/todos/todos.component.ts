import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';




@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  localItem: any ;
  todos: any = [];

  constructor() {
    

  }
  // todos: ;
  // constructor() {
  // }

  ngOnInit(): void {
    this.localItem = localStorage.getItem("todos");
    console.log(' this.localItem',  this.localItem);

    
    if(this.localItem == null) {
      this.todos = [
        // {
        //   sno:1,
        //   title:"ds",
        //   desc:"sd",
        //   active:true
        // }
      ];
    }
    else {
      this.todos = JSON.parse(this.localItem)
    }
  }
  deleteTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));

  }
  toggelTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos[index].active=  !this.todos[index].active; 
    localStorage.setItem("todos", JSON.stringify(this.todos));

  }
}
