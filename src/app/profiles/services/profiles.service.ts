import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../model/profile';
import { Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable()
export class ProfilesService {
  private dataUrl = 'https://zware-ngnewapi.azurewebsites.net/api/patrick.zheng.it_at_gmail.com/profiles';

  constructor(private http: HttpClient) { }

  getProfiles (): Observable<Profile[]> {
    return this.http.get<Profile[]>(this.dataUrl)
      .pipe(
        tap(profiles => console.log(profiles))
      );
  }

  addProfile (profile: Profile): Observable<Profile> {
    return this.http.post<Profile>(this.dataUrl, profile).pipe(
      tap( data => console.log(data))
    );
  }
}
