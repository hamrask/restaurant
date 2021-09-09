import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ItemService } from '../../shared/services/item.service';
@Component({
  selector: 'app-item-category',
  templateUrl: './item-category.component.html',
  styleUrls: ['./item-category.component.scss']
})
export class ItemCategoryComponent implements OnInit {
  title = 'Category';
categoryForm: FormGroup;
categories = [];
displayedColumns: string[] = ['position', 'category', 'action'];
  constructor(private fb:FormBuilder,private itemService: ItemService, private toastr: ToastrService) { }
  ngOnInit(): void {
    this.initForm();
    this.getAllCategories();
  }
  initForm(){
    this.categoryForm=this.fb.group({
      _id:[null],
      categoryName:['',Validators.required]
    });
  }
  saveCategory() {
    if (this.categoryForm.valid) {
      this.itemService.saveCategory(this.categoryForm.value).subscribe(data => {
        this.getAllCategories();
        this.categoryForm.reset();
        this.toastr.success('Success', 'Category added successfully');
      }, error=> {
        console.log(error);
        this.toastr.error('Error', error?.error?.message);
      })
    }
  }
  getAllCategories(){
    this.itemService.getAllCategory().subscribe(data =>{
      this.categories = data;
    });
  }
  deleteCategory(categoryId) {
    this.itemService.deleteCategoryById(categoryId).subscribe(data => {
      this.getAllCategories();
    });
  }
  editCategory(categoryDetails) {
    this.categoryForm.patchValue(categoryDetails);    
  }
}

