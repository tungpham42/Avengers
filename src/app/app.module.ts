import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { MatToolbarModule, MatCardModule, MatButtonModule } from '@angular/material';
import { HeroService } from './services/hero.service';
import { SelectedHeroPipe } from './pipes/selected-hero.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroDetailsComponent,
    SelectedHeroPipe
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatCardModule, MatButtonModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
