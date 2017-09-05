import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  options = ['Angular','react','Vue','Ember'];
  selected = 2;
  settings;
  displayed;
  constructor(){
    this.settings =  {
      output:'value',
      isDatalist: false,      
      caretClass: 'icon-dropdown'
    }
  }
  changeValue(index){
    this.displayed = index;
  }
}
