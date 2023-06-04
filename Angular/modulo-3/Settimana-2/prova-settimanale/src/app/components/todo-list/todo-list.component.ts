import { Component, OnInit } from '@angular/core';
import { Template } from 'src/app/modules/template.interface';
import { MethodsService } from 'src/app/services/methods.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {

  // variabile task con 2 ways binding per passare il valore del campo input al <li>
  task: string = '';

  // array di servizio popolato dall'array del service per il controllo degli elementi totali, e dei parametri completed e checked
  myArray: Template[] = [];

  // controllo per far apparire frase di attesa durante i timeout.
  chill: boolean = true;

  constructor(private methodSrv: MethodsService) {}

  // metodo per pushare il valore dell input nell array e farlo apparire a schermo + reset del campo input
  createList(prova: string): void {
    setTimeout(() => {
      this.methodSrv.pushToArray(prova);
      this.resetField();
    }, 1500);
  }

  // metodo per cambiare lo stato di completed e conseguentemente far sparire il relativo <li> dal DOM
  removeTask(element: Template) {
    if (element.checked) {
      setTimeout(() => {
      this.methodSrv.changeStatus(element);
      },1500)
    }
  }

  // metodo per resettare il campo dell'input
  resetField(): void {
    this.task = '';
  }

  // metodo per il reset del myArray e quindi dell'app
  resetAll(): void {
    setTimeout(() => {
      this.methodSrv.resetArray();
    }, 1500);
  }

  // extracontrollo per far apparire il giusto messaggio di avvio

  doublecheck ():boolean {
     return this.myArray.every(i => i.completed === true)
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.myArray = this.methodSrv.getArray();
      this.chill = false;
    }, 2000);
  }
}
