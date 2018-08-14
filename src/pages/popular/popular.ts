import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular/';
import { ServiceApiProvider } from '../../providers/services-api';
import { MoviedetailsPage } from '../moviedetails/moviedetails';

@Component({
  selector: 'page-popular',
  templateUrl: 'popular.html'
})
export class PopularPage {

  popularMovies: Array<object> = [];
  IMG_ROOT: string = ServiceApiProvider.getApiOptions()['IMG_ROOT'];

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
    }, 5000);
  };

  goToMovieDetails(movie): any {
    console.log(movie);
    this.navCtrl.push(MoviedetailsPage, { 'movie': movie, 'IMG_ROOT': this.IMG_ROOT });
  };

}
