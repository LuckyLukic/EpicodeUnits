import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  //per i forms
import { RouterModule, Route } from '@angular/router';  //per routing
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'  //per chiamate http
import { ReactiveFormsModule } from '@angular/forms'; //per gestire i reactive forms
import { AuthGuardGuard } from './services/auth-guard.guard';
import { TokenInterceptor } from './module/token.interceptor';



import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { Error404Component } from './components/error404/error404.component';
import { SingleMovieComponent } from './components/home/single-movie/single-movie.component';
import { UsersComponent } from './components/users/users.component';
import { SingleUserComponent } from './components/users/single-user/single-user.component';

import { OwnProfileComponent } from './components/own-profile/own-profile.component';
import { FavoritesComponent } from './components/favorites/favorites.component';


const route: Route[] = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "movies/:id",
    component: SingleMovieComponent,
    canActivate: [AuthGuardGuard]
  },
  {path: "users",
  component: UsersComponent, children:[
    {path:':id', component: SingleUserComponent}
  ]
  },
  {path: "register",
   component: RegisterComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "ownprofile/:id",
    component: OwnProfileComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: "favorites/:id",
    component: FavoritesComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: "**",
    component: Error404Component
  }

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    Error404Component,
    SingleMovieComponent,
    UsersComponent,
    SingleUserComponent,
    OwnProfileComponent,
    FavoritesComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(route),
    HttpClientModule,
    ReactiveFormsModule,


  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
