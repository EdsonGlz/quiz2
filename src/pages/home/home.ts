import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegistroPage } from '../registro/registro';
import { MostarPage } from '../mostar/mostar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  registrar = RegistroPage;
  mostrar = MostarPage;
  email="";
  password="";
  contactos= [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  

  clickRegistro(){
    this.navCtrl.push(this.registrar,  {contactos: this.contactos});
  }

  clickMostrar(){
    this.navCtrl.push(this.mostrar,  {contactos: this.contactos});
  }

}
