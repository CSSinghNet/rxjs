import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObServableComponent } from './ob-servable/ob-servable.component';
import { SubjectComponent } from './subject/subject.component';

const routes: Routes = [
  { path: 'observable', component: ObServableComponent },
  { path: 'subject', component: SubjectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
