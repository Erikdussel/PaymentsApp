import { Component } from '@angular/core';
import { IonicPage, NavParams, ModalController } from 'ionic-angular';
//import { GeneratedQrPage } from '../generated-qr/generated-qr';

/**
 * Generated class for the QrCodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qr-code',
  templateUrl: 'qr-code.html',
})
export class QrCodePage {

  constructor(public navParams: NavParams, private modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrCodePage');
  }

 createLink() {
 	const modal = this.modalCtrl.create('GeneratedQrPage');
 	modal.present();
 }
}