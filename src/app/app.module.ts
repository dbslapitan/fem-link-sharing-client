import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import { RegisterComponent } from './auth/register/register.component';
import { LinksComponent } from './links/links.component';
import { HeaderNavComponent } from './partial-components/header-nav/header-nav.component';
import { ProfileComponent } from './profile/profile.component';
import { LinkContainerComponent } from './partial-components/link-container/link-container.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LinksComponent,
    HeaderNavComponent,
    ProfileComponent,
    LinkContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
