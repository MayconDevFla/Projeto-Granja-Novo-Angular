import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Ciclo } from './ciclos/servicos/ciclos';

@Injectable({
  providedIn: 'root'
})
export class CiclosService {

  constructor(
    private http: HttpClient
  ) {
   }

   //getCiclos() : Observable<Ciclos[]>

   consultar() : Observable<Ciclo[]> {
    return this.http.get<Ciclo[]>('http://localhost:8080/api/ciclos')
   }

   salvar(ciclo: Ciclo) : Observable<Ciclo> {
    return this.http.post<Ciclo>('http://localhost:8080/api/ciclos', ciclo)
   }

   atualizar(ciclo: Ciclo) : Observable<any> {
    return this.http.put<Ciclo>(`http://localhost:8080/api/ciclos/${ciclo.id}`, ciclo)
   }

   consultarPorId(id: number) : Observable<Ciclo>{
    return this.http.get<any>(`http://localhost:8080/api/ciclos/${id}`);
   }

   deletar(ciclo: Ciclo) : Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/ciclos/${ciclo.id}`);
   }
}

