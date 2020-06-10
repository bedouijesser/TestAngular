// class Subject

import { Prof } from './user.model';

export class Subject {
    
	constructor(public name: string,
				public coefMat: number,
				public hrPerWeek: number,
				public profArr: Prof[]){}
}
