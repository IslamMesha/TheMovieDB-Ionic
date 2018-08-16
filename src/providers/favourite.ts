import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class FavouriteProvider {

  favouriteMovies: Array<object> = [];

  constructor(
    private storage: Storage
  ) {

  }

  public setAFavouriteMovie(movie): any {
    this.storage.get('favouriteMovies').then((favouriteMovie) => {
      this.favouriteMovies.push(favouriteMovie);
    })
      .catch((error) => {
        console.error(error);
      });
    this.favouriteMovies.push(movie);
    this.storage.set('favouriteMovies', this.favouriteMovies);
  };

  public getTheFavouriteMovies(): Array<Object> {

    this.storage.get('favouriteMovies').then((favouriteMovie) => {
      this.favouriteMovies.push(favouriteMovie);
    })
      .catch((error) => {
        console.error(error);
      });
    return this.favouriteMovies;
  };

}
