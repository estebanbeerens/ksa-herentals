import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';

@Component({
  selector: 'gg-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.scss']
})
export class HomeMainComponent implements OnInit {

  constructor(private facebookService: FacebookService) { }

  ngOnInit(): void {
    const initParams: InitParams = { xfbml:true, version:'v3.2', appId: '2554931211426275' };
    this.facebookService.init(initParams);
    this.facebookService.api('/1419277798290637/feed').then(
      (response) => console.log(response)
    );
  }

}
