import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavouriteProvider } from '../../providers/favourite';

@IonicPage()
@Component({
  selector: 'page-moviedetails',
  templateUrl: 'moviedetails.html',
})
export class MoviedetailsPage {

  movie: object = {};
  IMG_ROOT: string = "";

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private favourite: FavouriteProvider
  ) {
  }

  ionViewDidLoad() {
    this.movie = this.navParams.get('movie');
    this.IMG_ROOT = this.navParams.get('IMG_ROOT');
  };

  addToFavouriteMovies(movie) {
    this.favourite.setAFavouriteMovie(movie);
    this.showMe();
  };

  showMe(){
    console.log(this.favourite.getTheFavouriteMovies());
  };

};
