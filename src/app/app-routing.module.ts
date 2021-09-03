import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';


import { RoutesConfig } from './configes/routes.config'
import { Error404Component } from './shared/components/error404/error404.component';
import { HeroArrayComponent } from './shared/components/hero-array/hero-array.component';
import { HeroDetailComponent } from './shared/components/hero-detail/hero-detail.component';
import { HeroesListComponent } from './shared/components/heroes-list/heroes-list.component';


const routes: Routes = [
  {
    path: RoutesConfig.routes.hero,
    component: HeroDetailComponent
  },
  {
    path: RoutesConfig.routes.home,
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: RoutesConfig.routes.herolist,
    component: HeroesListComponent
  },
  {
    path: RoutesConfig.routes.heroarray,
    component: HeroArrayComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: RoutesConfig.routes.error404,
    component: Error404Component

  },
  { path: '**', redirectTo: RoutesConfig.routes.error404 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
