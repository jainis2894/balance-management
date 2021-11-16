import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/User.model';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  userData!: User;
  input: string = '';
  selectedAlert: string[]=[];
  alerts: any[] = [
    { description: 'SMS Alert', value: 'SMS Alert' },
    { description: 'Marketting Newsletter', value: 'Marketting newsLetter' },
    { description: 'Flyers', value: 'Flyers' },
  ];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.userDetails.subscribe((response) => {
      console.log('res', response);
      if (response) {
        this.userData = response;
        this.userData.last_login = new Date();
      }
    });
  }

  onCheckChange(event: any) {
    this.selectedAlert.push(event);
  }
  onClickAlert() {
    if(this.selectedAlert){
      alert(this.selectedAlert + '  subscription activated!');
    }else{
      alert("Please select atleast one alert!!");
    }
  }
}
