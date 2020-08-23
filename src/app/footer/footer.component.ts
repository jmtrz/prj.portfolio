import { Component, OnInit } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  myDate = new Date();
  FooterIcon = false;

  constructor() {
     if(window.screen.width <= 600){
        this.FooterIcon = true;
     }
   }

  ngOnInit(): void {
  }

}
