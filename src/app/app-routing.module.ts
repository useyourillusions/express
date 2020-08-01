import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from 'src/app/components/about/about.component';
import { AuthGuard } from 'src/app/shared/guards/auth/auth.guard';


const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
