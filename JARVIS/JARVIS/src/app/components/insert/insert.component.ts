import { Component, OnInit, Input } from '@angular/core';
import { AssistantService } from '../../services/assistant.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss'],
})
export class InsertComponent implements OnInit {
  @Input() session: string;
  componenttext="";

  constructor(private asistente:AssistantService) { }

  ngOnInit() {}


  prueba(){
    console.log(this.componenttext);
    console.log(this.session);
  }

  pregunta(){
   this.asistente.Pregunta(this.componenttext, this.session)
   //this.limpia
  }
  limpia(){
  this.componenttext="" 
  }
}
