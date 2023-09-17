import { Component } from '@angular/core';
import { CarroService } from './carro.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'certificado-angular';

  constructor(private carroService: CarroService){}

  obterTodosCarros(){
    this.carroService.obterTodos()
    .then(carros => console.log(carros))
    .catch(error => console.log(error));
  }

  obterSomenteUm(){
    this.carroService.obterPorId(4)
    .then(carros => console.log(carros))
    .catch(error => console.log(error));
  }
}
