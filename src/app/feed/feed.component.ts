import { Component } from '@angular/core';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [],
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent {
  cards = [
    { name: 'Fulano de Tal', role: 'Vereador', party: 'Partido', location: 'Natal/RN', image: 'images/canditado-generico.png' },
    { name: 'Fulano de Tal', role: 'Prefeito', party: 'Partido', location: 'Natal/RN', image: 'images/canditado-generico.png' },
    { name: 'Fulano de Tal', role: 'Governador', party: 'Partido', location: 'RN', image: 'images/canditado-generico.png' },
    { name: 'Fulano de Tal', role: 'Dep. Estadual', party: 'Partido', location: 'RN', image: 'images/canditado-generico.png' },
    { name: 'Fulano de Tal', role: 'Dep. Federal', party: 'Partido', location: 'RN', image: 'images/canditado-generico.png' },
    { name: 'Fulano de Tal', role: 'Senador', party: 'Partido', location: 'RN', image: 'images/canditado-generico.png' }
  ];
}
