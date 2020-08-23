import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  
  // ImagePath : string = 'https://s3.amazonaws.com/StartupStockPhotos/uploads/26.jpg';
  ImagePath : string = './assets/vr.jpg';
  ContactImage : string = '/assets/dev.png';
  email : string = "/assets/email.png";
  
  constructor() { }

  ngOnInit(): void {
  }

}
