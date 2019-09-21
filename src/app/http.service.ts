import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getBeer(ticker){
    return this.http.get("https://www.worldtradingdata.com/api/v1/stock?symbol="  +
    ticker+
    "&api_token=lIKhQVypBswwedWGj8P5cK6lkYekVwecEbUAO6lLGAYIZVoWcTRUZfSSC9Qa")
    // return this.http.get('https://api.openbrewerydb.org/breweries')
    // return console.log('hey, what is up!')

  }

  // myMethod(){
  //   return console.log('hey, what is up!')
  // }

}
