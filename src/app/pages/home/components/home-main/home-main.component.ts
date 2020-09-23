import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';

@Component({
  selector: 'gg-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.scss']
})
export class HomeMainComponent implements OnInit {

  postIds: string[] = [];

  constructor(private facebookService: FacebookService) { }

  ngOnInit(): void {
    const initParams: InitParams = { xfbml:true, version:'v3.2', appId: '2554931211426275' };
    this.facebookService.init(initParams);
    this.facebookService.api('/1419277798290637/feed', 'get', {
      access_token: 'EAAkTskdIWeMBAOmZA6m1QfWwAgtpNbf9KDpWSbZAKFZBS2YExEo9a4qv1eBQ1GZBclfpHoi3MUtDR9xC2hVwCK0pagMpsZBCdMKkcLAhgjjFWKSPDsTwZAAp3ha0bfp9r50QKlVPScuupZCcU68SpsVKZCzGSZCWtZBQ6QiBCd5ZBtGoWTrZADA3E4yAxkVI2BnOq6DZCFZCaxZBi16LQZDZD',
      limit: 6
    }).then(
      (response) => 
        response.data.forEach((post) => {
          this.postIds.push(post.id.split('_')[1]);
        })
    );
  }

}
