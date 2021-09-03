import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from 'src/app/models/Hero.model';
import { HeroService } from '../../shared/services/hero.service';
import { CookieService } from '../../shared/services/cookie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  heroes$!: Observable<Hero[]>;

  constructor(
    private cookieService: CookieService,
    private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroes$ = this.heroService.getHeros()
    this.cookieService.listenLanguageChange().subscribe((token) => {
      this.heroes$ = this.heroService.getHeros()
    })
  }

}
