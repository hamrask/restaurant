import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-item-section',
  templateUrl: './item-section.component.html',
  styleUrls: ['./item-section.component.scss']
})
export class ItemSectionComponent implements OnInit {
sectionForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
     this.sectionForm = this.fb.group({
      sectionName:[Validators.required],
      printerName:[Validators.required]
     });
  }
  displayedColumns: string[] = ['position', 'nameofsection', 'printer', 'action'];
  dataSource = ELEMENT_DATA;
}
const ELEMENT_DATA= [
  {position: 1, nameofsection: 'juice', printer: 'printer 1', action: 'add'},
  
];