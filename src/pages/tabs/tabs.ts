import { Component } from '@angular/core';

import { HousesPage } from '../houses/houses';
import { HousePage } from '../house/house';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = HousesPage;
  tab3Root = HousePage;

  constructor() {

  }
}
