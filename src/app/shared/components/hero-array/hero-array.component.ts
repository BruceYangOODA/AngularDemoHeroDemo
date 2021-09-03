import { Component, OnInit, Injectable, ViewChild  } from '@angular/core';
import { MatPaginator, MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { LanguageConfig } from 'src/app/configes/languages.config';
import { Hero } from 'src/app/models/Hero.model';
import { CookieService } from '../../services/cookie.service';
import { HeroService } from '../../services/hero.service';
import { TranslateService } from '@ngx-translate/core';
import { ThrowStmt } from '@angular/compiler';
import { Router } from '@angular/router';
import { RoutesConfig } from 'src/app/configes/routes.config';

@Component({
  selector: 'app-hero-array',
  templateUrl: './hero-array.component.html',
  styleUrls: ['./hero-array.component.scss']
})
export class HeroArrayComponent implements OnInit {

  heroes!: Hero[]
  heroList!: Hero[]
  pageEvent!: PageEvent
  herolength!: number
  pageSize:number = 8

  @ViewChild('matpaginator', {static : false}) paginator!: MatPaginator;   

  constructor(
    private heroService: HeroService,
    private cookieService: CookieService,
    private router: Router
  ) {     
  }

  ngOnInit(): void {    
    this.cookieService.listenLanguageChange().subscribe((token) =>{
      this.changePaginatorLabel(token)
    })

    this.heroService.getHeros().subscribe(heroes => {      
      this.heroes = heroes
      this.herolength = this.heroes.length
      this.getPageHeroList(0,8)     
    })
  }

  ngAfterViewInit(): void {
    this.changePaginatorLabel(this.cookieService.LanguageToken)
  }

  getPageHeroList(pageIndex: number, pageSize: number) {
    let startIndex = pageIndex * pageSize >= this.herolength ? 0 : 
                      pageIndex * pageSize
    let endIndex = startIndex + pageSize > this.herolength ? 
                      this.herolength : 
                   startIndex + pageSize   

    this.heroList = this.heroes.slice(startIndex, endIndex)    
  }

  changePaginatorLabel(token: string): void {
    if(token == LanguageConfig.LANGUAGES_LIST.CHINESE) {
      this.paginator._intl.itemsPerPageLabel = '每頁'
      this.paginator._intl.nextPageLabel     = '下一頁'
      this.paginator._intl.previousPageLabel = '上一頁'
      this.paginator._intl.lastPageLabel = '尾頁'
      this.paginator._intl.firstPageLabel = '首頁'
    }
    else if(token == LanguageConfig.LANGUAGES_LIST.ENGLISH) {
      this.paginator._intl.itemsPerPageLabel = 'Per Page'
      this.paginator._intl.nextPageLabel     = 'NEXT'
      this.paginator._intl.previousPageLabel = 'PREV'
      this.paginator._intl.lastPageLabel = 'LAST'
      this.paginator._intl.firstPageLabel = 'FIRST'
    }
    else { console.log('hero array wrong language token') }
  }

  like(hero: Hero): void {
    console.log('LIKE')
  }
  navigate(heroid: string): void {
    let basePath = RoutesConfig.basePaths.hero
    this.router.navigate([('/'+basePath+'/'+heroid)])
  }

  onPaginateChange(event: PageEvent): void {
    if (this.heroes.length == 0) return    
    
    let pageIndex = event.pageIndex
    let pageSize = event.pageSize
    let length = event.length
    let previousPageIndex = event.previousPageIndex    
    this.pageSize = pageSize    
    this.getPageHeroList(pageIndex,pageSize)

  }

}
