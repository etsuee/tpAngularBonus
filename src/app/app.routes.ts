import { Routes } from '@angular/router';
import { AddEmployee } from './pages/add-employee/add-employee';
import { Home } from './pages/home/home';
import { TeamPage } from './pages/team-page/team-page';
import { Labo } from './pages/labo/labo';

export const routes: Routes = [
  // title: le titre de l'onglet different pour chaque page
  { path: '', title: 'Accueil | TechCorp Equipe', component: Home },
  { path: 'equipe', title: 'Equipe | TechCorp Equipe', component: TeamPage },
  { path: 'ajouter', title: 'Ajouter un collègue | TechCorp Equipe', component: AddEmployee },
  { path: 'labo', title: 'Laboratoire | TechCorp Équipe', component: Labo },
  // toute autre adresse renvoie vers l'accueil, toujours en dernier
  { path: '**', redirectTo: '' },
];
