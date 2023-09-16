import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MomentFormComponent } from './components/moment-form/moment-form.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NewMomentComponent } from './components/pages/new-moment/new-moment.component';
import { MessagesComponent } from './components/messages/messages.component';
import { EditMomentComponent } from './components/pages/edit-moment/edit-moment.component';
import { MomentComponent } from './components/pages/moment/moment.component';

@NgModule({
  declarations: [
    AppComponent,
    MomentFormComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    NewMomentComponent,
    MessagesComponent,
    EditMomentComponent,
    MomentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
