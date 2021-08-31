import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-table-config',
  templateUrl: './table-config.component.html',
  styleUrls: ['./table-config.component.scss'],
  
})
export class TableConfigComponent implements OnInit {
  sectionForm: FormGroup;
  tableNumber = new FormControl('');
  table = [];
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    this.tableNumber.valueChanges.subscribe(data => {
      for(let i=0;i<=data;i++) {
        this.table.push(i);
      }
    });
  }
  initForm(){
    this.sectionForm=this.fb.group({
      userName:[Validators.required],
      password:[Validators.required]

    })
  }

}
