import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Hero } from 'src/app/models/Hero.model';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  heroFormControl!: FormControl;
  @Input() defaultHeroes$!: Observable<Hero[]>
  defaultHeroes!: Hero[] | null
  filteredHeroes: any
  searchTerm: string=''

  constructor() { 
    this.heroFormControl = new FormControl()
  }

  ngOnInit(): void {
    /*
    this.defaultHeroes$.subscribe((heroes: Hero[]) => {
      this.defaultHeroes = heroes.filter(hero => hero.default)
    })*/
    /*
    this.heroService.getHeros(
      this.cookieService.get('language') || 'cn'
    ).subscribe((heroes: Hero[]) => {
      this.defaultHeroes = heroes.filter(hero => hero.default)

      this.heroFormControl.valueChanges.pipe(
        startWith(''),
        map(value => this.filterHeroes(value))).subscribe(
          heroesFiltered => {
            this.filteredHeroes = heroesFiltered
          }
        )
    })*/
  }  
}

import { Pipe,PipeTransform } from '@angular/core'
@Pipe({name: 'filterHeroes'})
export class FilterHeroesPipe implements PipeTransform {
  transform(heroes: Hero[] | null, tag: string) : Hero[] | null {
    if (heroes == null)
      return null
    return heroes.filter(hero => {  
      return hero.name.toLowerCase().
      includes(tag.toLowerCase())  && hero.default}
      )
  }
}
