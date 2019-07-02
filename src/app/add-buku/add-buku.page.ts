import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastController, NavController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-buku',
  templateUrl: './add-buku.page.html',
  styleUrls: ['./add-buku.page.scss'],
})
export class AddBukuPage implements OnInit {

  id: string
  kode: string; judul: string; kdpeng: string
  kdpen: string; kdkategori: string; hal: string
  edisi: string; isbn: string; tmpt: string
  thn: string
  cover: any; old_foto: any; img1: any;
  penerbit:any
  pengarang:any
  kategori:any
  data: any
  newTrustFormVisible: boolean = false

  constructor(
    public http:HttpClient,
    public navCtrl: NavController,
    public toast: ToastController,
    public route: ActivatedRoute
  ) {
    this.img1 = "assets/images/upload.jpg";
    this.data = JSON.parse(this.route.snapshot.paramMap.get("data"));

    if(this.data !=null) {
      this.id = this.data.id
      this.kode = this.data.kd_buku
      this.judul = this.data.judul
      this.kdpeng = this.data.kd_pengarang
      this.kdpen = this.data.kd_penerbit
      this.kdkategori = this.data.kd_kategori
      this.hal = this.data.halaman
      this.edisi = this.data.edisi
      this.isbn = this.data.ISBN
      this.tmpt = this.data.tempat_terbit
      this.thn = this.data.tahun_terbit
      this.img1 = "http://perpustakaan.idwebbuilder.com/sampul/" + this.data.cover
      this.old_foto = this.data.cover
    }
   }

   //Untuk ion-select
   compareWithfn = (o1, o2) => {
     return o1 == o2;
   };
   compareWith = this.compareWithfn

  ngOnInit() {
    this.Viewdt_pengarang()
    this.Viewdt_penerbit()
    this.Viewdt_kategori()
  }

  Viewdt_pengarang(){
    this.http.get("http://perpustakaan.idwebbuilder.com/api/mobile/pengarang").subscribe(
      dt=>{
        this.pengarang = dt;
        console.log(dt)
      }
    );
  }

  Viewdt_penerbit(){
    this.http.get("http://perpustakaan.idwebbuilder.com/api/mobile/penerbit").subscribe(
      dt=>{
        this.penerbit = dt;
        console.log(dt)
      }
    );
  }

  Viewdt_kategori(){
    this.http.get("http://perpustakaan.idwebbuilder.com/api/mobile/kategori").subscribe(
      dt=>{
        this.kategori = dt;
        console.log(dt)
      }
    );
  }

  simpan(){
    let head: any
    head = new HttpHeaders();
    head.append('Accept', 'application/json');
    head.append('Content-Type', 'application/json');
    head.append('Content-Type', 'multipart/form-data');

    let frmBuku = new FormData();
    frmBuku.append('kode', this.kode);
    frmBuku.append('judul', this.judul);
    frmBuku.append('kdpeng', this.kdpeng);
    frmBuku.append('kdpen', this.kdpen);
    frmBuku.append('kdkateg', this.kdkategori);
    frmBuku.append('hal', this.hal);
    frmBuku.append('edisi', this.edisi);
    frmBuku.append('isbn', this.isbn);
    frmBuku.append('tmpt', this.tmpt);
    frmBuku.append('thn', this.thn);
    frmBuku.append('cover', this.file);
    frmBuku.append('old_foto', this.old_foto);

    if(this.data != null){
      //EDIT
      frmBuku.append('id', this.data.id);
    }

    this.http.post("http://perpustakaan.idwebbuilder.com/api/mobile/savebuku", frmBuku, head).subscribe(data => {
      console.log(data)
      this.notif(data['msg']);
    }, err => {
      console.log(err)
      this.notif(err['msg']);
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

  file: File;
  getImage($gambar){
    this.file = $gambar.target.files[0];
    console.log(this.file)

    if(this.file){
      let reader = new FileReader()
      reader.onload = (event:any) => {
        this.img1 = event.target.result
      }
      reader.readAsDataURL(this.file)
    }
  }
}
