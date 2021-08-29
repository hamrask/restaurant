import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-take-order',
  templateUrl: './take-order.component.html',
  styleUrls: ['./take-order.component.scss']
})
export class TakeOrderComponent implements OnInit {
  sectionForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm()
  }
  initForm(){
    this.sectionForm=this.fb.group({
      queueNumber:[Validators.required],
      tableName:[Validators.required],
      nameOfItems:[Validators.required],
      quantity:[Validators.required],
      printedOrNot:[Validators.required]
    });
  }
  displayedColumns: string[] = ['position', 'item', 'quandity', 'price'];
  dataSource = ELEMENT_DATA;
}
const ELEMENT_DATA=[
  {position: 1, item: 'pizza', quandity: '2 Nos', price: '500'},
  
];
