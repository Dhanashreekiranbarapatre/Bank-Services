import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accountupdate',
  templateUrl: './accountupdate.component.html',
  styleUrls: ['./accountupdate.component.css']
})
export class AccountupdateComponent  {
constructor(private accService:AccountsService)
{

}
  @Input() account:any="";
  @Input()id:number=0;
  //@Output() statusChanged=new EventEmitter<{id:number,newStatus:string}>();

  onSetTo(status:string)
  {
    //this.statusChanged.emit({id: this.id,newStatus:status});
    console.log('Calling Account Service:' +status);
    this.accService.updateStatus(this.id,status)
  }



  // //@Input() account: {name: string, status: string};
  // @Input() account: any="";
  // @Input() id: number=0;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();


  // onSetTo(status: string) {
  //   this.statusChanged.emit({id: this.id, newStatus: status});
  //   console.log('Account status changed, new status: ' + status);
  // }


}
