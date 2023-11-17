import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private toastr: ToastrService) { }

  success(titulo: string, texto: string){
    Swal.fire({
      title: titulo,
      text: texto,
      icon: "success"
    });
  }

  alertConfirmation(message: string){
    return Swal.fire({
      title: 'Atenção',
      text: message,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',
    })
  }

  alertToastr(mensagem: string){
    this.toastr.success(mensagem);
  }
}
