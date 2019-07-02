import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-buku',
  templateUrl: './detail-buku.page.html',
  styleUrls: ['./detail-buku.page.scss'],
})
export class DetailBukuPage implements OnInit {

  public data: any

  constructor(
    public navCtrl : NavController,
    public route : ActivatedRoute
  ) { 
    this.data = JSON.parse(this.route.snapshot.paramMap.get("data"));
    console.log(this.data)
   }

  ngOnInit() {
  }

}
