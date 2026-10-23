// Forme d'un collègue: chaque objet Employee doit avoir ces proprietés
export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  job: string;
  department: string;
  remote: boolean;
}
