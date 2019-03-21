import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'sign-up', loadChildren: './sign-up/sign-up.module#SignUpPageModule' },
  { path: 'diseases', loadChildren: './diseases/diseases.module#DiseasesPageModule' },
  { path: 'symptoms', loadChildren: './symptoms/symptoms.module#SymptomsPageModule' },
  { path: 'admin', loadChildren: './admin/admin.module#AdminPageModule' },
  { path: 'disease/:id', loadChildren: './disease/disease.module#DiseasePageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
