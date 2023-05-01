import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminComponent } from './admin/admin.component';
import { PackagesComponent } from './packages/packages.component';
import {MatTabsModule} from '@angular/material/tabs';
import { AddPackageComponent } from './add-package/add-package.component';
import { PackageListComponent } from './package-list/package-list.component';
import { UserListComponent } from './user-list/user-list.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    CarouselComponent,
    AdminComponent,
    PackagesComponent,
    AddPackageComponent,
    PackageListComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    HttpClientModule,
    MatSnackBarModule,
    NgbModule,
    MatTabsModule
  ],
  providers: [
    MatDatepickerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
