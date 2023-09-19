import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CampeonatoService {

  key: string = "test_b5da7267ff75704abd45e40009611f"

  constructor(private httpClient: HttpClient) { }

  getTabelaSerieB(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.key}`
    })

    const requestOptions = {headers: headers};

    return this.httpClient.get<any>('https://api.api-futebol.com.br/v1/campeonatos/14', requestOptions);
  }
}
