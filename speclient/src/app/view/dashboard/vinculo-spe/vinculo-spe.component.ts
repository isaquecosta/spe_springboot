import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vinculo-spe',
  templateUrl: './vinculo-spe.component.html',
  styleUrls: ['./vinculo-spe.component.css']
})
export class VinculoSpeComponent implements OnInit {


  colunas = [
    { field: 'nome', header: 'Nome' },
    { field: 'telefone' , header: 'Telefone'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
