import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientFormComponent } from './client-form/client-form.component';
import { RecapComponent } from './recap/recap.component';

export const routes: Routes = [
  { path: '', component: ClientFormComponent },
  { path: 'recap', component: RecapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
