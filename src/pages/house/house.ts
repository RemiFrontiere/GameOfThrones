import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { normalizeURL } from 'ionic-angular';
import { DomSanitizer} from '@angular/platform-browser';

// import { House } from '../../app/components/House/house';

@Component({
  selector: 'page-house',
  templateUrl: 'house.html'
})

export class HousePage {

  private houseURL = ''
  private houseName = '';
  private showWebView:boolean = false;
  private isInit:boolean = false;

  constructor(private navController: NavController, private navParams: NavParams, private sanitizer: DomSanitizer){
    this.houseName = navParams.get('houseDatas').name;

    this.houseURL =  'http://awoiaf.westeros.org/index.php/' + navParams.get('houseDatas').name.split(' ').join('_');
    this.isInit = true;

  }

  public getHouseURL(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.houseURL);
    }
}
