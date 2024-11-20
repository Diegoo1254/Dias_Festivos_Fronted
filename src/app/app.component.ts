import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ValidarFestivosComponent } from './Componentes/Validar-Festivo/validar-festivos.component';
import { TablaFestivosComponent } from './Componentes/Tabla-Festivos/tabla-festivos.component';
import { NavBarComponent } from './Componentes/nav-bar/nav-bar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ValidarFestivosComponent,TablaFestivosComponent,NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Festivos';  
}
