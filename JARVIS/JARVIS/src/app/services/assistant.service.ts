import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from 'typescript.events';
import { environment } from '../../environments/environment';


const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class AssistantService {

  response:any[] = [{}];

  constructor(private http: HttpClient,
              public event: Event,) { }

  ObtenerSesion() {
    console.log("Buscando JARVIS");
    return this.http.post(`${URL}/conversession`, {})
  }

  CerrarSesion(sessionId) {
    console.log("cerrando JARVIS", sessionId);
    return this.http.post(`${URL}/converclose`, { sessionId })
  }

  Pregunta(text, sessionId) {
    console.log("pregunta JARVIS", sessionId);
    return this.http.post(`${URL}/conversation`, { text, sessionId })
      .subscribe((response: any) => {
        console.log("respuesta", response);
        this.response = response.response.result.output.generic
        console.log("Objecto para emitir", this.response);
        this.event.emit('respuesta');
      });
  }
}
