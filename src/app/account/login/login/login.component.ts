import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // VARS

  formGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  // METHODS
  constructor() {}

  ngOnInit(): void {}

  submitOnEnter(e: any) {
    if (e.code.toString().toLowerCase() === 'enter') this.submit();
    return;
  }

  submit() {
    console.log(this.formGroup);
  }
}
