import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SigninComponent } from './signin/signin';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SigninComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'angularfrontend';
}
