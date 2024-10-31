import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TertiaryComponent } from './tertiary/tertiary.component';
import { FooterComponent } from './footer/footer.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { ProfilComponent } from './profil/profil.component';
import { AppRoutingModule } from './app.routes';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FooterComponent,
    TertiaryComponent,
    ProductListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-client-form';
}
