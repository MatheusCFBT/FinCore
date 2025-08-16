import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('800ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class HeroComponent {

}
