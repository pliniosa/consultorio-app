import { Component, OnInit } from '@angular/core';
import { ProfissionaisService } from 'src/app/autenticacao/service/profissionais/profissionais.service';


@Component({
  selector: 'app-cadastrar-profissional',
  templateUrl: './cadastrar-profissional.component.html',
  styleUrls: ['./cadastrar-profissional.component.css']
})
export class CadastrarProfissionalComponent implements OnInit {

  profissional = {
    nome:'',
    cro:''
  }
  submitted=false;

  constructor( 
    private  cadastroService: ProfissionaisService
  ) { }

  ngOnInit(): void {
  }

  registrarProfissional(form){
    const data = {
      nome: this.profissional.nome,
      cro: this.profissional.cro,
    };

    this.cadastroService.postCadastro(data)
      .subscribe(
        response=>{
          console.log(response);
          this.submitted=true;
        },
        error =>{
          console.log(error);
        }
      );
  }

}
