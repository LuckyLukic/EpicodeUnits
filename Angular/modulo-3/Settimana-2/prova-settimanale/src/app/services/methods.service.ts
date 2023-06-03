import { Injectable } from '@angular/core';
import { Template } from '../modules/template.interface';

@Injectable({
  providedIn: 'root'
})
export class MethodsService {
arrayService: Template[] = []

  constructor() { }

  // metodo per pushare l'oggetto nell'array

  pushToArray (task:string):void {
    this.arrayService.push({id: this.arrayService.length, title: task, completed: false, checked: false })
  }

  // metodo che prende l'indice dall'oggetto e cambia lo stato di completed a true

  changeStatus (object:Template):void {
    let index = this.arrayService.indexOf(object)
    this.arrayService[index].completed = true;
  }

  // metodo che prende l'index dell'oggeto ed elimina l'oggetto stesso

  removeTask (object:Template):void {
    let index = this.arrayService.indexOf(object)
    this.arrayService.splice(index, 1)
  }

  // metodo per avere il return di arrayService per poi copiarlo in myArray

  getArray():Template[] {
    return this.arrayService
  }

  // reset di arraySerivice. Per qualche motivo non funziona se uso this.arrayService[].

  resetArray():void {
    this.arrayService.length=0;
  }
}
