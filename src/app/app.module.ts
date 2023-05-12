import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from '@auth0/auth0-angular';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { environment } from 'src/environments/environment.prod';
import { HeaderComponent } from './components/header/header.component';
import { IproovComponent } from './components/iproov/iproov.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FloatContainerComponent } from './components/float-container/float-container.component';
import { SvgImageComponent } from './components/svg-image/svg-image.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent, IproovComponent, FloatContainerComponent, SvgImageComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    AuthModule.forRoot(environment.auth),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
