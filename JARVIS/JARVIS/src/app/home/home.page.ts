import { Component,OnInit } from '@angular/core';
import { AssistantService } from '../services/assistant.service';
import { Location } from '@angular/common';
import { Event } from 'typescript.events';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  sessionId = '';
  confirm = ""
  text=""
  envios:any[] = [];
  constructor(private asistente: AssistantService,
              private location: Location,
              public event: Event) {
                this.event.on('respuesta', () => {
                  this.ngOnInit()
                });
              }


  ngOnInit() {
    //llama aca la sesion
    this.ObtenerSesion()
    this.envios = this.asistente.response
    //manda al metodo
    //this.sessionId = JSON.parse(localStorage.getItem("conversession"));
    //this.envios = this.asistente.response
  }

  ObtenerSesion(){
    this.asistente.ObtenerSesion()
    .subscribe((sesion:any) =>{
     console.log(sesion);
     console.log("ID Sesion",sesion.response.result.session_id);
     this.sessionId = sesion.response.result.session_id
     if (this.sessionId != ''){
      localStorage.setItem("conversession", JSON.stringify (this.sessionId));
    }else{
      console.log("Ha ocurrido un error, vuelva a intentarlo más tarde")
    }
   });
   }


   ngOnDestroy(){
    this.asistente.CerrarSesion(this.sessionId)
    .subscribe((confirm:any) =>{
     console.log(confirm);
     this.confirm = confirm.response.statusText
     if (this.confirm == "OK"){
       localStorage.setItem("conversession", JSON.stringify (''));
     }
   });
   }
}
