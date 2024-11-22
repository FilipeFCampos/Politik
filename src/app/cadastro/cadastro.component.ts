import { AfterViewInit, Component, EventEmitter, ElementRef, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})

export class CadastroComponent implements AfterViewInit {
  
  @ViewChild('campoCPF') campoCPF!: ElementRef<HTMLInputElement>;
  @ViewChild('campoCandidatoCNPJ') campoCandidatoCNPJ!: ElementRef<HTMLInputElement>;
  @ViewChild('campoCEP') campoCEP!: ElementRef<HTMLInputElement>;
  @ViewChild('campoPartidoCNPJ') campoPartidoCNPJ!: ElementRef<HTMLInputElement>;

  escopo?: string;

  setScope(value: Event) {
    this.escopo = (value.target as HTMLSelectElement).value;
  }

  ngAfterViewInit(): void {
    // Listener de formatação do CPF
    this.campoCPF.nativeElement.addEventListener('keypress', () => {
      const tamanhoCampo = this.campoCPF.nativeElement.value.length;

      formatCPF(tamanhoCampo, this.campoCPF);
    });

    // Listener de formatação do CNPJ do candidato
    this.campoCandidatoCNPJ.nativeElement.addEventListener('keypress', () => {
      const tamanhoCampo = this.campoCandidatoCNPJ.nativeElement.value.length;

      formatCNPJ(tamanhoCampo, this.campoCandidatoCNPJ);
    });

    // Listener de formatação do CEP
    this.campoCEP.nativeElement.addEventListener('keypress', () => {
      const tamanhoCampo = this.campoCEP.nativeElement.value.length;

      formatCEP(tamanhoCampo, this.campoCEP);
    });
    
    // Listener de formatação do CNPJ do partido
    this.campoPartidoCNPJ.nativeElement.addEventListener('keypress', () => {
      const tamanhoCampo = this.campoPartidoCNPJ.nativeElement.value.length;

      formatCNPJ(tamanhoCampo, this.campoPartidoCNPJ)
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
