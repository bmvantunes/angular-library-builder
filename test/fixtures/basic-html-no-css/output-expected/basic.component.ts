import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'selector',
  template: `Angular {{ myAngularProperty }}<div *ngIf="myAngularProperty">Stuff</div>`
})
export class BasicComponent implements OnInit {
  @Input() myAngularProperty: string;

  constructor() { }

  ngOnInit() { }
}
