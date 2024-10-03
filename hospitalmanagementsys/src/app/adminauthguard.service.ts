import { Injectable } from '@angular/core';
import { AdminauthService } from './adminauth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminauthguardService {

  constructor(private adminAuthService:AdminauthService,private router:Router) { }

  canActivate() {
    
      if(this.adminAuthService.isUserLoggedIn()){

          return true;
      }
      else{
          this.router.navigate(['adlogin'])
          return false;
      }
        
  }
}