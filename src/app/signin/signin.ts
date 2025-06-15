import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signin.html',
  styleUrl: './signin.scss'
})
export class SigninComponent {
  email: string = '';

  onNext() {
    console.log('Email entered:', this.email);
    // Add your sign-in logic here
  }
}
