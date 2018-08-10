import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HTTP } from "@ionic-native/http";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  data: Array<string> = [];
  imgUrl: string = "";
  constructor(public navCtrl: NavController,
    private http: HTTP) {

    this.data = ['Islam', 'Muhammad', 'Hamed', 'Ibrahim', 'Mesha'];
    this.imgUrl = "../../assets/imgs/logo.png";
    console.log(navCtrl);

  }

  ngOnInit() {
    console.log("I am Islam Mesha");
    this.http.get('http://ionic.io', {}, {})
      .then(data => {

        console.log(data.status);
        console.log(data.data); // data received by server
        console.log(data.headers);

      })
      .catch(error => {

        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);

      });

  }

}
