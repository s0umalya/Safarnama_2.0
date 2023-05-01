import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PackagesComponent } from './packages/packages.component';
import { AdminComponent } from './admin/admin.component';
import { AddPackageComponent } from './add-package/add-package.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'packages', component: PackagesComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/add-package', component: AddPackageComponent },
  { path: 'admin/user-list', component: UserListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
