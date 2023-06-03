import { Injectable } from '@angular/core';
import { Interface } from '../modules/interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {


  constructor () { }

  async postSearch():Promise <any> {
    try {
      const myFetch = (await fetch ("../../assets/db.json")).json();
      return myFetch
    }
    catch(error) {console.error ("fetch non eseguita")}
  }
}
