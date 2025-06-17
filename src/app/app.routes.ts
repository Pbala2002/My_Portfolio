import { Routes } from '@angular/router';
import { Home } from './pages/home/home/home';
import { About } from './pages/about/about/about';
import { Project } from './pages/project/project/project';
import { Contact } from './pages/contact/contact/contact';
import { Skills } from './pages/skills/skills/skills';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'skills', component: Skills },
  { path: 'projects', component: Project },
  { path: 'contact', component: Contact },
];


