// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({providedIn: 'root'})
export class AuthGuard {
	
	constructor(private authService: AuthService) {}
	
	
} 