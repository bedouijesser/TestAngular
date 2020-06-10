import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
    user: User = {
		userId: 1,
		username: 'Test-user',
		profileImg: '../../assets/iconfinder_maturewoman_628297.svg',
		accountType: 'Student',
		groupe: 'G1' 
    }
}