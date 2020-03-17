import { Component, OnInit } from '@angular/core';
import { Photo } from '../models/photo';
import { PhotosService } from '../services/photos.service';
import { Theme } from '../models/theme';
import { Format } from '../models/format';
import { Orientation } from '../models/orientation';
import { FiltersService } from '../services/filters.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.sass']
})
export class CatalogueComponent implements OnInit {
  photos: Photo[] = [];
  themes: Theme[] = [];
  formats: Format[] = [];
  orientations: Orientation[] = [];

  constructor(private _photoService: PhotosService, private _filterService: FiltersService) { }

  ngOnInit(): void {
    this._photoService.getAllPhotos().subscribe((data: Photo[]) => {
      this.photos = data;
    });

    this._filterService.getThemes().subscribe((data: Theme[]) => {
      this.themes = data;
    });
  }

}
