import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-plan-information',
  templateUrl: './plan-information.component.html',
  styleUrls: ['./plan-information.component.css'],
})
export class PlanInformationComponent implements OnInit {
  @Input() planValidate = new FormControl();

  constructor() {}

  ngOnInit(): void {}
}
