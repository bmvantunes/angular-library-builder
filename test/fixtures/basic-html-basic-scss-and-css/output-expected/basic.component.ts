import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'selector',
  template: `Super Simple HTML<div></div><div></div>`,
  styles: [`.my-class{background-color:red;position:-webkit-sticky;position:sticky}.normal-css{background-color:stuff}`]
})
export class BasicComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
