import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home'; 
/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  home=HomePage;
  contactos=[];
  email="";
  password="";


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController ) {
  
  this.contactos = this.navParams.get("contactos");
  }


  clickAgregar()
  {
    if(this.email.length> 0)
    {
      this.contactos.push({email: this.email, password: this.password,});
      this.navCtrl.push(this.home,this.contactos);
      console.log("email");
      console.log("password");
    }
    else
    {
      const alert = this.alertCtrl.create({
        title: 'Oops!',
        subTitle: 'El nombre está vacío',
        buttons:['Ok']
      });
      alert.present();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

}
