import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vtuber } from '../interfaces/hololive.interface';

@Injectable({
  providedIn: 'root'
})
export class VtubersService {

  constructor( private http:HttpClient ) { }

  getPersonajes():Observable<Vtuber[]> {
    return this.http.get<Vtuber[]>('http://localhost:3000/personajes');
  };

  getPersonajePorId( id:Vtuber ):Observable<Vtuber> {
    return this.http.get<Vtuber>(`http://localhost:3000/personajes/${id}`);
  }

}
