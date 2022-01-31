import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { PersonListComponent } from './components/person-list/person-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonDetailComponent } from './components/person-detail/person-detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MaterialModule } from 'src/angular-material';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { DataLayerService } from './services/data-layer.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PersonListComponent,
    PersonDetailComponent,
    PageNotFoundComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [DataLayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
