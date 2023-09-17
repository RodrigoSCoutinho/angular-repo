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

  adicionar(carro: ICarro){
    return this.httpclient.post<ICarro>(`${API_PATH}Carros`, carro).toPromise();
  }

  atualizar(carro: ICarro){
    return this.httpclient.put<ICarro>(`${API_PATH}Carros/${carro.id}`, carro).toPromise();
  }

  deletar(carroId: number){
    return this.httpclient.delete<void>(`${API_PATH}Carros/${carroId}`).toPromise();
  }
}
