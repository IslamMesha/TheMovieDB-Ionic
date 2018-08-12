import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";

@Injectable()
export class ServicesApiProvider {

  constructor(
    private http: Http
  ) {
    console.log('Hello ServicesApiProvider Provider');
  }

  public static getApiOptions(): object {
    return {
      API_ROOT: "https://api.themoviedb.org/3/movie/",
      API_KEY: "d8dae1093d4889e05aae991ff19bd91f",
      IMG_ROOT: "https://image.tmdb.org/t/p/w500/",
      LANGUAGE: "en-US",
      PAGE: 1,
      REGION: ""
    }
  }

  public getMovies(sortBy: string = "top_rated", page: number = 1, region: string = ""): Array<object> {

    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    const API_OPIONS = ServicesApiProvider.getApiOptions();

    var url: string = API_OPIONS['API_ROOT'] + sortBy + "?api_key=" + API_OPIONS['API_KEY'] + "&language="
      + API_OPIONS['LANGUAGE'] + "&page=" + page + "&region=" + region;
    // url = "https://api.themoviedb.org/3/movie/top_rated?api_key=d8dae1093d4889e05aae991ff19bd91f&language=en-US&page=1&region=egypt"
    var movies: Array<object> = [];

    this.http.get(url, { headers: headers }).toPromise()
      .then((response) => {
        console.log(response.json().results[0]);

        response.json().results.forEach(movie => {
          movies.push(movie);
        });

      })
      .catch((error) => {
        console.log(error.json());
      });
    return movies;
  }

}
