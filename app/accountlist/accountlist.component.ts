import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';



@Component({
  selector: 'app-accountlist',
  templateUrl: './accountlist.component.html',
  styleUrls: ['./accountlist.component.css']
})
export class AccountlistComponent implements OnInit {

  constructor(private accservice:AccountsService) {}
  accounts : {name:string,status:string}[]=[];

  
// onAccountAdded(newAccount:{name:string,status:string})
// {
//   console.log('Calling the Account Service Method');
//   this.accounts
  
// }
// // onStatusChanged(updateInfo:{id:number,newStatus:string})
// {
//   console.log('Emitted the status ChangedEvent to List Component');
//   this.accounts[updateInfo.id].status=updateInfo.newStatus;
// }


ngOnInit(): void {
  console.log("Account list Component on in it");
  this.accounts=this.accservice.accounts;
}
}

  // accounts = [
  //   {
  //     name: 'Master Account',
  //     status: 'active'
  //   },
  //   {
  //     name: 'Testaccount',
  //     status: 'inactive'
  //   },
  //   {
  //     name: 'Hidden Account',
  //     status: 'unknown'
  //   }
  // ];

  // onAccountAdded(newAccount: {name: string, status: string}) {
  //   console.log('Emitted the Account Create Event to List Component');
  //   this.accounts.push(newAccount);
  // }

  // onStatusChanged(updateInfo: {id: number, newStatus: string}) {
  //   console.log('Emitted the Status ChangeEvent to List Component');
  //   this.accounts[updateInfo.id].status = updateInfo.newStatus;
  // }

  // ngOnInit(): void {
      
  // }

