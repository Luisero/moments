import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  message:  string =  '';
  constructor() { }


  addMessage(message: string){
    this.message = message;
    const SECOND = 1000;
    setTimeout(() => {
      this.clearMessage()
    }, 
    SECOND*2.5);
  }

  clearMessage(){
    this.message = "";
  }
}
