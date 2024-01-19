import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
   todolist : string [] =[];
  inputvalue :string ="";
  addtodo(){
    this.todolist.push(this.inputvalue);
    this.inputvalue=""
  }
  removetodo(name:string){
    this.todolist=this.todolist.filter(value => value!==name);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
