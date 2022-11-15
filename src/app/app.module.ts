import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ListPageComponent } from './pages/list-page/list-page.component'
import { SummaryPageComponent } from './pages/summary-page/summary-page.component'
import { AcountCountsPosComponent } from './components/acount-counts-pos/acount-counts-pos.component'
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeadingCardComponent } from './components/heading-card/heading-card.component';
import { TypeCardComponent } from './components/type-card/type-card.component'
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    ListPageComponent,
    SummaryPageComponent,
    AcountCountsPosComponent,
    NotFoundComponent,
    HeadingCardComponent,
    TypeCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
