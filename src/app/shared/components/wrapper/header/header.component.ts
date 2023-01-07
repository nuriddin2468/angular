import { Component, OnInit } from '@angular/core';
import { User } from '@shared/types/user';
import { AuthService } from '@shared/services/auth.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: User;
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.getUserInfo()
      .pipe(untilDestroyed(this)).subscribe(user => this.user = user);
  }

  logout(): void {
    this.authService.logout();
  }

}
