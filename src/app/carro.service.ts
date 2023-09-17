import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_PATH } from './environments/environment';
import { ICarro } from './ICarros';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  constructor(private httpclient: HttpClient) { }

  obterTodos(){
    return this.httpclient.get<ICarro[]>(`${API_PATH}Carros`).toPromise();
  }

  obterPorId(id: number){
    return this.httpclient.get<ICarro>(`${API_PATH}Carros/${id}`).toPromise();
  }
}
