import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeCard } from './employee-card/employee-card';
import { LeaveCounter } from './leave-counter/leave-counter';

// Un type qui n'accepte que ces 3 textes : une faute de frappe sera refusée
type Status = 'sur site' | 'en télétravail' | 'absent';

@Component({
  imports: [EmployeeCard, LeaveCounter, RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly appName = 'TechCorp Equipe';
  protected readonly userName = 'Mehdi';
  protected message = '';

  // Un signal qui contient le statu du jour, "sur site" au départ
  protected readonly status = signal<Status>('sur site');

  protected sayHello(): void {
    this.message = 'Bienvenue dans TechCorp Equipe, ' + this.userName + ' !';
  }

  protected changeStatus(newStatus: Status): void {
    // set() remplace la valeur : l'écran se met à jour tout seul
    this.status.set(newStatus);
  }
}
