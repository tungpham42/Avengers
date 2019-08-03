import { Component, OnInit, OnDestroy } from '@angular/core';
import { Hero } from '../heroes';
import { ActivatedRoute } from '@angular/router';

import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css'],
  providers: [HeroService]
})
export class HeroDetailsComponent implements OnInit, OnDestroy {
  private id: number;
  heroes: Hero[];
  private sub: any;

  constructor(private heroService: HeroService, private route: ActivatedRoute) {
    this.heroes = heroService.getHeroes();
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
