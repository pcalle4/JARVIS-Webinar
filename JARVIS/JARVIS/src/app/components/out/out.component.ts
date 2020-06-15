import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-out',
  templateUrl: './out.component.html',
  styleUrls: ['./out.component.scss'],
})
export class OutComponent implements OnInit {
  @Input() text: any = {};
  constructor() { }

  ngOnInit() {
    console.log("Conv",this.text.text);
  }

}
