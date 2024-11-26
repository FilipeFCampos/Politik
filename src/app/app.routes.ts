import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ContatoComponent } from './contato/contato.component';
import { FeedComponent } from './feed/feed.component';
import { CandidatoComponent } from './candidato/candidato.component';

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
    },
    {
        path: 'feed',
        component: FeedComponent,
        title: 'Feed'
    },
    {
        path: 'candidato',
        component: CandidatoComponent,
        title: 'Candidato'
    },
];
