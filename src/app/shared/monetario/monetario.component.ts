import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxCurrencyDirective } from 'ngx-currency';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-monetario',
  standalone: true,
  imports: [
    CommonModule,
    NgxCurrencyDirective,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './monetario.component.html',
  styleUrls: ['./monetario.component.scss'],
})
export class MonetarioComponent {

  @Input() form!: FormGroup
  @Input() controlName: string = ''
  @Input() titulo: string = ''
  @Input() placeholder: string = ''
  
}
