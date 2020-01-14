import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RegisterService} from "../register.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(private registerService: RegisterService) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      contact: new FormControl(null, [Validators.required, Validators.minLength(10)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      password1: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      city: new FormControl(null, Validators.required),
      zip: new  FormControl(null, [Validators.required, Validators.min(7)])
    });
  }
 onSubmit(arr: string[]) {
   this.registerService.createUser(arr).subscribe((response) => {
     console.log(response)
   })
 }
}
