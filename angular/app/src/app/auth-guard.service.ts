import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }
  canActivate(route:any, state: RouterStateSnapshot){

    return this.auth.user$.map((user: any) => {
      if (user) return true;
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      return false;
    });
  }
}
