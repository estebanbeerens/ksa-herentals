import { Component, OnInit } from '@angular/core';
import { ROUTES, RouteInfo } from '../../routes/route-info';
import { Router } from '@angular/router';

@Component({
  selector: 'ksa-core-navbar',
  templateUrl: './core-navbar.component.html',
  styleUrls: ['./core-navbar.component.scss']
})
export class CoreNavbarComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  public navLinks: RouteInfo[];

  ngOnInit(): void {
    this.navLinks = ROUTES.filter(navLink => navLink);
  }

  goToHome() {
    this.router.navigate(['/']);
  }

  goToLink(url: string){
    window.open(url, "_blank");
  }
}
