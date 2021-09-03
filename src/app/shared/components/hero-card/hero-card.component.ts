import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/Hero.model';
import { RoutesConfig } from 'src/app/configes/routes.config';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent implements OnInit {

  routesConfig: any = RoutesConfig
  @Input() hero!: Hero
  constructor() { }

  ngOnInit(): void {    
  }

  getHeroDetail(id: string) {
    let basePath = RoutesConfig.basePaths.hero
    return '/'+basePath+'/'+id
  }

  like(hero: Hero): void {}

}
