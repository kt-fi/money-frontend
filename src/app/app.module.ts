import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingPageComponent } from './loading-page/loading-page.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CreateSharedAccountComponent } from './create-shared-account/create-shared-account.component';
import { CreateNewTransactionComponent } from './transactions/create-new-transaction/create-new-transaction.component';
import { HeaderComponent } from './header/header.component';
import { TransactionCardSmComponent } from './transactions/transaction-card-sm/transaction-card-sm.component';
import { RemoveNegativePipe } from './remove-negative.pipe';



@NgModule({
  declarations: [
    AppComponent,
    LoadingPageComponent,
    SignInComponent,
    CreateSharedAccountComponent,
    CreateNewTransactionComponent,
    HeaderComponent,
    TransactionCardSmComponent,
    RemoveNegativePipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
