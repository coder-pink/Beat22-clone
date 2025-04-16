import { Routes } from '@angular/router';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { HomeComponent } from './pages/home/home.component';
import { SubscriptionsComponent } from './pages/subscriptions/subscriptions.component';
// import { AppComponent } from './app.component';

export const routes: Routes = [
    {path : 'beats', component : HomeComponent},
    { path: 'sign-in', component : SignInComponent },
    {path : 'subscriptions', component : SubscriptionsComponent},
    {path: '', redirectTo: 'beats', pathMatch: 'full'},
   
];
