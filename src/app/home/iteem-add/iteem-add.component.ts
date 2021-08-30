import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ItemService } from '../../shared/services/item.service';


@Component({
  selector: 'app-iteem-add',
  templateUrl: './iteem-add.component.html',
  styleUrls: ['./iteem-add.component.scss']
})
export class IteemAddComponent implements OnInit {
  itemForm: FormGroup;
  items = [];
  categoryIds = [];
  sectionIds = [];
  displayedColumns: string[] = ['position', 'itemname', 'availability', 'addescription', 'amount', 'image'];
  constructor(private fb:FormBuilder,private itemService: ItemService , private toastr: ToastrService) { }
  ngOnInit(): void {
    this.initForm();
    this.getAllItems();
    this.getAllCategoryIds();
    this.getAllSectionsIds();
  }
  initForm(){
    this.itemForm=this.fb.group({
      itemName:['',Validators.required],
      availability:['true',Validators.required],
      description:['',Validators.required],
      amount:['',Validators.required],
      categoryId:['',Validators.required],
      sectionId:['',Validators.required],
      photoUrl:['',Validators.required]

});
  }
  saveItem() {
    if (this.itemForm.valid) {
      this.itemService.saveItem(this.itemForm.value).subscribe(data => {
        this.getAllItems();
        this.getAllCategoryIds();
        this.getAllSectionsIds();
        this.itemForm.reset();
        this.toastr.success('Success', 'Item added successfully');
      }, error=> {
        console.log(error);
        this.toastr.error('Error', error?.error?.message);
      })
    }
  }
  getAllItems(){
    this.itemService.getAllItem().subscribe(data => {
      this.items = data;
    });
  }
  getAllCategoryIds(){
    this.itemService.getAllCategory().subscribe(data => {
      this.categoryIds = data;
    });
  }
  getAllSectionsIds(){
    this.itemService.getAllSection().subscribe(data => {
      this.sectionIds = data;
    });
  }
  deleteItem(itemId) {
    this.itemService.deleteItemById(itemId).subscribe(data => {
      this.getAllItems();
      this.getAllCategoryIds();
      this.getAllSectionsIds();
    });
  }
  editItem(itemDetails)  {
    this.itemForm.patchValue(itemDetails);
  }
  dataSource = ELEMENT_DATA;
  imageUrl="https://www.helpguide.org/wp-content/uploads/closeup-salad-in-bowl-held-in-hand-768.jpg";
}
const ELEMENT_DATA= [
  {position: 1, itemname: 'juice', availability: 'yes', addescription: 'banana', amount:'100',  image:'img'},
  
];

