import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from '../../services/cookie.service';
import { LanguageConfig } from '../../../configes/languages.config';
import { Hero } from 'src/app/models/Hero.model';
import { HeroService } from '../../services/hero.service';
import { Observable } from 'rxjs';
import { RoutesConfig } from 'src/app/configes/routes.config';
import { switchMap, filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  languageGroup! : []
  defaultHeroes$!: Observable<Hero[]>

  constructor(
    private translateService: TranslateService,
    private cookieService: CookieService,
    private heroService: HeroService) { }

  ngOnInit(): void {    
    this.languageGroup = LanguageConfig.LANGUAGES_LABELS    
    this.defaultHeroes$ = this.heroService.getHeros()
    //this.cookieService.listenLanguageChange().subscribe((ele) => console.log('event',ele))
  }

  changeLanguage(language: string): void {
    this.translateService.use(language)
    this.cookieService.LanguageToken = language
    this.defaultHeroes$ = this.heroService.getHeros()    
  }

  getHeroArrayLink(): string {
    let basePath = RoutesConfig.basePaths.heroarray
    return basePath
  }
  getHeroListLink(): string {
    let basePath = RoutesConfig.basePaths.herolist
    return basePath
  }

}
