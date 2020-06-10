import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  contacts:{
    userName: string,
    userPhone: number,
    userMail: string
  }[]= [
    {userName: 'Mr X', userPhone:13579246, userMail:'t@mailsRus.com'},
    {userName: 'Mr Y', userPhone:13579246, userMail:'y@mailsRus.com'},
    {userName: 'Mr Z', userPhone:13579246, userMail:'z@mailsRus.com'},
    {userName: 'Mr Fibonacci', userPhone: 112358132134 , userMail:'LeonardoBigolloPisano@Italia.com'},
    {userName: 'Mr Node', userPhone:10110111, userMail:'node@express.com'},
  ]  

  constructor() { }

  ngOnInit(): void {
  }

}
