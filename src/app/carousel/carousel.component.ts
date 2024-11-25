import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'] ,
})
export class CarouselComponent implements AfterViewInit {
  list_text = [
    "Some representative placeholder content for the first slide.",
    "Some representative placeholder content for the second slide.",
    "Some representative placeholder content for the third slide.",
  ];

  @ViewChild('description') description!: ElementRef<HTMLParagraphElement>;
  @ViewChild('carousel') carousel!: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    const carouselElement = this.carousel.nativeElement;

    carouselElement.addEventListener('slide.bs.carousel', (event: any) => {
      const index = event.to;
      this.description.nativeElement.innerHTML = this.list_text[index];
    });
  }
}
