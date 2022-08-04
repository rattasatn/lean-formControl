import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  planInformationValidate = new FormControl(null, [Validators.required]);
  contactInformationValidate = new FormControl(null, [Validators.required]);

  onSubmit() {}
  constructor() {}

  ngOnInit(): void {}
}
