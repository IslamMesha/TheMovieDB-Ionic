import { Component, ViewChild } from '@angular/core';
import { NavController, LoadingController, InfiniteScroll } from 'ionic-angular/';
import { ServicesApiProvider } from "../../providers/services-api";
import { MoviedetailsPage } from "../moviedetails/moviedetails";

@Component({
  selector: 'page-home',
  templateUrl: 'toprated.html'
})
export class TopratedPage {

  @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;

  private topRatedMovies: Array<object> = [];
  private IMG_ROOT: string = ServicesApiProvider.getApiOptions()['IMG_ROOT'];
  private page: number = 1;

  constructor(

    private navCtrl: NavController,
    private servicesApiProvider: ServicesApiProvider,
    private loadingCtrl: LoadingController,

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
    }, 2000);

  };

  goToMovieDetails(movie): any {
    console.log(movie);
    this.navCtrl.push(MoviedetailsPage, { 'movie': movie, 'IMG_ROOT': this.IMG_ROOT });
  };

  getMoreMovies(event) {

    console.log("Event is: ", event);
    if (this.servicesApiProvider.getMovies(undefined, ++this.page)) {
      debugger;
    }

    this.servicesApiProvider.getMovies(undefined, ++this.page).forEach((movie, index) => {
      this.topRatedMovies.push(movie);
      debugger;
    });

    setTimeout(() => {
      // App logic to determine if all data is loaded and disable the infinite scroll.
      if (this.topRatedMovies.length == 20) {
        debugger
      }
    }, 500);

    console.log("New Movies Array: ", this.topRatedMovies.length);
  }

};
