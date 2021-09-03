import {inject, NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FilterHeroesPipe, SearchBarComponent } from './components/search-bar/search-bar.component';

import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from"@angular/forms";
import { HeroCardComponent } from './components/hero-card/hero-card.component';

import { LazyLoadImageModule } from 'ng-lazyload-image';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroLoadingComponent } from './components/hero-loading/hero-loading.component';
import { LoadingPlaceholderComponent } from './components/loading-placeholder/loading-placeholder.component';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { Error404Component } from './components/error404/error404.component';
import { HeroArrayComponent } from './components/hero-array/hero-array.component'


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '../../assets/i18n/', '.json')
}

@NgModule({
  declarations: [    
    HeaderComponent,
    FooterComponent,
    SearchBarComponent,
    FilterHeroesPipe,
    HeroCardComponent,
    HeroDetailComponent,
    HeroLoadingComponent,
    LoadingPlaceholderComponent,
    HeroesListComponent,
    Error404Component,
    HeroArrayComponent
  ],
  imports: [
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    LazyLoadImageModule,
    TranslateModule.forRoot({
      defaultLanguage: 'cn',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    HeaderComponent,
    FooterComponent,
    HeroCardComponent,    
    LazyLoadImageModule
  ]
})
export class SharedModule { 
}
