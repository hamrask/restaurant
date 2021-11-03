import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ItemService } from '../../shared/services/item.service';



@Component({
  selector: 'app-item-section',
  templateUrl: './item-section.component.html',
  styleUrls: ['./item-section.component.scss']
})
export class ItemSectionComponent implements OnInit {
sectionForm: FormGroup;
printers = [];
sections = [];  
displayedColumns: string[] = ['position', 'nameofsection', 'printer','mainprinter', 'action'];
  constructor(private fb: FormBuilder, private itemService: ItemService, private toastr :ToastrService) { }
  ngOnInit(): void {
    this.initForm();
    this.getAllPrinters();
    this.getAllSections();
  }
  initForm() {
     this.sectionForm = this.fb.group({
       _id:[null],
      sectionName:['',Validators.required],
      printerIP:['',Validators.required],
      isMainPrinter: [false, Validators.required]
     });
  }
  saveSection() {
    if (this.sectionForm.valid) {
      this.itemService.saveSection(this.sectionForm.value).subscribe(data => {
        this.getAllSections();
        this.sectionForm.reset();
        this.toastr.success('Success', 'Section added successfully');
      }, error=> {
        console.log(error);
        this.toastr.error('Error', error?.error?.message);
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
  deleteSection(sectionId){
    this.itemService.deleteSectionById(sectionId).subscribe(data => {
      this.getAllSections();
    });
  }
  editSection(sectionDetails) {
    this.sectionForm.patchValue(sectionDetails);
  }
}
   