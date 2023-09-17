import { Component } from '@angular/core';
import { CarroService } from './carro.service';
import { ICarro } from './ICarros';

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

  adicionarCarro(){
    const carro: ICarro = {
      nome: "Civic",
      marca: "Honda"
    };

    this.carroService.adicionar(carro)
    .then(carro => console.log('Adicionado um novo carro'))
    .catch(error => console.log(error));
  }

  atualizarCarro(){
    const carro: ICarro = {
      id: 8,
      nome: "Corolla",
      marca: "Toyota"
    };

    this.carroService.atualizar(carro)
    .then(carro => console.log('Att', carro))
    .catch(error => console.log(error));
  }

  deletandoCarro(){
  
    this.carroService.deletar(8)
    .then(res => console.log('Removido',res))
    .catch(error => console.log(error));
  }
}
