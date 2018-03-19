import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { normalizeURL } from 'ionic-angular';

// import { House } from '../../app/components/House/house';

@Component({
  selector: 'page-house',
  templateUrl: 'house.html'
})

export class HousePage {

  private houseURL = 'http://awoiaf.westeros.org/index.php/House_Ball'
  private houseName = '';

  constructor(private navController: NavController, private navParams: NavParams){
    this.houseName = navParams.get('houseDatas').name.split('');
    //House_Baelish_of_Harrenhal
    for(let i=0; i<this.houseName.length; i++){
      if(this.houseName[i] == ' ')
      {
        this.houseName[i] = '_';
        // this.houseName(i, '_');
        console.log(this.houseName[i]);
      }

    }
    console.log(this.houseName);
  }
}
