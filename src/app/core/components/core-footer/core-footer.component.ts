import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ksa-core-footer',
  templateUrl: './core-footer.component.html',
  styleUrls: ['./core-footer.component.scss']
})
export class CoreFooterComponent {
  copyrightDate : Date = new Date();

  constructor() { }
}
