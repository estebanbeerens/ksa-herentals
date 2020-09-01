import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';

@Component({
  selector: 'ksa-core-messenger',
  templateUrl: './core-messenger.component.html',
  styleUrls: ['./core-messenger.component.scss']
})
export class CoreMessengerComponent implements OnInit {

  constructor(private facebookService: FacebookService) { }

  ngOnInit(): void {
    const initParams: InitParams = { xfbml:true, version:'v3.2', appId: '2554931211426275' };
    this.facebookService.init(initParams);
  }

}
