import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { Profile } from '../model/profile';
import { ProfilesService } from '../services/profiles.service';

@Injectable()
export class ProfileDetailResolver implements Resolve<Profile> {
  constructor(private service: ProfilesService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Profile> {
    const id = route.paramMap.get('id');

    return this.service.getProfile(id).pipe(
      take(1),
      map(profile => {
        if (profile) {
          return profile;
        } else { // id not found
          this.router.navigate(['/profiles']);
          return null;
        }
      })
    );
  }
}

