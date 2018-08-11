import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { TopratedPage } from "../toprated/toprated";
import { MoviedetailsPage } from "../moviedetails/moviedetails";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  topratedRoot = TopratedPage;
  aboutRoot = AboutPage;
  contactRoot = ContactPage;
  movieDetailsRoot = MoviedetailsPage;

  constructor() {

  }
}
