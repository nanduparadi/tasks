// signin.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signinForm!: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService,
    private route:Router) { }

  ngOnInit() {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    const credentials = this.signinForm.value;
    localStorage.setItem('user signin', JSON.stringify(credentials));
    this.apiService.signIn(credentials).subscribe(
      response => {
        console.log('User signed in successfully', response);
        this.route.navigate(['/timesheet'])
      },
      error => {
        console.error('Error signing in', error);
      }
    );
  }

}
