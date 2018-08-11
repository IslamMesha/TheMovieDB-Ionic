import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { HTTP } from "@ionic-native/http";
import { Http, Headers } from "@angular/http";
import { ServicesApiProvider } from "../../providers/services-api";
import { MoviedetailsPage } from "../moviedetails/moviedetails";

@Component({
  selector: 'page-home',
  templateUrl: 'toprated.html'
})
export class TopratedPage implements OnInit {

  topRatedMovies: Array<object> = [];
  IMG_ROOT: string = "";

  constructor(

    public navCtrl: NavController,
    private http: Http,

  ) {

  }

  ngOnInit() {

    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    const API_OPIONS = ServicesApiProvider.getApiOptions();
    this.IMG_ROOT = API_OPIONS['IMG_ROOT'];

    // Get the Top Rated Movies.
    this.http.get("https://api.themoviedb.org/3/movie/top_rated?api_key=" + API_OPIONS['API_KEY']
      , { headers: headers }).toPromise()
      .then((response) => {
        console.log(response.json().results[0]);

        response.json().results.forEach(movie => {
          this.topRatedMovies.push(movie);
        });

      })
      .catch((error) => {
        console.log(error.json());
      });
  };

  goToMovieDetails(movie): any {
    this.navCtrl.push(MoviedetailsPage, { 'movie': movie, 'IMG_ROOT': this.IMG_ROOT });
  };

}
