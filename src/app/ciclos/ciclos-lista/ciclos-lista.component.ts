import { Component, OnInit } from '@angular/core';
import { Ciclo } from '../servicos/ciclos';
import { CiclosService } from 'src/app/ciclos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ciclos-lista',
  templateUrl: './ciclos-lista.component.html',
  styleUrls: ['./ciclos-lista.component.scss']
})
export class CiclosListaComponent implements OnInit {

  ciclos: Ciclo[] = [];
  cicloSelecionado: Ciclo;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(
    private service: CiclosService,
    private router: Router,
  ) { 
    
  }

  ngOnInit(): void {
    this.carregarForm();
  }

  carregarForm(){
    this.service.consultar().subscribe(resposta => 
      this.ciclos = resposta)
  }

  novoCadastro(){
    this.router.navigate(['/ciclos/form'])
  }

  preparaDelecao(ciclo: Ciclo){
    this.cicloSelecionado = ciclo;
  }

  deletarCiclo(){
    this.service
    .deletar(this.cicloSelecionado)
    .subscribe( response => {
      this.mensagemSucesso = 'Ciclo excluído com sucesso!'
      this.ngOnInit();
    },
    erro => this.mensagemErro = 'Ocorreu um erro ao excluir o ciclo')
  }

}
