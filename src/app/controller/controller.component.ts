import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.scss']
})
export class ControllerComponent implements OnInit {
  @Input() Counter: number;
  @Output() valueChange = new EventEmitter();

  valueChanged(event: Event) {
      (event.target as Element).id === '+' ? this.Counter++ : this.Counter--;
      this.valueChange.emit(this.Counter);
  }

  constructor() { }

  ngOnInit() {
  }

}
