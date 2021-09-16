import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItemService } from 'src/app/shared/services/item.service';

@Component({
  selector: 'app-printer',
  templateUrl: './printer.component.html',
  styleUrls: ['./printer.component.scss']
})
export class PrinterComponent implements OnInit {
  title = "Add Printer"
  printerForm:FormGroup;
  printerDetails: [];
  displayedColumns: string[] = ['position','printername', 'printerIp','action'];
  dataSource = [];
 
  constructor(private fb:FormBuilder, private itemService:ItemService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.printerForm= this.fb.group({
      printerName:[null, Validators.required],
      printerIp:[null, Validators.required]  
    });
  } 
  

}

