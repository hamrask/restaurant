import { Component, OnInit } from '@angular/core';
import { UserManagementService } from '../shared/services/user-management.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private auth: UserManagementService) { }

  ngOnInit(): void {
  }
  logout() {
    this.auth.logout();
  }
imageUrl="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg"
}
