import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Un type qui n'accepte que ces 3 textes : une faute de frappe sera refusée
type Status = 'sur site' | 'en télétravail' | 'absent';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly appName = 'TechCorp Equipe';
  protected readonly userName = 'Mehdi';
  protected readonly totalDays = 25;
  protected readonly daysTaken = signal(0);
  protected message = '';
  protected typed = '';

  // Un signal qui contient le statu du jour, "sur site" au départ
  protected readonly status = signal<Status>('sur site');

  protected changeStatus(newStatus: Status): void {
    // set() remplace la valeru : l'écran se met à jour tout seul
    this.status.set(newStatus);
  }

  protected addDay(): void {
    this.daysTaken.update((days) => days + 1);
  }

  protected removeDay(): void {
    this.daysTaken.update((days) => days - 1);
  }

  protected reset(): void {
    this.daysTaken.set(0);
  }

  protected sayHello(): void {
    this.message = 'Bienvenue dans TechCorp Equipe, ' + this.userName + ' !';
  }

  protected clearMessage(): void {
    this.message = '';
  }

  protected onType(inputValue: string): void {
    this.typed = inputValue;
  }
}
