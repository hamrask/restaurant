import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItemService } from '../../shared/services/item.service';
@Component({
  selector: 'app-item-category',
  templateUrl: './item-category.component.html',
  styleUrls: ['./item-category.component.scss']
})
export class ItemCategoryComponent implements OnInit {
categoryForm: FormGroup
categories = [];
  constructor(private fb:FormBuilder,private itemService: ItemService) { }
  ngOnInit(): void {
    this.initForm();
    this.getAllCategories();
  }
  initForm(){
    this.categoryForm=this.fb.group({
      Category:['',Validators.required]
    });
  }
  saveCategory() {
    if (this.categoryForm.valid) {
      this.itemService.saveCategory(this.categoryForm.value).subscribe(data => {
        console.log('data is saved');
      }, error=> {
        console.log('error occured');
      })
    }
  }
  getAllCategories(){
    this.itemService.getAllCategory().subscribe(data =>{
      this.categories = data;
    });
  }
  displayedColumns: string[] = ['position', 'category', 'action'];
  dataSource = ELEMENT_DATA;
}
const ELEMENT_DATA= [
  {position: 1, category: 'juice', action: 'yes'},
  
];
