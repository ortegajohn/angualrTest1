// import { Component, OnInit } from '@angular/core';
import { Component, AfterViewInit } from '@angular/core';
declare const TradingView: any;
@Component({
  selector: 'app-tradingview',
  templateUrl: './tradingview.component.html',
  styleUrls: ['./tradingview.component.scss']
})



// export class TradingviewComponent implements OnInit {
  export class TradingviewComponent implements AfterViewInit  {

  constructor() { }

  // ngOnInit() {
    ngAfterViewInit() {
    new TradingView.widget({
      // 'container_id': 'technical-analysis',
      // 'autosize': true,
      // 'symbol': "GDX",
      // 'interval': '120',
      // 'timezone': 'exchange',
      // 'theme': 'Dark',
      // 'style': '1',
      // 'toolbar_bg': '#f1f3f6',
      // 'withdateranges': true,
      // 'hide_side_toolbar': false,
      // 'allow_symbol_change': true,
      // 'save_image': false,
      // 'hideideas': true,
      // 'studies': [ 
      // 'MASimple@tv-basicstudies' ],
      // 'show_popup_button': true,
      // 'popup_width': '1000',
      // 'popup_height': '650'
      "width": 980,
    "height": 610,
    "symbol": "NASDAQ:AAPL",
    "interval": "D",
    "timezone": "Etc/UTC",
    "theme": "Light",
    "style": "1",
    "locale": "en",
    "toolbar_bg": "#f1f3f6",
    "enable_publishing": false,
    "allow_symbol_change": true,
    "container_id": "tradingview_588c7"
    });
  }

}
