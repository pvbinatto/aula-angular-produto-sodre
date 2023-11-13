import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { environment } from 'src/environments/environments';
import { Produto } from '../produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private apiService: ApiService) { }

  private classController: string = 'products';

  listarTodos(): Observable<Produto[]>{
    return this.apiService.get(environment.api + this.classController)
  }

  inserir(objeto: Produto): Observable<Produto> {
    return this.apiService.post(environment.api + this.classController, objeto)
  }

  editar(objeto: Produto): Observable<Produto> {
    return this.apiService.put(environment.api + this.classController + '/' + objeto.id, objeto)
  }

  delete(id: string): Observable<any> {
    return this.apiService.delete(environment.api + this.classController + '/' + id)
  }
}
