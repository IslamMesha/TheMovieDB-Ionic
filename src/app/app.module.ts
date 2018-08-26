import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from "@angular/http";
import { MyApp } from './app.component';

import { PopularPage } from "../pages/popular/popular";
import { ContactPage } from '../pages/contact/contact';
import { TopratedPage } from '../pages/toprated/toprated';
import { TabsPage } from '../pages/tabs/tabs';
import { MoviedetailsPage } from "../pages/moviedetails/moviedetails";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ServiceApiProvider } from '../providers/api';
import { HttpClientModule } from '@angular/common/http';
import { FavouriteProvider } from '../providers/favourite';

@NgModule({
  declarations: [
    MyApp,
    PopularPage,
    ContactPage,
    TopratedPage,
    TabsPage,
    MoviedetailsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PopularPage,
    ContactPage,
    TopratedPage,
    TabsPage,
    MoviedetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ServiceApiProvider,
    FavouriteProvider,
  ]
})
export class AppModule { }
