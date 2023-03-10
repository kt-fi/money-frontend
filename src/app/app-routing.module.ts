import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { CreateSharedAccountComponent } from './create-shared-account/create-shared-account.component';
import { HomeComponent } from './home/home.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { CreateNewTransactionComponent } from './transactions/create-new-transaction/create-new-transaction.component';

const routes: Routes = [

  { path: 'auth', component: SignInComponent },
  { path: 'home', component: HomeComponent },
  { path: 'newSharedAccount/:userId', component: CreateSharedAccountComponent },
  { path: 'sharedAccount/:userId/:accountId', component: CreateNewTransactionComponent },
  { path: 'notifications/:userId', component: NotificationsComponent },
  { path: '', component: SignInComponent },
  { path: '**', component: SignInComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
