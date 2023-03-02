import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { FiveYearsOfCodingComponent } from './five-years-of-coding/five-years-of-coding.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PostLoaderComponent } from './post-loader/post-loader.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'Projects', component: ProjectsComponent},
  {path: 'fiveYears', component: FiveYearsOfCodingComponent},
  {path: 'Aboutme', component: AboutMeComponent},
  {path: 'post/:id', component: PostLoaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
