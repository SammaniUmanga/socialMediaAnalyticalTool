import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      uname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
   }

   onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.success = true;
  }

  ngOnInit() {
  }

}
