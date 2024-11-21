import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})

export class CadastroComponent implements AfterViewInit {
  
  @ViewChild('campoCPF') campoCPF!: ElementRef<HTMLInputElement>;
  @ViewChild('campoCNPJ') campoCNPJ!: ElementRef<HTMLInputElement>;

  ngAfterViewInit(): void {
    // Listener de formatação do CPF
    this.campoCPF.nativeElement.addEventListener('keypress', () => {
      const tamanhoCampo = this.campoCPF.nativeElement.value.length;

      if (tamanhoCampo === 3 || tamanhoCampo === 7) {
        this.campoCPF!.nativeElement.value += '.';
      }
      else if (tamanhoCampo === 11) {
        this.campoCPF!.nativeElement.value += '-';
      }
    });
    // Listener de formatação do CNPJ
    this.campoCNPJ.nativeElement.addEventListener('keypress', () => {
      const tamanhoCampo = this.campoCNPJ.nativeElement.value.length;

      if (tamanhoCampo === 2 || tamanhoCampo === 6) {
        this.campoCNPJ!.nativeElement.value += '.';
      }
      else if (tamanhoCampo === 10) {
        this.campoCNPJ!.nativeElement.value += '/';
      }
      else if (tamanhoCampo === 15) {
        this.campoCNPJ!.nativeElement.value += '-';
      }
    });
  }
}
