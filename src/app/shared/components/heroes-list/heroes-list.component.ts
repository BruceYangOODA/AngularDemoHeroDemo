import { Component, OnInit, ViewChild, Inject  } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Hero } from 'src/app/models/Hero.model';
import { HeroService } from '../../services/hero.service';
import { RoutesConfig } from 'src/app/configes/routes.config';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit {

  heroes!: Hero[];
  newHeroForm!: FormGroup;
  @ViewChild('form', { static: false }) myNgForm!: NgForm
  error: boolean = false; 
  constructor(private heroService: HeroService,
              private formBuilder: FormBuilder) { 
    this.newHeroForm = this.formBuilder.group({
      name: [null,[Validators.required, Validators.maxLength(30)]],
      alterEgo: [null,[Validators.required, Validators.maxLength(30)]]
    })
  }

  ngOnInit(): void {
    this.heroService.getHeros().subscribe((heroes) => this.heroes = heroes)
  }

  trackByFn(index: any) {
    return index;
  }

  async createNewHero() {}

  like(hero: Hero): void {}

  deleteHero(hero: Hero): void {}

  getLinkById(id: string): string {
    let basePath = RoutesConfig.basePaths.hero
    return '/'+basePath+'/'+id
  } 

}
