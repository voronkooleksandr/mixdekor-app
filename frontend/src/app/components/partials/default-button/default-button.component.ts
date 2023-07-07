import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'default-button',
  templateUrl: './default-button.component.html',
  styleUrls: ['./default-button.component.css'],
})
export class DefaultButtonComponent implements OnInit {

  @Input()
  text: string = 'Відправити';
  @Input()
  bgColor = 'blue';
  @Input()
  color = 'white';
  @Input()
  fontSizeRem = 1.3;
  @Input()
  widthRem = 12;
  @Input()
  type: 'submit' | 'button' = 'submit';
  @Output()
  onClick = new EventEmitter()

  constructor() {}

  ngOnInit(): void {}
}
