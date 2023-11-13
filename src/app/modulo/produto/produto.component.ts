import { Component, OnInit } from '@angular/core';
import { Produto } from './produto.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  constructor(private fb: FormBuilder){}

  dataSource: Produto[] = [];
  displayedColumns: string[] = [
    'actions',
    'sku',
    'name',
    'stock',
    'cost',
    'price'
  ]

  dados: Produto[] = [
    {'id': 'r445435345345j3j453j45h34j5h435', 'sku': '1234', 'name': 'Água Mineral', 'stock': 10, 'cost': 1.5, 'price': 20},
    {'id': 'r445435345345j3j453j45h34j5h435', 'sku': '123456', 'name': 'Água Mineral com Gás', 'stock': 30, 'cost': 1.7, 'price': 25},
  ]

  form!: FormGroup

  typeAdd: boolean = true

  ngOnInit(): void {
    this.dataSource = this.dados

    this.form = this.fb.group({
      id: [null],
      sku: [null, Validators.required],
      name: [null, Validators.required],
      stock: [null],
      cost: [null, Validators.required],
      price: [null, Validators.required]
    })
  }

  salvar(){

  }

  listarProdutos(){

  }

  addProduto(){
    this.typeAdd = true
  }

  search(){
    this.typeAdd = false
  }
}
