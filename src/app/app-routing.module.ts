import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';

const routes: Routes = [
  {path: 'hero-list', component: HeroListComponent},
  {path: 'hero-details/:id', component: HeroDetailsComponent},
  {path: '', redirectTo: 'hero-list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
