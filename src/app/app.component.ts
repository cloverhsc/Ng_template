import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    title = 'app works!';

    heroes: Hero[];
    currentHero = Hero.MockHeroes[0];
    heroImageUrl = 'assets/hero.gif';
    val = 2;

    fontSize = 10;

    ngOnInit() {
        this.refreshHeroes();
    }

    getVal() {
      return this.val;
    }

    onAlert(str: string) {
        alert(str);
    }

    setUpperCaseFirstName(firstName: string) {
        console.log(firstName);
        this.currentHero.firstName = firstName.toUpperCase();
    }

    // try ngClass ~~
    canSave = true;
    isUnchanged = true;
    isSpecial = true;
    setClasses() {
        let classes = {
            saveable: this.canSave,
            modified: !this.isUnchanged,
            special: this.isSpecial
        };
        return classes;
    }

    // try ngStyle ~~
    setStyles() {
        let styles = {
            'font-style': this.canSave  ? 'italic' : 'normal',      // italic
            'font-weight': this.isUnchanged ? 'bold' : 'normal',     // normal
            'font-size': this.isSpecial ? '24px' : '8px'            // 24px
        };
        return styles;
    }

    // try ngswitch ~~
    toeChoice = '';

    // Try NgForTrackby ~~
    refreshHeroes() {
        this.heroes = Hero.MockHeroes.map(hero => Hero.clone(hero));
    }

    trackByHeroes(index: number, hero: Hero) { return hero.id; }
}
