import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandPageModule } from './land-page/land-page.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  imports: [LandPageModule, RouterOutlet, BrowserAnimationsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FinCore';
}
