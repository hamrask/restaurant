import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MenuService } from '../../shared/services/menu.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.scss']
})
export class AddMenuComponent implements OnInit {
menuForm: FormGroup
menu = [];
  constructor(private fb:FormBuilder,private menuService: MenuService, private toastr: ToastrService) { }
  ngOnInit(): void {
    this.initForm();
    this.getAllMenu();
  }
  initForm(){
    this.menuForm=this.fb.group({
    _id:[null],
    menuName:[Validators.required],
    item:[Validators.required],
    price:[Validators.required]
    });
  }
  saveMenu(){
    if (this.menuForm.valid) {
      this.menuService.saveMenu(this.menuForm.value).subscribe(data => {
        this.getAllMenu();
        this.menuForm.reset();
        this.toastr.success('Success', 'menu added successfully');
      }, error=> {
        console.log(error);
        this.toastr.error('Error', error?.error?.message);
      })

    }
  }
  getAllMenu(){
    this.menuService.getAllMenu().subscribe(data =>{
      this.menu = data;
    });
  }
  deleteMenu(menuId) {
    this.menuService.deleteMenuById(menuId).subscribe(data => {
      this.getAllMenu();
    });
  }
  editMenu(menuDetails) {
    this.menuForm.patchValue(menuDetails);
  }

}
