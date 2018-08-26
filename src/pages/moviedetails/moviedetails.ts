import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { FavouriteProvider } from '../../providers/favourite';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-moviedetails',
  templateUrl: 'moviedetails.html',
})
export class MoviedetailsPage {

  movie: object = {};
  IMG_ROOT: string = "";

  constructor(
    private navParams: NavParams,
    private favourite: FavouriteProvider,
  ) {

  };

  ionViewDidLoad() {
    this.movie = this.navParams.get('movie');
    this.IMG_ROOT = this.navParams.get('IMG_ROOT');
    firebase.database().ref('favouriteMovies/').on('value', response => {
      console.log(response);
      debugger
      response.forEach((movie) => {
        console.log("Firebase Movie: ", movie);
      })
    });
  };

  addToFavouriteMovies(movie) {

  };

};
