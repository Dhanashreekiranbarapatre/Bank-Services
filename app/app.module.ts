import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccountcreateComponent } from './accountcreate/accountcreate.component';
import { AccountlistComponent } from './accountlist/accountlist.component';
import { AccountupdateComponent } from './accountupdate/accountupdate.component';
import { AccountsService } from './accounts.service';

@NgModule({
  declarations: [
    AppComponent,
    AccountcreateComponent,
    AccountlistComponent,
    AccountupdateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AccountsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
