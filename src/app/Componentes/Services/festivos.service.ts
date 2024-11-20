import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FestivosClass } from '../../Entidades/Festivos-Class';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FestivosHttpService {

  public ListaFestivos:FestivosClass[] = []

  constructor(private Cliente:HttpClient) { }

    public validarFestivos(fechas: string[]): Observable<any> {
      // Verificamos que el array tenga los tres componentes necesarios
      if (fechas.length !== 3) {
        throw new Error('El array debe contener exactamente tres elementos: [year, month, day]');
      }
    
      // Construimos la URL usando los índices del array
      const [year, mes, dia] = fechas;
    
      return this.Cliente.get<any>(`${environment.api}/festivos/verificar/${year}/${mes}/${dia}`);
    }

  public ObtenerFestivos(year:string):Observable<any>{
    return this.Cliente.get<any>(`${environment.api}/festivos/obtener/${year}`)
  }

}
