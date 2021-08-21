import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-iteem-add',
  templateUrl: './iteem-add.component.html',
  styleUrls: ['./iteem-add.component.scss']
})
export class IteemAddComponent implements OnInit {
  selectionForm: FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.selectionForm=this.fb.group({
      itemName:[Validators.required],
      availability:[Validators.required],
      description:[Validators.required],
      amount:[Validators.required],
      photoUrl:[Validators.required]

});
  }
  displayedColumns: string[] = ['position', 'itemname', 'availability', 'addescription', 'amount', 'image'];
  dataSource = ELEMENT_DATA;
  imageUrl="https://www.helpguide.org/wp-content/uploads/closeup-salad-in-bowl-held-in-hand-768.jpg";
}
const ELEMENT_DATA= [
  {position: 1, itemname: 'juice', availability: 'yes', addescription: 'banana', amount:'100',  image:'img'},
  
];

