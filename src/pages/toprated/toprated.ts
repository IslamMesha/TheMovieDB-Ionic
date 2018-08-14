import { Component, ViewChild } from '@angular/core';
import { NavController, LoadingController, InfiniteScroll } from 'ionic-angular/';
import { ServiceApiProvider } from "../../providers/services-api";
import { MoviedetailsPage } from "../moviedetails/moviedetails";

@Component({
  selector: 'page-home',
  templateUrl: 'toprated.html'
})
export class TopratedPage {

  @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;

  private topRatedMovies: Array<object> = [];
  private IMG_ROOT: string = ServiceApiProvider.getApiOptions()['IMG_ROOT'];
  private page: number = 1;

  constructor(

    private navCtrl: NavController,
    private serviceApiProvider: ServiceApiProvider,
    private loadingCtrl: LoadingController,

  ) {

  }

  ngOnInit() {

    this.topRatedMovies = this.serviceApiProvider.getMovies();

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

    for (let index = 0; index < this.topRatedMovies.length; index++) {
      this.topRatedMovies.push(this.topRatedMovies[index]);
    }
    debugger

    // this.serviceApiProvider.getMovies(undefined, ++this.page).forEach((movie, index) => {
    //   this.topRatedMovies.push(movie);
    //   debugger;
    // });

    // setTimeout(() => {
    //   // App logic to determine if all data is loaded and disable the infinite scroll.
    //   if (this.topRatedMovies.length > 20) {
    //     debugger
    //   }
    // }, 500);

    console.log("New Movies Array: ", this.topRatedMovies.length);
  }

};
