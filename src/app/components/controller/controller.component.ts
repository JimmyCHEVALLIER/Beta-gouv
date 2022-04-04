import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { CompteurService } from '../../services/compteur-service';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.scss']
})
export class ControllerComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  counterForm = new FormGroup({
    _count: new FormControl(this.compteurService.compteurData.getValue())});

  constructor(private compteurService: CompteurService) { }

  onFormSubmit(): void {
    if (this.counterForm.get('_count').value >= 0 && this.counterForm.get('_count').value <= 200) {
      this.compteurService.setValue(this.counterForm.get('_count').value);
    }
  }

  valueChanged(event: Event) {
      const _delta = (event.target as Element).id === '+' ? 1 : -1;
      this.compteurService.setValue(this.compteurService.compteurData.getValue() + _delta);
      this.counterForm.setValue({
        _count: this.compteurService.compteurData.getValue()
      });
    }

  ngOnInit() {
  }

}
