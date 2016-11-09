import { Component } from '@angular/core';

import { Hero } from './hero';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app works!';

    currentHero = Hero.MockHeroes[0];
    heroImageUrl = 'assets/hero.gif';
    val = 2;

    getVal() {
      return this.val;
    }
}
