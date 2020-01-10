import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../_helpers/must-match.validator';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
import { PasswordStrengthValidator } from "./password-strength.validators";
@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

    registerForm: FormGroup;
    submitted = false;
    phoneNumber = "^(\d[0-9]?){10}$";
    showMessage: boolean;
  searchText;
  constructor(private formBuilder: FormBuilder, private router: Router, private commonService: CommonService) { }

  ngOnInit() {
        this.registerForm = this.formBuilder.group({
             firstName: ['', Validators.required],
             lastName: ['', Validators.required],
             email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$')]],
          confirmPassword: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$')]],
             mobileNo: ['', [Validators.required, Validators.minLength(10)]],
          address: ['', Validators.required]
             //pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$" 
        }, {
            validator: MustMatch('password', 'confirmPassword')
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
      }
      this.commonService.onSetData("logindata", JSON.stringify(this.registerForm.value));
      this.router.navigateByUrl('\product-list');
  }
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
     
      event.preventDefault();
      this.showMessage = true;
    } else {
      this.showMessage = false;
    }
  }

}
