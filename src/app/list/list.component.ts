import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

  name: string = '';
  brews: Object;

  constructor(private _http: HttpService) { }

  countClick(){
    console.log("A")
    this._http.getBeer("VGR").subscribe(res => {
      // this.brews = res
      this.brews = [res["data"][0]];
      console.log( this.brews );
      // console.log( "Object.keys(this.brews): ",Object.keys(this.brews["data"]) );
    });
  }

  ngOnInit() {
    // this._http.myMethod();
    this._http.getBeer("GDX").subscribe(res => {
      // this.brews = res
      this.brews = [res["data"][0]];
      console.log( this.brews );
      // console.log( "Object.keys(this.brews): ",Object.keys(this.brews["data"]) );
    });
  }

}
