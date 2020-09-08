import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import the blockchain viewer component
import { BlockchainViewerComponent } from './pages/blockchain-viewer/blockchain-viewer.component';
//import settings component
import { SettingsComponent } from './pages/settings/settings.component';
//import create transaction component
import { CreateTransactionComponent } from './pages/create-transaction/create-transaction.component';

const routes: Routes = [
  { path: '', component: BlockchainViewerComponent }, //add path where the component will be located
  { path: 'settings', component: SettingsComponent }, //add path to where the settings component will be found
  { path: 'new/transaction', component: CreateTransactionComponent } //add path to where the create transaction component will be located
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }