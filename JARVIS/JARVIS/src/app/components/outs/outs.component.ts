import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-outs',
  templateUrl: './outs.component.html',
  styleUrls: ['./outs.component.scss'],
})
export class OutsComponent implements OnInit {

  @Input() texts:any[] = []
  constructor() { }

  ngOnInit() {
    console.log("Convs",this.texts);
  }

}
