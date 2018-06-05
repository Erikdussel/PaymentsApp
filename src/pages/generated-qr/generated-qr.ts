import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the GeneratedQrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-generated-qr',
  templateUrl: 'generated-qr.html',
})
export class GeneratedQrPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController) {
  }


  close() 
  {
  	this.view.dismiss();
  }

}
