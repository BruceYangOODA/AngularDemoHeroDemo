import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from 'src/app/models/Hero.model';
import { HeroService } from '../../services/hero.service';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from '../../services/cookie.service';
import { Observable } from 'rxjs';
import { RoutesConfig } from '../../../configes/routes.config'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  hero!: Hero | null;
  constructor(
    private location: Location,
    private activeRoute: ActivatedRoute,
    private heroService: HeroService,
    private cookieService: CookieService,
    private router: Router) {    
    
   }

  ngOnInit(): void {    
    this.getHero().subscribe((hero) => this.hero = hero)
    this.cookieService.listenLanguageChange().subscribe((event) => {
        this.getHero().subscribe((hero) => this.hero = hero)
    })
  }

  getHero(): Observable<Hero | null> {
    const heroid = this.activeRoute.snapshot.params['id']
    return this.heroService.getHeroById(heroid)
  }

  goBack(): void {
    this.location.back()
  }
  next(): void {
    const heroid = this.activeRoute.snapshot.params['id']
    this.heroService.getNextHeroById(heroid).subscribe((hero) => {
      if (hero==null) return 
      this.router.navigate([RoutesConfig.routesNames.hero,hero.id])
      this.hero = hero
    })
  }

  previous(): void {
    const heroid = this.activeRoute.snapshot.params['id']
    this.heroService.getPreHeroById(heroid).subscribe((hero) => {
      if (hero==null) return       
      this.router.navigate([RoutesConfig.routesNames.hero,hero.id])
      this.hero = hero
    })
  }

}
