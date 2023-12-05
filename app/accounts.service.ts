import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor() { }

  accounts=[
    {
     name:'Master Account',
     status:'active'
    },
    {
     name:'Test Account',
     status:'inactive'
    },
    {
     name:'Hidden Account',
     status:'unknown'
    }
   ];

   addAccount(AccName:string, accStatus:string)
   {
    console.log("with in account Service =====> Add Account Method");
    this.accounts.push({name:AccName,status:accStatus});
    console.log("New Account is created " + AccName);
   }

   updateStatus (id:number,newstatus:string)
   {
    console.log("Within account Service update in account method");
    this.accounts[id].status=newstatus
    console.log ("Account status is changed and new account is " + newstatus);
   }
}
