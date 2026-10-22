import { Component, computed, inject, signal } from '@angular/core';
import { EmployeeCard } from '../../employee-card/employee-card';
import { SearchBox } from '../../search-box/search-box';
import { TeamStore } from '../../team-store';

@Component({
  imports: [EmployeeCard, SearchBox],
  selector: 'app-team-page',
  styleUrl: './team-page.css',
  templateUrl: './team-page.html',
})
export class TeamPage {
  // injext() : Angular fournit l'instance unique du service
  private readonly store = inject(TeamStore);

  protected readonly search = signal('');

  protected readonly filteredEmployees = computed(() => {
    const text = this.search().trim().toLowerCase();
    return this.store
      .employees()
      .filter((employee) =>
        (employee.firstName + ' ' + employee.lastName).toLowerCase().includes(text),
      );
  });

  protected remove(id: number): void {
    this.store.remove(id);
  }
}
