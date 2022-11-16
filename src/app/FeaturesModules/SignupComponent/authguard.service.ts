import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

export class AuthGuard implements CanActivate{
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const value=this.auth.isLoggedin.subscribe( val=>{
            return val
         }) 
         console.log(value , 'inside authGruard')
    
        return value? true : this.router.navigate(['login']) 
    }
    constructor(private auth: AuthService , private router : Router){

    }
}