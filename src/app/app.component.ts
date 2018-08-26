import { Component } from '@angular/core';
import { Platform } from 'ionic-angular/';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';

import { TabsPage } from '../pages/tabs/tabs';

export const config = {
  apiKey: "AIzaSyCx3QsBvaPLvHSWWaWzN3wI0qidxn8LNfI",
  authDomain: "ionic-movieapp.firebaseapp.com",
  databaseURL: "https://ionic-movieapp.firebaseio.com",
  projectId: "ionic-movieapp",
  storageBucket: "ionic-movieapp.appspot.com",
  messagingSenderId: "671672660277"
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config)
  }
}
