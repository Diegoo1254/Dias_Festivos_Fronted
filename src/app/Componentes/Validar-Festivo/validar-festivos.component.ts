import { Component,ViewChild,ElementRef } from '@angular/core';
import { FestivosHttpService } from '../Services/festivos.service';
import { FestivosClass } from '../../Entidades/Festivos-Class';

@Component({
  selector: 'app-validar-festivos',
  standalone: true,
  imports: [],
  templateUrl: './validar-festivos.component.html',
  styleUrl: './validar-festivos.component.css'
})
export class ValidarFestivosComponent {
  constructor(private FestivosHttpClienteService:FestivosHttpService){}

  ObtenerFestivos(){
    this.FestivosHttpClienteService.ObtenerFestivos(this.fechaInput.nativeElement.value).subscribe({
      next: (respuesta) => {
        this.FestivosHttpClienteService.ListaFestivos = []
        for(let festivo of respuesta){
          let claseFestivo = new FestivosClass(festivo.nombre,festivo.dia,festivo.mes,this.fechaInput.nativeElement.value)
          this.FestivosHttpClienteService.ListaFestivos.push(claseFestivo)
        }
      },
      error: (error)=>{
        console.error(error)
      }
    })
  }

  public ValidarFestivo(){
    let fechaArray = this.validarFechaInput.nativeElement.value.split("-")
    this.FestivosHttpClienteService.validarFestivos(fechaArray).subscribe({
      next: (response:any) => {
        alert(response.message)
      },
      error: (error:any) =>{
        console.log("Ocurrio un Error")
        console.error(error)
      }
    })
  }


  @ViewChild('validarFechaInput') validarFechaInput!:ElementRef;
  @ViewChild('fechaInput') fechaInput!:ElementRef;
}
