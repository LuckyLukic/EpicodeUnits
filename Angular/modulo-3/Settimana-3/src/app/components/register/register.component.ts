import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import { Utente } from 'src/app/module/utente.interface';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  pattern = '^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$';
  newUser!: Partial<Utente>;

  registerForm = this.builder.group({
    name: ['', Validators.required],
    surname: ['', Validators.required],
    username: ['', [Validators.required, Validators.minLength(8)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern(this.pattern)]],
    controlPassword: [
      '',
      [Validators.required, Validators.pattern(this.pattern), ],
    ],
  }, {
    // validators: this.passwordMatchValidator('password', 'controlPassword')
  });

  constructor(
    private builder: FormBuilder,
    private authSrv: AuthService,
    private route: Router
  ) {}

  ngOnInit(): void {}

  // passwordMatchValidator(controlA:string, controlB:string):ValidatorFn {
  //  return (control: AbstractControl): ValidationErrors | null => {
  //   const formGroup = control as FormGroup
  //   const password = formGroup.get("controlA")?.value;
  //   const controlPassword = formGroup.get("controlB")?.value

  //   if (password === controlPassword) {
  //     return null
  //   } else {
  //     return {valuesDoNotMatch: true}
  //   }
  //  }
  // }

  onSubmit() {
    const { controlPassword, ...user } = this.registerForm.value;
    this.newUser = user;
    console.log(this.registerForm)

    try {
      this.authSrv.registra(this.newUser).subscribe();
      this.registerForm.reset();
      this.route.navigate(['/login']);
    } catch (error: any) {
      if (error.status === 400) {
        alert('email already registered');
        this.route.navigate(['/register']);
      }
    }
  }
}
