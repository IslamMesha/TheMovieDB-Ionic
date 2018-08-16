import { Component, ViewChild } from '@angular/core';
import { NavController, LoadingController, InfiniteScroll } from 'ionic-angular/';
import { ServiceApiProvider } from '../../providers/api';
import { MoviedetailsPage } from '../moviedetails/moviedetails';

@Component({
  selector: 'page-popular',
  templateUrl: 'popular.html'
})
export class PopularPage {

  @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;

  private popularMovies: Array<object> = [];
  private IMG_ROOT: string = ServiceApiProvider.getApiOptions()['IMG_ROOT'];
  private page: number = 1;

  constructor(

    private navCtrl: NavController,
    private serviceApiProvider: ServiceApiProvider,
    private loadingCtrl: LoadingController

  ) {

  };

  ngOnInit() {

    this.popularMovies = this.serviceApiProvider.getMovies("popular");

    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'Loading Please Wait...'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  };

  getMoreMovies(event) {

    console.log("Event is: ", event);

    let moreMovies = this.serviceApiProvider.getMovies(undefined, ++this.page);
    this.popularMovies.concat(moreMovies);
    this.infiniteScroll.complete();

    console.log("New Movies Array: ", this.popularMovies.length);
  };


  goToMovieDetails(movie): any {
    console.log(movie);
    this.navCtrl.push(MoviedetailsPage, { 'movie': movie, 'IMG_ROOT': this.IMG_ROOT });
  };

}
