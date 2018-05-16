import { Injectable } from '@angular/core';
import { Profile } from '../model/profile';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ProfilesService {
  readonly profiles = [
    new Profile( 1, '1'),
    new Profile( 2, '2'),
    new Profile( 3, '3'),
  ];

  constructor() { }

  getProfiles() {
    return of(this.profiles);
  }

  getProfile(id: number | string) {
    return this.getProfiles().pipe(
      map(profiles => profiles.find(profile => profile.userId === +id))
    );
  }
}