import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'card',
  standalone: true,
  imports: [ RouterLink ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

}
