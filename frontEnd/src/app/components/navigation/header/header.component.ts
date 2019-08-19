import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { UserService } from '../../../shared/user.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  
  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }

}
