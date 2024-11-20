import { Component } from '@angular/core';
import { FestivosHttpService } from '../Services/festivos.service';
import { FestivosClass } from '../../Entidades/Festivos-Class';

@Component({
  selector: 'tabla-festivos',
  standalone: true,
  imports: [],
  templateUrl: './tabla-festivos.component.html',
  styleUrl: './tabla-festivos.component.css'
})
export class TablaFestivosComponent {
  constructor(public FestivosHttpClienteService:FestivosHttpService){}
}
