import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-moviedetails',
  templateUrl: 'moviedetails.html',
})
export class MoviedetailsPage {

  movie: object = {};
  IMG_ROOT: string = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    this.movie = this.navParams.get('movie');
    this.IMG_ROOT = this.navParams.get('IMG_ROOT');
  }

}
