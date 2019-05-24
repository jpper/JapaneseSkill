import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'job', loadChildren: './pages/job-details/job-details.module#JobDetailsPageModule' },
  { path: 'job/:id', loadChildren: './pages/job-details/job-details.module#JobDetailsPageModule' },
  { path: 'apply/:id', loadChildren: './pages/apply/apply.module#ApplyPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'resume', loadChildren: './pages/resume/resume.module#ResumePageModule' },
  { path: 'resume/:id', loadChildren: './pages/resume/resume.module#ResumePageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
