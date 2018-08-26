import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";

@Injectable()
export class ServiceApiProvider {

  private topRatedMovies: Array<object> = [];
  private popularMovies: Array<object> = [];
  private headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
  private API_OPIONS = ServiceApiProvider.getApiOptions();

  constructor(
    private http: Http
  ) {
    console.log('Hello ServiceApiProvider Provider');
  };

  public static getApiOptions(): object {
    return {
      API_ROOT: "https://api.themoviedb.org/3/movie/",
      API_KEY: "d8dae1093d4889e05aae991ff19bd91f",
      IMG_ROOT: "https://image.tmdb.org/t/p/w500/",
      LANGUAGE: "en-US",
      PAGE: 1,
      REGION: ""
    };
  };

  public getTopRatedMovies(sortBy: string = "top_rated", page: number = 1, region: string = ""): Array<object> {

    let url: string = this.API_OPIONS['API_ROOT'] + sortBy + "?api_key=" + this.API_OPIONS['API_KEY'] + "&language="
      + this.API_OPIONS['LANGUAGE'] + "&page=" + page + "&region=" + region;

    this.http.get(url, { headers: this.headers }).subscribe((response) => {

      console.log('Observer got the next movie: ', response.json().results);

      response.json().results.forEach(movie => {
        this.topRatedMovies.push(movie);
      });

    },
      (error) => {
        console.error('Observer got an error: ' + error);
      },
      () => {
        console.log('Observer got a complete notification.');
      });

    console.log("Page number: ", page + " Top Rated movies are: ", this.topRatedMovies);

    return this.topRatedMovies;
  };


  public getPopularMovies(sortBy: string = "popular", page: number = 1, region: string = ""): Array<object> {

    let url: string = this.API_OPIONS['API_ROOT'] + sortBy + "?api_key=" + this.API_OPIONS['API_KEY'] + "&language="
      + this.API_OPIONS['LANGUAGE'] + "&page=" + page + "&region=" + region;

    this.http.get(url, { headers: this.headers }).subscribe((response) => {

      console.log('Observer got the next movie: ', response.json().results);

      response.json().results.forEach(movie => {
        this.popularMovies.push(movie);
      });

    },
      (error) => {
        console.error('Observer got an error: ' + error);
      },
      () => {
        console.log('Observer got a complete notification.');
      });

    console.log("Page number: ", page + " Popular movies are: ", this.popularMovies);

    return this.popularMovies;
  };

};