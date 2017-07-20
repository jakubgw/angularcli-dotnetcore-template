import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

   private title = 'app works!';
   private values : Array<string>;

  constructor(private _httpService: Http) { }
  
   ngOnInit() {
      this._httpService.get('/api/values').subscribe(values => {
         this.values = values.json() as string[];
      });
   }
}
