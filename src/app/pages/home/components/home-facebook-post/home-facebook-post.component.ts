import { Component, Input, OnInit } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';

@Component({
  selector: 'ksa-home-facebook-post',
  templateUrl: './home-facebook-post.component.html',
  styleUrls: ['./home-facebook-post.component.scss']
})
export class HomeFacebookPostComponent implements OnInit {

  @Input() postId: string;

  constructor(private facebookService: FacebookService) { }

  ngOnInit(): void {
    const initParams: InitParams = { xfbml:true, version:'v3.2', appId: '2554931211426275' };
    this.facebookService.init(initParams);
  }
  
}
