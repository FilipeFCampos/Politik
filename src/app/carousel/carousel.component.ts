import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements AfterViewInit {

  list_text = [
    { description: "De olho na eleição", link: "https://www.tse.jus.br/eleicoes/calendario-eleitoral/calendario-eleitoral" },
    { description: "Confira nossas redes sociais!", link: "#" },
    { description: "Faça uma doação!", link: "#" },
  ];

  @ViewChild('description') description!: ElementRef<HTMLParagraphElement>;
  @ViewChild('descriptionLink') descriptionLink!: ElementRef<HTMLAnchorElement>;
  @ViewChild('carousel') carousel!: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    const carouselElement = this.carousel.nativeElement;

    carouselElement.addEventListener('slide.bs.carousel', (event: any) => {
      const index = event.to;
      this.description.nativeElement.innerText = this.list_text[index].description;
      this.descriptionLink.nativeElement.href = this.list_text[index].link;
    });
  }
}
