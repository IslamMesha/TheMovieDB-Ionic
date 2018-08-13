import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular/';
// import { HTTP } from "@ionic-native/http";
import { ServicesApiProvider } from "../../providers/services-api";
import { MoviedetailsPage } from "../moviedetails/moviedetails";

@Component({
  selector: 'page-home',
  templateUrl: 'toprated.html'
})
export class TopratedPage implements OnInit {

  topRatedMovies: Array<object> = [];
  IMG_ROOT: string = ServicesApiProvider.getApiOptions()['IMG_ROOT'];

  constructor(

    private navCtrl: NavController,
    private servicesApiProvider: ServicesApiProvider,
    private loadingCtrl: LoadingController

  ) {

  }

  ngOnInit() {

    this.topRatedMovies = this.servicesApiProvider.getMovies();

    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'Loading Please Wait...'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 5000);

  };

  goToMovieDetails(movie): any {
    this.navCtrl.push(MoviedetailsPage, { 'movie': movie, 'IMG_ROOT': this.IMG_ROOT });
  };

}
