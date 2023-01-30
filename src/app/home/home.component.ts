import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedAccount } from '../shared-account';
import { SharedAccountService } from '../shared-account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userId: any;
  userAccounts: SharedAccount[] = [];

  errorMsg?: string;

  constructor(private sharedAccountService: SharedAccountService, private router: Router) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('moneyAccountUserId');
    this.sharedAccountService.getAllUserAccounts(this.userId).subscribe((data: SharedAccount[]) => {
      this.userAccounts = data;
    },(err:HttpErrorResponse)=>{
      this.errorMsg = "Error: Unable to get accounts list"
    })
  }


  onSelectAccount(accountId: string) {
    this.router.navigate([`sharedAccount/${this.userId}/${accountId}`])
  }

}
