import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  ngOnInit(): void {
    this.getRoles()
  }
  constructor(private apiService: ApiService) {}
  roles :any;
  getRoles() {
    this.apiService.signIn(this.roles).subscribe((res) => {
      console.log("roles", res)
      this.roles = res;
      console.log(this.roles)
    })
  }
}
