import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";


@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate{
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const value=this.auth.isLoggedin.subscribe( val=>{
            return val
         }) 
         console.log(value , 'inside authGruard')
         var l =localStorage.getItem('loggedin')
         console.log(l , 'inside authGruard')
        if (l=='true'){
            return true
        }
        else{
            console.log('inside else')
            this.router.navigate(['login'])
            return false
    } 
    }
    constructor(private auth: AuthService , private router : Router){

    }
}