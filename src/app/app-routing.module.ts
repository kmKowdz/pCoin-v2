import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import the blockchain viewer component
import { BlockchainViewerComponent } from './pages/blockchain-viewer/blockchain-viewer.component';

const routes: Routes = [
  { path: '', component: BlockchainViewerComponent } //add path where the component will be located
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }