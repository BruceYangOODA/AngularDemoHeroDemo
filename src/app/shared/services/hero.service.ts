import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero, HeroList, NameI18n } from '../../models/Hero.model';
import * as heroes from '../../../assets/data/hero.json'
import { CookieService } from './cookie.service';
import { LanguageConfig } from 'src/app/configes/languages.config';
import { switchMap, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient,
              private cookieService: CookieService) { }

  getHeros(): Observable<Hero[]> {
    let heroList: Hero[] = []
    let nameSwitcher = this.cookieService.NameSwitcher    
    let heroobj = JSON.parse(JSON.stringify(heroes))
    for (var i=0; i< heroobj.length; i++) {
      let hero = new Hero(heroobj[i])
      hero.name = nameSwitcher[hero.name]
      heroList.push(hero)
    }    
    return of<Hero[]>(heroList)
    //return this.http.get<Hero[]>('/api/heroes')
  }

  getNextHeroById(heroid: string): Observable<Hero | null> {
    return this.getHeros().pipe(
      switchMap((heroes: Hero[]) => {        
        let index=-1        
        for(let i=0; i< heroes.length;i++) {   
          if (heroes[i].id == heroid) {
            index = i            
          }
        }
        if(index == -1) return of(null)
        else if(index==(heroes.length-1)) {
          return of(heroes[0])
        }
        else return of(heroes[index+1])
      })
    )
  }

  getPreHeroById(heroid: string): Observable<Hero | null> {
    return this.getHeros().pipe(
      switchMap((heroes: Hero[]) => {
        let index = heroes.length
        for(let i=heroes.length-1; i>=0; i--){
          if (heroes[i].id == heroid) 
              index = i
        }
        if (index == heroes.length) return of(null)
        else if (index==0) return of(heroes[heroes.length-1])
        else return of(heroes[index-1])
      })
    )
  }

  getHeroById(heroid: string): Observable<Hero | null> {  
    return this.getHeros().pipe(
      switchMap((heroes: Hero[]) => {
        let resultHero = null
        heroes.forEach(hero => {
          if (hero.id == heroid) 
            resultHero = hero
        }) 
        return of(resultHero)        
      })      
    )
  }

}
