import { Component, ViewChild } from '@angular/core';
import { NavController, LoadingController, InfiniteScroll } from 'ionic-angular/';
import { ServiceApiProvider } from "../../providers/api";
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

    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'Loading Please Wait...'
    });

    loading.present();
    this.topRatedMovies = this.serviceApiProvider.getTopRatedMovies();
    console.log(this.topRatedMovies.length);

    setTimeout(() => {
      loading.dismiss();
    }, 2000);

  };

  getMoreMovies(event) {

    console.log("Event is: ", event);

    let moreMovies = this.serviceApiProvider.getTopRatedMovies(undefined, ++this.page);
    this.topRatedMovies.concat(moreMovies);
    this.infiniteScroll.complete();

    console.log("New Movies Array: ", this.topRatedMovies.length);
  };

  goToMovieDetails(movie): any {
    console.log(movie);
    this.navCtrl.push(MoviedetailsPage, { 'movie': movie, 'IMG_ROOT': this.IMG_ROOT });
  };

};
