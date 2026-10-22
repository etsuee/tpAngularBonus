import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamStore } from '../../team-store';
@Component({
  imports: [FormsModule],
  selector: 'app-add-employee',
  styleUrl: './add-employee.css',
  templateUrl: './add-employee.html',
})
export class AddEmployee {
  private readonly store = inject(TeamStore);
  // le routeur permet de changer de page depuis le code
  private readonly router = inject(Router);

  protected readonly firstName = signal('');
  protected readonly lastName = signal('');
  protected readonly email = signal('');
  protected readonly job = signal('');

  protected save(): void {
    this.store.add({
      firstName: this.firstName(),
      lastName: this.lastName(),
      email: this.email(),
      job: this.job(),
      departement: 'Informatique',
      remote: false,
    });
    this.router.navigate(['/equipe']);
  }
}
