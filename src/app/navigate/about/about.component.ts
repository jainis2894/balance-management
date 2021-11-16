import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  contactDetails:any;
  emailDetails:any;
  constructor() { }

  ngOnInit(): void {
    this.contactDetails={
      id:"contact",
      type:"Contact Details",
      details:"+91-XXXXXXXXXX",
      info:"Click to get Call from us"
    }
    this.emailDetails={
      id:"mail",
      type:"E-mail Details",
      details:"xxxxx@gmail.com,xxxx@yahoo.com",
      info:"Click to get mail from us"
    }
  }

}
