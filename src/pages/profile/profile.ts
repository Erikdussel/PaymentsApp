import { Component, ViewChild } from '@angular/core';
import { IonicPage, ModalController, Content } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  @ViewChild(Content) content: Content;

  scrollToBottom() {
  	this.content.scrollToBottom();
  }
  constructor(private modal: ModalController) {
  }

  ionViewDidLoad() {
    var el = document.getElementById("payment-methods-container");
    el.style.display = "none";
  }

  editProfile() {
  	const profile = this.modal.create('EditprofilePage')
  	profile.present();
  }

  togglePayments() {
  	var el = document.getElementById("payment-methods-container");

  	if (el.style.display === "none") {
  		el.style.display = "block";
  		console.log('changed to visible');
  		this.content.scrollToBottom();
  	}
  	else {
  		el.style.display = "none";
  		console.log('changed to invisible');
  	}
  }

  editPayments() {
  	const payments = this.modal.create('EditpaymentsPage');
  	payments.present();
  }

}
