import { Component } from '@angular/core';
import { NavController } from 'ionic-angular/';
import { ServicesApiProvider } from '../../providers/services-api';
import { MoviedetailsPage } from '../moviedetails/moviedetails';

@Component({
  selector: 'page-popular',
  templateUrl: 'popular.html'
})
export class PopularPage {

  popularMovies: Array<object> = [];
  IMG_ROOT: string = ServicesApiProvider.getApiOptions()['IMG_ROOT'];

  constructor(

    public navCtrl: NavController,
    private servicesApiProvider: ServicesApiProvider

  ) {

  };

  ngOnInit() {
    this.popularMovies = this.servicesApiProvider.getMovies("popular");
  };

  goToMovieDetails(movie): any {
    this.navCtrl.push(MoviedetailsPage, { 'movie': movie, 'IMG_ROOT': this.IMG_ROOT });
  };

}
