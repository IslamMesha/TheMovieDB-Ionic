import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { FavouriteProvider } from '../../providers/favourite';
import { Storage } from '@ionic/storage';

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
    private storage: Storage
  ) {
  }

  ionViewDidLoad() {
    this.movie = this.navParams.get('movie');
    this.IMG_ROOT = this.navParams.get('IMG_ROOT');
  };

  addToFavouriteMovies(movie) {

    console.log("DataBase Driver: ", this.storage.driver);

    this.storage.set("movie", JSON.stringify(movie))
      .then((name) => {
        console.log("Movie stored successfully: ", movie);
      })
      .catch((error) => {
        console.error(error);
      });

    this.storage.get("movie")
      .then((movie) => {
        console.log("Get Movie: ", JSON.parse(movie));
      })
      .catch((error) => {
        console.error(error);
      });

  };

};
