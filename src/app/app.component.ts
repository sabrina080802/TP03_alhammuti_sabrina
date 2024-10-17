import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TertiaryComponent } from './tertiary/tertiary.component';
import { FooterComponent } from './footer/footer.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { RecapComponent } from './recap/recap.component';
import { AppRoutingModule } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, TertiaryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-client-form';
}
