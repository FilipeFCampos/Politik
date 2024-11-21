import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, CarouselComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
