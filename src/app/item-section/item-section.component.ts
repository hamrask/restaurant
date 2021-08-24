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
printers = [];
sections = [];
  constructor(private fb: FormBuilder, private itemService: ItemService) { }

  ngOnInit(): void {
    this.initForm();
    this.getAllPrinters();
    this.getAllSections();
  }
  initForm() {
     this.sectionForm = this.fb.group({
      sectionName:['',Validators.required],
      printerName:['',Validators.required]
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
  getAllPrinters() {
    this.itemService.getAllPrinters().subscribe(data => {
      this.printers = data;
    });
  }
  getAllSections() {
    this.itemService.getAllSection().subscribe(data => {
      this.sections = data;
    });
  }

  displayedColumns: string[] = ['position', 'nameofsection', 'printer', 'action'];
}