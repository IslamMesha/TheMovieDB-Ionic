import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ServicesApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicesApiProvider {

  constructor(
    public http: HttpClient
  ) {
    console.log('Hello ServicesApiProvider Provider');
  }

  public static getApiOptions(): object {
    return {
      API_KEY: "d8dae1093d4889e05aae991ff19bd91f",
      IMG_ROOT:"https://image.tmdb.org/t/p/w500/"
    }
  }

}
