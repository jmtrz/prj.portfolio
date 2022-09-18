import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  
  ContactImage : string = 'assets/dev.png';
  email : string = "assets/email.png";
  AboutMe = "assets/design_thinking.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
