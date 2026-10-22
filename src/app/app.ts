import { Component, signal, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeCard } from './employee-card/employee-card';
import { LeaveCounter } from './leave-counter/leave-counter';
import { Employee } from './models/employee';
import { SearchBox } from './search-box/search-box';

// Un type qui n'accepte que ces 3 textes : une faute de frappe sera refusée
type Status = 'sur site' | 'en télétravail' | 'absent';

@Component({
  imports: [EmployeeCard, LeaveCounter, RouterOutlet, SearchBox],
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

  protected readonly employees: Employee[] = [
    {
      id: 1,
      firstName: 'Claire',
      lastName: 'Martin',
      email: 'claire.martin@techcorp.fr',
      job: 'Développeuse front-end',
      departement: 'Informatique',
      remote: true,
    },
    {
      id: 2,
      firstName: 'Julien',
      lastName: 'Bernard',
      email: 'julien.bernard@techcorp.fr',
      job: 'Chef de projet',
      departement: 'Informatique',
      remote: false,
    },
    {
      id: 3,
      firstName: 'Sarah',
      lastName: 'Lefèvre',
      email: 'sarah.lefevre@techcorp.fr',
      job: 'Chargée RH',
      departement: 'Ressources humaines',
      remote: false,
    },
    {
      id: 4,
      firstName: 'Paul',
      lastName: 'Washington',
      email: 'paul.washington@techcorp.fr',
      job: 'Chargé RH',
      departement: 'Ressources humaines',
      remote: false,
    },
  ];

  protected readonly search = signal('');

  protected readonly filteredEmpoloyees = computed(() => {
    const text = this.search().trim().toLowerCase();
    return this.employees.filter((employee) =>
      (employee.firstName + ' ' + employee.lastName).toLowerCase().includes(text),
    );
  });
}
