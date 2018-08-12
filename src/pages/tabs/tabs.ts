import { Component } from '@angular/core';

import { PopularPage } from '../popular/popular';
import { ContactPage } from '../contact/contact';
import { TopratedPage } from "../toprated/toprated";
import { MoviedetailsPage } from "../moviedetails/moviedetails";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  topratedRoot = TopratedPage;
  popularRoot = PopularPage;
  contactRoot = ContactPage;
  movieDetailsRoot = MoviedetailsPage;

  constructor() {

  }
}
