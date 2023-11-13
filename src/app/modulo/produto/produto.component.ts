import { Component, OnInit } from '@angular/core';
import { Produto } from './produto.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProdutoService } from './service/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss'],
})
export class ProdutoComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private produtoService: ProdutoService
  ) {}

  dataSource: Produto[] = [];
  displayedColumns: string[] = [
    'actions',
    'sku',
    'name',
    'stock',
    'cost',
    'price',
  ];

  form!: FormGroup;

  typeAdd: boolean = false;

  ngOnInit(): void {

    this.form = this.fb.group({
      id: [null],
      sku: [null, Validators.required],
      name: [null, Validators.required],
      stock: [null],
      cost: [null, Validators.required],
      price: [null, Validators.required],
    });

    this.listarProdutos()
  }

  editar(produto: Produto){
    this.form.patchValue(produto)
    this.typeAdd = true
  }

  remover(id: string){
    this.produtoService.delete(id).subscribe(retorno => {
      if(retorno){
        this.listarProdutos()
      }
      
    })
  }

  salvar() {

    if(this.form.valid){
      let dados = this.form.value as Produto;
      
      if(!dados.id){
        this.inserir(dados)
      } else {
        this.atualizar(dados)
      }

    } else {
      this.form.markAllAsTouched()
      this.form.updateValueAndValidity()
    }

  }

  inserir(objeto: Produto){
    this.produtoService.inserir(objeto).subscribe(retorno => {
      this.listarProdutos()
      this.typeAdd = false
    })
  }

  atualizar(objeto: Produto){
    this.produtoService.editar(objeto).subscribe(retorno => {
      this.listarProdutos()
      this.typeAdd = false
    })
  }

  listarProdutos() {
    this.produtoService.listarTodos().subscribe(retorno => {
      this.dataSource = retorno
    })
  }

  addProduto() {
    this.typeAdd = true;
  }

  search() {
    this.typeAdd = false;
  }
}
