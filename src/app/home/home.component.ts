import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CarouselComponent, CarouselComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
