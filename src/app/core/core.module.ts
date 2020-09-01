import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreFooterComponent } from './components/core-footer/core-footer.component';
import { CoreNavbarComponent } from './components/core-navbar/core-navbar.component';
import { CoreMessengerComponent } from './components/core-messenger/core-messenger.component';
import { CoreSidenavComponent } from './components/core-sidenav/core-sidenav.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FacebookModule } from 'ngx-facebook';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CoreFooterComponent, CoreNavbarComponent, CoreMessengerComponent, CoreSidenavComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    FacebookModule.forRoot()
  ],
  exports: [CoreFooterComponent, CoreNavbarComponent, CoreMessengerComponent, CoreSidenavComponent]
})
export class CoreModule { }
