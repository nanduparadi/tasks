import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService, private route: Router) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      username: ['', [Validators.required]],
      role: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    const userData = this.signupForm.value;
    localStorage.setItem('user signup', JSON.stringify(userData));
    this.apiService.signUp(userData).subscribe(
      (response:any) => {
        console.log('User registered successfully', response);
        this.route.navigate(['/signin']);
      },
      (error: any) => {
        console.error('Error registering user', error);
      }
    );
  }
}
