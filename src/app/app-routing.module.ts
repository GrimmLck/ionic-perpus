import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'buku', loadChildren: './buku/buku.module#BukuPageModule' },
  { path: 'detail-buku/:data', loadChildren: './detail-buku/detail-buku.module#DetailBukuPageModule' },
  { path: 'add-buku', loadChildren: './add-buku/add-buku.module#AddBukuPageModule' },
  { path: 'add-buku/:data', loadChildren: './add-buku/add-buku.module#AddBukuPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'logout', loadChildren: './logout/logout.module#LogoutPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
