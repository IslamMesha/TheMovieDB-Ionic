import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular/';
// import { HTTP } from "@ionic-native/http";
import { ServicesApiProvider } from "../../providers/services-api";
import { MoviedetailsPage } from "../moviedetails/moviedetails";

@Component({
  selector: 'page-home',
  templateUrl: 'toprated.html'
})
export class TopratedPage implements OnInit {

  topRatedMovies: Array<object> = [];
  IMG_ROOT: string = ServicesApiProvider.getApiOptions()['IMG_ROOT']

  constructor(

    public navCtrl: NavController,
    private servicesApiProvider: ServicesApiProvider

  ) {

  }

  ngOnInit() {
    this.topRatedMovies = this.servicesApiProvider.getMovies();
  };

  goToMovieDetails(movie): any {
    this.navCtrl.push(MoviedetailsPage, { 'movie': movie, 'IMG_ROOT': this.IMG_ROOT });
  };

}
