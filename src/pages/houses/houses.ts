import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { HousePage } from '../house/house';

// import { House } from '../../app/components/House/house';

@Component({
  selector: 'page-houses',
  templateUrl: 'houses.html'
})
export class HousesPage {

  private houses:Array<any>;
  private data:any
  private isInit:boolean = false;
  private apiPageNum:number = 1;

  constructor(public navCtrl: NavController, public http: Http) {
    this.isInit = false;
    this.init();
  }

  public init():void{
    this.isInit = false;
    this.loadDatas();
  }

  public loadDatas():void{
    this.houses = new Array<any>();
    let url = 'https://www.anapioficeandfire.com/api/houses?page='+this.apiPageNum.toString()+'&pageSize=10';
    this.http.get(url).subscribe(data => {

      // res => console.log('helo', res.text())
      let parsedData = JSON.parse(data.text());
      for(let i=0; i < parsedData.length; i++){
        this.houses.push(parsedData[i]);
      }
      //console.log(this.houses);
      this.isInit = true;
    },
    err => {
        console.log(err);
    }   );
  }

  public loadPageHouse(houseDatas:any):void{
    this.navCtrl.push(HousePage,{
        houseDatas:houseDatas
      });
  }


  public nextPage():void{
    if(this.apiPageNum){
      this.apiPageNum = this.apiPageNum + 1;
      this.isInit = false;
      this.loadDatas();
    }
  }

  public previousPage():void{
    if(this.apiPageNum){
      if(this.apiPageNum > 1){
        this.apiPageNum = this.apiPageNum - 1;
        this.isInit = false;
        this.loadDatas();
      }
    }
  }
}
