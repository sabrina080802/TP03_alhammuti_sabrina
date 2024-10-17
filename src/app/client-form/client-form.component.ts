import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-client-form',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css'],
})
export class ClientFormComponent {
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

  onSubmit(clientForm: NgForm) {
    if (!clientForm.valid) {
      alert('Il manque un renseignement ou celui-ci est incomplet !');
      return;
    }
    localStorage.setItem('clientData', JSON.stringify(this.client));
    this.router.navigate(['/recap']);
  }
}
