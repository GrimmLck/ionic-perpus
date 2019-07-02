import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastController, NavController, LoadingController, Events } from '@ionic/angular';

import { AppPageService } from '../app-page.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: any;
  pass: any;
  msg: any;

  constructor(
    public http: HttpClient,
    public toast: ToastController,
    public loading: LoadingController,
    public navCtrl: NavController,
    public events: Events,
    private app: AppPageService

  ) { }

  ngOnInit() {
    let profile = localStorage.getItem("profile");
    if(profile){
      this.navCtrl.navigateRoot("home");
    }
  }

  async login(){
    let head: any
    head = new HttpHeaders();
    head.append('Accept', 'application/json');
    head.append('Content-Type', 'application/json');

    let frm = new FormData();
    frm.append('email', this.email);
    frm.append('pass', this.pass);

    const load = this.loading.create({
      message: 'Please Wait!',
      spinner: 'crescent'
    });

    load.then(a=>{
      a.present();
    });

    await this.http.post("http://perpustakaan.idwebbuilder.com/api/mobile/login", frm, head).subscribe((res: any)=>{
      console.log(res);
      load.then(a=> {a.dismiss(); }); //MENGHILANGKAN LOADING

      //MELAKUKAN CEK BERHAIL ATAU TIDAK SAAT REGISTRASI
      if(res.type=="sukses"){
        //this.events.publish
        //MENYIMPAN DATA KE LOKAL SEHINGGA TIDAK LOGIN LAGI JIKA SUDAH LOGIN
        localStorage.setItem("profile", JSON.stringify(res.profile));
        this.app.appPages = [
          { title: 'Buku', url: '/buku', icon: 'book' },
          { title: 'KELUAR', url: '/logout', icon: 'power' }
        ];
        console.log('masuk')
        this.navCtrl.navigateRoot('home');
      } else {
        this.msg = res.msg;
      }
    },
    (error: any)=>{
      console.log(error)
      load.then(a=>{ a.dismiss() }); //MENGHILANGKAN LOADING
      this.msg = error.msg;
    })
  }

  async notif(msg){
    const toast = await this.toast.create({
      message : msg,
      showCloseButton : false,
      position : 'bottom',
      duration : 1700
    });
    toast.present();
    toast.onDidDismiss().then(() => {

    });
  }

}
