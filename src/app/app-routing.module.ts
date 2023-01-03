import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { CreateSharedAccountComponent } from './create-shared-account/create-shared-account.component';
import { CreateNewTransactionComponent } from './transactions/create-new-transaction/create-new-transaction.component';

const routes: Routes = [
  { path: '', component: CreateNewTransactionComponent },
  { path: '**', component: SignInComponent },
  { path: 'auth', component: SignInComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
