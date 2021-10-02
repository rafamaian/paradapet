import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// Importar Firebase Guards
import {
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from '@angular/fire/auth-guard';

// Define redirecionadores
const toLogin = () => redirectUnauthorizedTo(['/login']); // Usuário  não logado
const isLogged = () => redirectLoggedInTo(['/profile']); // Usuário logado

const routes: Routes = [
  // Rota da página inicial
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadChildren: () =>
      import('./folder/folder.module').then((m) => m.FolderPageModule),
  },

  // Página inicial
  {
    path: 'home',
    loadChildren: () =>
      import('./page/home/home.module').then((m) => m.HomePageModule),
  },

  // Página de contatos
  {
    path: 'contacts',
    loadChildren: () =>
      import('./page/contacts/contacts.module').then(
        (m) => m.ContactsPageModule
      ),
  },

   // Página de duvidas
   {
    path: 'duvidas',
    loadChildren: () =>
      import('./user/duvidas/duvidas.module').then(
        (m) => m.DuvidasPageModule
      ),
  },

   // Página de notificacao
   {
    path: 'notificacao',
    loadChildren: () =>
      import('./user/notificacao/notificacao.module').then(
        (m) => m.NotificacaoPageModule
      ),
  },

  

  // Página sobre
  {
    path: 'about',
    loadChildren: () =>
      import('./page/about/about.module').then((m) => m.AboutPageModule),
  },

  // Rota curinga (rotas inexistentes)
  // TEM QUE SER SEMPRE A ÚLTIMA ROTA
  {
    path: '**',
    loadChildren: () =>
      import('./page/e404/e404.module').then((m) => m.E404PageModule),
  },
  {
    path: 'duvidas',
    loadChildren: () => import('./user/duvidas/duvidas.module').then( m => m.DuvidasPageModule)
  },
  {
    path: 'notificacao',
    loadChildren: () => import('./user/notificacao/notificacao.module').then( m => m.NotificacaoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
