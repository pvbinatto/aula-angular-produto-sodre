import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxCurrencyDirective } from 'ngx-currency';

@Component({
  standalone: true,
  selector: 'app-numeral',
  imports: [
    CommonModule,
    NgxCurrencyDirective,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './numeral.component.html',
  styleUrls: ['./numeral.component.scss'],
})
export class NumeralComponent {

  @Input() form!: FormGroup
  @Input() controlName: string = ''
  @Input() titulo: string = ''
  @Input() placeholder: string = ''
}
