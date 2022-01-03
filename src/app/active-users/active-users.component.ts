import {Component, OnInit} from '@angular/core';
import {UsersService} from '../service/UsersService';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

  constructor(private userService: UsersService) { }

  onSetToInactive(id: number) {
    this.userService.setToInactive(id);
  }

  ngOnInit(): void {
    this.users = this.userService.activeUsers;
  }
}
