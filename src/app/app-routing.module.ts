import { NgModule } from '@angular/core';
import { BgComponent } from './bg/bg.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'bg', component: BgComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
