import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ContatoComponent } from './contato/contato.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home'
    },
    {
        path: 'cadastro',
        component: CadastroComponent,
        title: 'Cadastro'
    },
    {
        path: 'contato',
        component: ContatoComponent,
        title: 'Contato'
    }
];
