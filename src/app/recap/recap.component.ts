import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-recap',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './recap.component.html',
  styleUrl: './recap.component.css',
})
export class RecapComponent {
  client = {
    nom: '',
    prenom: '',
    adresse: '',
    cp: '',
    ville: '',
    telephone: '',
    email: '',
    civilite: '',
    password: '',
    login: '',
    pays: '',
  };

  constructor(private router: Router) {
    if (typeof window !== 'undefined' && localStorage) {
      this.client = JSON.parse(
        localStorage.getItem('clientData') ||
          '{ "nom":"", "prenom": "", "adresse": "", "cp": "", "ville": "", "telephone": "", "email": "", "civilite": "", "password": "", "login": "", "pays": ""}'
      );
    }
  }

  onHome() {
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
