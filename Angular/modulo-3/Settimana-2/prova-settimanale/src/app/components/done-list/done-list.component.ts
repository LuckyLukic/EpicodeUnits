import { Component, OnInit } from '@angular/core';
import { MethodsService } from 'src/app/services/methods.service';
import { Template } from 'src/app/modules/template.interface';

@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.scss']
})
export class DoneListComponent implements OnInit {

  myArray: Template [] = [];
  chill: boolean = true;

  constructor(private methodSrv: MethodsService) { }

  // richiamo remove task dal dervice per rimuovere il task da myArray

  removeTask(element:Template) {
    setTimeout(() => {
      this.methodSrv.removeTask(element);
    },1500)
  }

  // richaimo l'array dal service per copiarlo in myArray

  ngOnInit(): void {

    setTimeout (() => {
      this.myArray = this.methodSrv.getArray()
      this.chill = false;
    },2000)
  }

}
