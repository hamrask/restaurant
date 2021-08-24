import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-item-section',
  templateUrl: './item-section.component.html',
  styleUrls: ['./item-section.component.scss']
})
export class ItemSectionComponent implements OnInit {
sectionForm: FormGroup;
  constructor(private fb: FormBuilder, private itemService: ItemService) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
     this.sectionForm = this.fb.group({
      sectionName:[Validators.required],
      printerName:[Validators.required]
     });
  }
  saveSection() {
    if (this.sectionForm.valid) {
      this.itemService.saveSection(this.sectionForm.value).subscribe(data => {
        console.log('data is saved');
      }, error=> {
        console.log('error occured');
      })
    }
  }
  displayedColumns: string[] = ['position', 'nameofsection', 'printer', 'action'];
  dataSource = ELEMENT_DATA;
}
const ELEMENT_DATA= [
  {position: 1, nameofsection: 'juice', printer: 'printer 1', action: 'add'},
  
];