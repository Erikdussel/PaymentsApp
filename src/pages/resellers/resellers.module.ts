import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResellersPage } from './resellers';

@NgModule({
  declarations: [
    ResellersPage,
  ],
  imports: [
    IonicPageModule.forChild(ResellersPage),
  ],
})
export class ResellersPageModule {}
