import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'selector',
  template: `Super Simple HTML<div></div><div></div>`,
  styles: [``]
})
export class BasicComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
