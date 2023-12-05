import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accountcreate',
  templateUrl: './accountcreate.component.html',
  styleUrls: ['./accountcreate.component.css']
})
export class AccountcreateComponent implements OnInit {
  constructor(private accService:AccountsService){

  }

  //@Output() accountAdded=new EventEmitter<{name:string,status:string}>();
  onCreateAccount(accountName:string,accountStatus:string)
  {
    // this.accountAdded.emit(
    //   {
    //     name:accountName,status:accountStatus
    //   }
    // );

    console.log('Calling Account Service for ' +accountName);
    this.accService.addAccount(accountName,accountStatus);
  }
  ngOnInit(): void {
    
  }

  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  // onCreateAccount(accountName: string, accountStatus: string) {
  //   this.accountAdded.emit({
  //     name: accountName,
  //     status: accountStatus
  //   });
  //   console.log('New Account is Created , Account Name: ' + accountName);
  // }

  // ngOnInit(): void {
      
  // }


}
