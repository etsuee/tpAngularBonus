import { Component, input } from '@angular/core';
import { Employee } from '../models/employee';

@Component({
  imports: [],
  selector: 'app-employee-card',
  styleUrl: './employee-card.css',
  templateUrl: './employee-card.html',
})
export class EmployeeCard {
  // Donnée recie du parent : <app-employee-card [employee]="..."/>
  // required : le parent est OBLIGE de la fournir
  readonly employee = input.required<Employee>();
}
