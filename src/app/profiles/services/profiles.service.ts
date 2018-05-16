import { Injectable } from '@angular/core';
import { Profile } from '../model/profile';
import { of } from 'rxjs';

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

}