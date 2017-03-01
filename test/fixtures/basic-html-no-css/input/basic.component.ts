import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'selector',
  templateUrl: 'basic.component.html'
})
export class BasicComponent implements OnInit {
  @Input() myAngularProperty: string;

  constructor() { }

  ngOnInit() { }
}
