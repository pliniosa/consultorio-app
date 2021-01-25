import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GerenciadorCookieService } from '../../service/cookies/gerenciador.cookie.service';
import { Cliente } from '../../models/cliente'
import { ClienteService } from '../../service/cliente/cliente.service'


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  conta = {
    nome: this.cookie.getNome(),
    email:  this.cookie.getEmail(),
    rua:'',
    numero:'',
    cidade:'',
    telefone:'',
    adm: false
  };
  controlePDF = true;
  submitted=false;

  clienteGet = {} as Cliente;
  cliente: Cliente;

  constructor(
    private cookie : GerenciadorCookieService,
    private router: Router,
    private clienteService: ClienteService,
  ) { }

  ngOnInit(): void {
    this.getCliente();
  }

  getCliente() {
    this.clienteService.getUsuario(this.conta.email).subscribe((cliente: Cliente) => {
      this.cliente = cliente;
    });
  }

  //PUT
  registrarUsuario(form){
    const data = {
      nome:  this.cookie.getNome(),
      email:  this.cookie.getEmail(),
      rua: this.conta.rua,
      numero: this.conta.numero,
      cidade: this.conta.cidade,
      telefone: this.conta.telefone
    };

    this.clienteService.putCliente(data)
      .subscribe(
        response=>{
          console.log(response);
          this.submitted=true;
          this.router.navigate(['home']);
          setTimeout(function(){ location.reload(); }, 8)
        },
        error =>{
          console.log(error);
        }
      );
  }

  altPDF(){
    this.controlePDF = true;
  }
  altPerfil(){
    this.controlePDF = false;
  }
}
