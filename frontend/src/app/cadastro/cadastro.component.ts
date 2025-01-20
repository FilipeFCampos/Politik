import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})

export class CadastroComponent implements AfterViewInit {

  estados: string[] = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA',
    'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN',
    'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO',
  ];

  @ViewChild('campoCPF') campoCPF!: ElementRef<HTMLInputElement>;
  @ViewChild('campoCEP') campoCEP!: ElementRef<HTMLInputElement>;
  @ViewChild('campoCNPJ') campoCNPJ!: ElementRef<HTMLInputElement>;

  escopo?: string;
  nome?: string;

  setName(value: Event) {
    this.nome = (value.target as HTMLSelectElement).value;
  }

  setScope(value: Event) {
    this.escopo = (value.target as HTMLSelectElement).value;
  }

  ngAfterViewInit(): void {
    // Listener de formatação do CPF
    this.campoCPF.nativeElement.addEventListener('keypress', () => {
      const tamanhoCampo = this.campoCPF.nativeElement.value.length;

      formatCPF(tamanhoCampo, this.campoCPF);
    });

    // Listener de formatação do CEP
    this.campoCEP.nativeElement.addEventListener('keypress', () => {
      const tamanhoCampo = this.campoCEP.nativeElement.value.length;

      formatCEP(tamanhoCampo, this.campoCEP);
    });
    
    // Listener de formatação do CNPJ do partido
    this.campoCNPJ.nativeElement.addEventListener('keypress', () => {
      const tamanhoCampo = this.campoCNPJ.nativeElement.value.length;

      formatCNPJ(tamanhoCampo, this.campoCNPJ)
    });
  }
}


function formatCPF(tamanhoCampo: number, campoCPF: ElementRef<HTMLInputElement>):void {
  if (tamanhoCampo === 3 || tamanhoCampo === 7) {
    campoCPF!.nativeElement.value += '.';
  }
  else if (tamanhoCampo === 11) {
    campoCPF!.nativeElement.value += '-';
  }
}

function formatCNPJ(tamanhoCampo: number, campoCNPJ: ElementRef<HTMLInputElement>):void {
  if (tamanhoCampo === 2 || tamanhoCampo === 6) {
    campoCNPJ!.nativeElement.value += '.';
  }
  else if (tamanhoCampo === 10) {
    campoCNPJ!.nativeElement.value += '/';
  }
  else if (tamanhoCampo === 15) {
    campoCNPJ!.nativeElement.value += '-';
  }
}

function formatCEP(tamanhoCampo: number, campoCEP: ElementRef<HTMLInputElement>):void {
  if (tamanhoCampo === 5) {
    campoCEP!.nativeElement.value += '-';
  }
}
