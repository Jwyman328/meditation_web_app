import { Component, OnInit, Input } from '@angular/core';
import { UserAuthDataService } from '../../../services/userData/user-auth-data.service';

@Component({
  selector: 'app-main-nav-bar',
  templateUrl: './main-nav-bar.component.html',
  styleUrls: ['./main-nav-bar.component.scss'],
})
export class MainNavBarComponent implements OnInit {
  @Input('isMeditationContainer') isMeditationContainer = false;
  constructor(private userAuthDataService: UserAuthDataService) {}

  ngOnInit(): void {}
  handleLogout() {
    this.userAuthDataService.logOutUser();
  }
}
