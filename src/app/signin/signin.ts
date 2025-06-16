import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './signin.html',
  styleUrl: './signin.scss'
})
export class SigninComponent {
  email: string = '';
  showLanguageDropdown: boolean = false;

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

  async onNext() {
    console.log('onNext clicked');
    console.log('Current email:', this.email);
    
    try {
      if (this.email && this.email.trim() !== '') {
        console.log('Storing email:', this.email);
        localStorage.setItem('userEmail', this.email);
        
        console.log('Navigating to password page...');
        await this.router.navigate(['/password']);
        console.log('Navigation completed');
      } else {
        console.log('Email is empty');
      }
    } catch (error) {
      console.error('Navigation error:', error);
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
