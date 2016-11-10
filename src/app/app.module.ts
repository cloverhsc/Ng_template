import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SizerComponet }    from './sizer.component';
import { BigHeroDetailComponent, HeroDetailComponent }  from './hero-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SizerComponet,
    BigHeroDetailComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
