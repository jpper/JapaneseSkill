import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'createdeck', loadChildren: './pages/createdeck/createdeck.module#CreatedeckPageModule' },
  { path: 'showdeck', loadChildren: './pages/showdeck/showdeck.module#ShowdeckPageModule' },
  { path: 'showdeck/:id', loadChildren: './pages/showdeck/showdeck.module#ShowdeckPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
