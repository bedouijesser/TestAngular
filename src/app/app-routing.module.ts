import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component'
import { AuthComponent } from './auth/auth.component';
import { SchedualComponent } from './schedual/schedual.component';
import { ProfileComponent } from './profile/profile.component';
import { NewsComponent } from './news/news.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/auth', pathMatch: 'full' },
    { path: 'console', component: LandingPageComponent},  
    { path :'auth', component: AuthComponent},
    { path :'schedual', component: SchedualComponent },
    { path :'profile', component: ProfileComponent },
    { path :'news', component: NewsComponent },
    { path :'chatroom', component: ChatroomComponent },
    { path :'contact', component: ContactComponent }
]
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })
  
  export class AppRoutingModule {}