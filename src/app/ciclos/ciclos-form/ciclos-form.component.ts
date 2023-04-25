import { Component, OnInit } from '@angular/core';
import { Ciclo } from '../servicos/ciclos';
import { CiclosService } from '../../ciclos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ciclos-form',
  templateUrl: './ciclos-form.component.html',
  styleUrls: ['./ciclos-form.component.scss']
})
export class CiclosFormComponent implements OnInit {

  ciclo: Ciclo;
  success: boolean = false;
  errors: String[]; 
  id: number;

  constructor(
    private service: CiclosService,
    private router: Router,
    private activatedRoute: ActivatedRoute, 
  ){
    this.ciclo = new Ciclo();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params && params.id) {
        this.id = params.id;
        this.service.consultarPorId(this.id).subscribe(
          response => {
            this.ciclo = response;
          },
          errorResponse => {
            console.error(errorResponse);
            this.ciclo = new Ciclo();
          }
        );
      }
    });
  }

  onSubmit(){
    if(this.id){
      this.service
      .atualizar(this.ciclo)
      .subscribe(response => {
        this.success = true;
        this.errors = null;
      }, errorResponse => {
        this.errors = ['Erro ao atualizar o cliente']
      }
      )
    }else{
      this.service.salvar(this.ciclo).subscribe( response => {
        this.success = true;
        this.errors = null;
        this.ciclo = response;  
      } , errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      })
    }
  }

  voltarConsulta(){
    this.router.navigate(['ciclos/lista'])
  }

}
