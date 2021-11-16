import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reusable-component',
  templateUrl: './reusable-component.component.html',
  styleUrls: ['./reusable-component.component.css'],
})
export class ReusableComponentComponent implements OnInit {
  @Input('data') data: any;
  constructor() {}

  ngOnInit(): void {}

  onClickAlert(){
    if(this.data.id=="mail"){
      alert("mail has been sent to you.");
    }else{
      alert(" We will connect with you shortly");
    }
    return;
  }
}
