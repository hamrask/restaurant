import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.scss']
})
export class AddMenuComponent implements OnInit {
selectionForm: FormGroup
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.selectionForm=this.fb.group({
    menuName:[Validators.required],
    item:[Validators.required],
    price:[Validators.required]
    });
  }


}
