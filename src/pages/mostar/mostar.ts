import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MostarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mostar',
  templateUrl: 'mostar.html',
})
export class MostarPage {

  contactos=[];
  email="";;
  password="";


  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.contactos = this.navParams.get("contactos");

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MostarPage');
  }

}
