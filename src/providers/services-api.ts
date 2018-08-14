import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";

@Injectable()
export class ServiceApiProvider {

  private movies: Array<object> = [];

  constructor(
    private http: Http
  ) {
    console.log('Hello ServiceApiProvider Provider');
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
    const API_OPIONS = ServiceApiProvider.getApiOptions();

    var url: string = API_OPIONS['API_ROOT'] + sortBy + "?api_key=" + API_OPIONS['API_KEY'] + "&language="
      + API_OPIONS['LANGUAGE'] + "&page=" + page + "&region=" + region;


    this.http.get(url, { headers: headers }).subscribe((response) => {
      console.log('Observer got the next movie: ', response.json().results);
      response.json().results.forEach(movie => {
        this.movies.push(movie);
      });
    }, (error) => {
      console.error('Observer got an error: ' + error);
    }, () => {
      console.log('Observer got a complete notification.');
    });
    
    console.log("Page number: ", page + " Movies are: ", this.movies);

    return this.movies;
  }

}
