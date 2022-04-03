import { Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-cadran',
  templateUrl: './cadran.component.html',
  styleUrls: ['./cadran.component.scss']
})
export class CadranComponent implements OnInit, OnChanges {
  @Input() CounterCadran: number;
  Angle: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    this.Angle = 'rotate(' + changes.CounterCadran.currentValue * 18 + 'deg)';
  }

}
