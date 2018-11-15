import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {BioComponent} from './bio/bio.component';
import { BioDetailsComponent } from './bio-details/bio-details.component';
import {BioCreateComponent} from './bio-create/bio-create.component';
import {MyFormComponent} from './my-form/my-form.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes =[
  {path:'', component: HomeComponent,canActivate: [AuthGuard]},
  {path:'bio', component: BioComponent,canActivate: [AuthGuard]},
  {path:'bio/:id', component: BioDetailsComponent},
  {path:'create-bio', component:BioCreateComponent,canActivate: [AuthGuard]},
  {path:'my-form', component:MyFormComponent,canActivate: [AuthGuard]},
  {path:'login', component:LoginComponent},

];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
		  exports: [RouterModule]
})
export class AppRoutingModule { }
