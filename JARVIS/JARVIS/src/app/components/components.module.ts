import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InsertComponent } from './insert/insert.component';
import { OutComponent } from './out/out.component';
import { OutsComponent } from './outs/outs.component';



@NgModule({
  declarations: [
    InsertComponent,
    OutComponent,
    OutsComponent
  ],
  exports:[
    InsertComponent,
    OutsComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    HttpClientModule
  ]
})
export class ComponentsModule { }
