import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vtuber } from '../interfaces/hololive.interface';

@Injectable({
  providedIn: 'root'
})
export class VtubersService {

  private baseUrl:string = environment.baseUrl

  constructor( private http:HttpClient ) { }

  getPersonajes():Observable<Vtuber[]> {
    return this.http.get<Vtuber[]>(`${this.baseUrl}/personajes`);
  };

  getPersonajePorId( id:Vtuber ):Observable<Vtuber> {
    return this.http.get<Vtuber>(`${this.baseUrl}/personajes/${id}`);
  }

  getSugerencias( termino:string ):Observable<Vtuber[]> {
    return this.http.get<Vtuber[]>(`${this.baseUrl}/personajes?q=${termino}&_limit=6`);
  }
}
