import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-stock',
  templateUrl: './update-stock.component.html',
  styleUrls: ['./update-stock.component.scss']
})
export class UpdateStockComponent implements OnInit {
  sectionForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm()
  }
  initForm(){
    this.sectionForm=this.fb.group({
      itemId:[Validators.required],
      quantity:[Validators.required],
      isAvailable:[Validators.required]
    });
  }

}
