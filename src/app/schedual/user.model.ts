// Create Personne, Admin, Prof, Student classes

import { Course } from './course.model';

// main parent class 
class Person {
    
    // Attributes
    constructor (public id,public name) {}
    
}
// class de l'admin
export class Admin extends Person {
    
    // Attributes
    constructor (id, name, public merit) {
        super(id, name);
        }
 
   
}
// class de l'enseignant
export class Prof extends Person {
    
    // Attributes
    constructor (id, name,public courses: Course[],public title) {
        super(id,name);
    }
    
}
// class de l'etudiant
export class Student extends Person {
    
    // Attributes
    constructor (id, name,private group) {
        super(id, name);
    }
 

}