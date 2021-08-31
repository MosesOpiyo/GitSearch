import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchService } from './search-service/search.service';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FormsModule } from '@angular/forms';
import { GhReposComponent } from './gh-repos/gh-repos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchbarComponent,
    MainContentComponent,
    GhReposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
