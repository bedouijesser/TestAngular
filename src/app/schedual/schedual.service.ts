import { Course } from "./course.model";
import { Injectable } from "@angular/core";
@Injectable()
export class SchedualService {

     // Creating a new Seance instance 
     public CourseArrMon = [
        new Course("Anglais", "Cour", "8:30", "9:15", "A10"),
        new Course("Anglais", "TD", "9:15", "10:00", "A10"),
        new Course("Methodologie de conception", "Cour", "10:10", "10:55", "B5"),
        new Course("Methodologie de conception", "TD", "10:55", "11:40", "B5")
      ];
      public CourseArrTue = [
        new Course("Maillage 2D/3D et visualisation", "Cour", "8:30", "10:00", "B8"),
        new Course("Maillage 2D/3D et visualisation", "TP", "10:10", "11:40", "B8"),
        new Course("Developpement d'applications web", "TP", "11:50", "13:20", "B6"),
        new Course("Developpement d'applications web", "TD", "14:00", "15:30", "B6")
      ];
      public CourseArrWed = [
        new Course("Mini-projet multimédia II", "TP", "8:30", "10:00", "B6"),
        new Course("Mini-projet multimédia II (1/15)", "TD", "10:10", "11:40", "B6"),
        new Course("SGBD (oracle) (1/15)", "TP", "10:10", "11:40", "B6"),
        new Course("SGBD (oracle)", "Cour", "11:50", "13:20", "B7"),
        new Course("Francais", "TD", "14:00", "14:45", "C7"),
        new Course("Francais", "Cour", "14:45", "15:30", "C7"),
      ];
      public CourseArrThu = [
        new Course("Concepts de base des réseaux", "Cour", "8:30", "10:00", "B8"),
        new Course("Concepts de base des réseaux (1/15)", "TD", "10:00", "11:45", "B8"),
        new Course("Securité informatique", "Cour", "11:50", "13:20", "B9"),
        new Course("Intégration et conception multimédia", "Cour", "14:00", "15:30", "B8"),
        new Course("Intégration et conception multimédia", "TP", "15:30", "17:00", "B8"),
      ];
      public CourseArrFri = [
        new Course("Acoustique et traitement de son", "TP", "8:30", "10:00", "B6"),
        new Course("Acoustique et traitement de son (1/15)", "Cour", "10:10", "11:45", "B6"),
        new Course("Methodologie de conception", "TP", "11:50", "13:20", "B6"),
        new Course("Culture de l'entreprise", "Cour", "14:00", "14:45", "B2"),
        new Course("Culture de l'entreprise", "TD", "14:45", "15:30", "A1"),
        new Course("JEE", "Cour", "15:45", "16:30", "B6"),
        new Course("JEE", "TP", "16:30", "17:15", "B6"),
      ];
      public CourseArrSat = [
        new Course("Acoustique et traitement de son", "TP", "8:30", "10:00", "B6"),
        new Course("Acoustique et traitement de son (1/15)", "Cour", "10:10", "11:45", "B6"),
      ]
}