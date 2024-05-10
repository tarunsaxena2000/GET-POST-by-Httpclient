import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AxioComponent } from './components/axio/axio.component';
import { GetComponent } from './components/get/get.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [

  {component:AxioComponent,path:'axio'},
  {component:GetComponent,path:'get'},
  {component:PostComponent,path:'post'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
