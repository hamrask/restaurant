import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-item-category',
  templateUrl: './item-category.component.html',
  styleUrls: ['./item-category.component.scss']
})
export class ItemCategoryComponent implements OnInit {
sectionForm: FormGroup
  constructor(private fb:FormBuilder) { }
  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.sectionForm=this.fb.group({
      Category:[Validators.required]
    });
  }
  displayedColumns: string[] = ['position', 'category', 'action'];
  dataSource = ELEMENT_DATA;
}
const ELEMENT_DATA= [
  {position: 1, category: 'juice', action: 'yes'},
  
];
