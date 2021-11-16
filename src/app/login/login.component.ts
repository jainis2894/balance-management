import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  errorMessage: string = '';
  loginFormGroup = new FormGroup({
    userId: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20),
    ]),
  });

  constructor(private authService: AuthService,private router:Router) {}

  ngOnInit(): void {
    this.authService.userDetails.subscribe(res=>{
      console.log("res",res);
      
    })
  }
  onSubmit() {
    let userIdControl = this.loginFormGroup.get('userId') as FormControl;
    let passowrdControl = this.loginFormGroup.get('password') as FormControl;
    let checkuserId = this.validateUserId(userIdControl, 'UserId');
    if (checkuserId) {
      this.errorMessage = checkuserId;
      return;
    }
    let checkPassword = this.validateUserId(passowrdControl, 'Password');
    if (checkPassword) {
      this.errorMessage = checkPassword;
      return;
    }
    if (this.loginFormGroup.valid) {
      this.errorMessage = '';
      // call service to validate user
      this.authService.getUserDetails().subscribe(
        (response) => {
          if (response.length > 0) {
            let user = response.find(
              (element) =>
                element.userId == userIdControl.value &&
                element.password == passowrdControl.value
            );
            if (user) {
              // navigate to dashboard page
              this.authService.userDetails.next(user);
              
              this.router.navigate(['/navigate']);
              
            } else {
              this.errorMessage = "'Invalid User Credentials!";
              this.loginFormGroup.reset();
            }
          } else {
            this.errorMessage = 'No data found';
          }
        },
        (error) => {
          this.errorMessage = "'Sorry unable to connect to system!";
        }
      );
    }
  }
  validateUserId(control: FormControl, controlName: string): string {
    if (control.errors && control.errors.required) {
      return 'Please enter login credentials to continue';
    } else if (control.errors && control.errors.minlength) {
      return controlName + ' should be greater than 8 characters';
    } else if (control.errors && control.errors.maxlength) {
      return controlName + ' should be less than or equal to 20 characters';
    } else {
      return '';
    }
  }
}
