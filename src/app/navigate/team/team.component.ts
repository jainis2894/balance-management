import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/shared/User.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
   userList!: User[];
   selectedUser!:User;

  constructor(private authService:AuthService ) { }

  ngOnInit(): void {
    this.authService.getUserDetails().subscribe(response=>{
      this.userList=response;
      console.log("userList", this.userList);
    });
  }

  onSelectUser(item:User){
   this.selectedUser=item;
  }

}
