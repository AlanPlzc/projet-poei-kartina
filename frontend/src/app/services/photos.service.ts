import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from '../models/photo';


@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  private _bestphotoUrl = 'http://localhost:8080/api/photos/best';
  private _recentphotoUrl = 'http://localhost:8080/api/photos/recent';
  private _allPhotoUrl = 'http://localhost:8080/api/photos';
  private _photosByTheme = 'http://localhost:8080/api/photos/theme/';

  constructor(private _httpClient: HttpClient) { }

  GetBestPhotos(): Observable<Photo[]> {
    return this._httpClient.get<Photo[]>(this._bestphotoUrl);
  }
  GetRecentPhotos(): Observable<Photo[]> {
    return this._httpClient.get<Photo[]>(this._recentphotoUrl);
  }

  getAllPhotos(): Observable<Photo[]> {
    return this._httpClient.get<Photo[]>(this._allPhotoUrl);
  }

  getPhotosByTheme(themeId: number): Observable<Photo[]> {
    const path = `${this._photosByTheme}${themeId}`;
    return this._httpClient.get<Photo[]>(path);
  }

}
