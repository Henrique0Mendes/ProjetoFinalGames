import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FourOFourComponent } from './components/four-ofour/four-ofour.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  { path: 'home', component: HomeComponent },
  { path: 'notFound', component: FourOFourComponent },
  { path: '**', redirectTo: 'notFound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
