import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserAuthDataService } from '../userData/user-auth-data.service';
import {Router} from '@angular/router'
@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
constructor(private userAuthDataService: UserAuthDataService, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    router: RouterStateSnapshot
  ): boolean | Promise<boolean> | any {

      if ( this.userAuthDataService.getToken()){
          return true;
      }else {
          return this.router.createUrlTree(['/login'])
      }

  }
}
