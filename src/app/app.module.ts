import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { SchedualComponent } from './schedual/schedual.component';
import { ProfileComponent } from './profile/profile.component';
import { NewsComponent } from './news/news.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { ContactComponent } from './contact/contact.component';
import { SchedualService } from './schedual/schedual.service';
import { CourseItemComponent } from './schedual/course-item/course-item.component';
import { ChatroomMsgComponent } from './chatroom/chatroom-msg/chatroom-msg.component';
import { NewsItemComponent } from './news/news-item/news-item.component';
import { ContactItemComponent } from './contact/contact-item/contact-item.component';

@NgModule({

  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    AuthComponent,
    ProfileComponent,
    SchedualComponent,
    CourseItemComponent,
    NewsComponent,
    NewsItemComponent,
    ChatroomComponent,
    ChatroomMsgComponent,
    ContactComponent,
    ContactItemComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    
  ],
  providers: [SchedualService],
  bootstrap: [AppComponent]
})
export class AppModule { }
