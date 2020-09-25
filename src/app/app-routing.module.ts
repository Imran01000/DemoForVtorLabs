import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { MyworkComponent } from './components/mywork/mywork.component';
import { ResumeComponent } from './components/resume/resume.component';
import { SkillsExperinceComponent } from './components/skills-experince/skills-experince.component';



const routes: Routes = [
  { path: '', component : DashboardComponent},
  { path: 'introduction', component : IntroductionComponent},
  { path: 'skills&experience', component : SkillsExperinceComponent},
  { path: 'resume', component : ResumeComponent},
  { path: 'my-work', component :MyworkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DashboardComponent, IntroductionComponent,SkillsExperinceComponent,
   ResumeComponent, MyworkComponent]