import { Component, OnInit } from '@angular/core';
import { Photo } from '../models/photo';
import { PhotosService } from '../services/photos.service';
import { Artiste } from '../models/artiste';
import { Theme } from '../models/theme';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  photos : Array<Photo> = new Array<Photo>();

  /* artistes : Array<Artiste> = new Array<Artiste>(); */

  constructor(private _photoService : PhotosService, private router: Router) {
    this._photoService.GetRecentPhotos().subscribe((data) =>{
      this.photos = data;
      console.log(data);
  });

  }

  displayBest(){
    this._photoService.GetBestPhotos().subscribe((data) =>{
      this.photos = data;
      console.log(data);
  });}

  goToPage(pageName:string){
    this.router.navigate([pageName]);
  }

  goToTheme(id:number){
    this.router.navigate(['theme',id]);
  }

 /*  goToLowStock(){
    this.router.navigate(['lowstock']);
  } */



  ngOnInit(): void {


}
}
