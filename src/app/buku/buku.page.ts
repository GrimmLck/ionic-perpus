import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-buku',
  templateUrl: './buku.page.html',
  styleUrls: ['./buku.page.scss'],
})
export class BukuPage implements OnInit {

  public buku:any;
  cari:boolean=false
  datafiltered:any

  constructor(
    public http:HttpClient,
    public navCtrl: NavController,
    public toast: ToastController
  ) { 
    this.buku = []
    this.datafiltered = []
   }

  ngOnInit() {
    this.ViewData();
  }

  ViewData(){
    this.http.get("http://perpustakaan.idwebbuilder.com/api/mobile/listbuku").subscribe(
      dt=>{
        this.buku = dt;
        this.datafiltered = dt
        console.log(dt);
      }
    );
  }

  detailbuku(bk){
    console.log(bk);
    this.navCtrl.navigateBack('/detail-buku/'+JSON.stringify(bk))
  }

  showCari(){
    if(this.cari)
      this.cari=false
    else
      this.cari=true
  }

  caribuk(databuku){
    this.datafiltered = this.buku.filter(rs=>{
      return rs.judul.toLowerCase().indexOf(databuku.target.value.toLowerCase()) > -1;
    })
  }

  addbuku(){
    this.navCtrl.navigateRoot('add-buku')
  }

  deleteData(id){
    this.http.get("http://perpustakaan.idwebbuilder.com/api/mobile/delbuku/"+id).subscribe(res=>{
      console.log(res);
        if(res['type']=="success"){
          this.ViewData()
          this.notif(res['msg']);
        } else{
          this.notif(res['msg']);
        }
    })
  }

  async notif(msg){
    const toast = await this.toast.create({
      message: msg,
      showCloseButton: false,
      position: 'bottom',
      duration: 1000
    });
    toast.present();
    toast.onDidDismiss().then(() => {
      this.navCtrl.back();
    })

  }

  editData(item){
    this.navCtrl.navigateRoot('add-buku/'+JSON.stringify(item));
    console.log(item)
  }
}
