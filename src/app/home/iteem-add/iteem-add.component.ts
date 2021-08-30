import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  constructor(private fb:FormBuilder,private itemService: ItemService) { }

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
        console.log('data is saved');
      }, error=> {
        console.log('error occured');
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
  displayedColumns: string[] = ['position', 'itemname', 'availability', 'addescription', 'amount', 'image'];
  dataSource = ELEMENT_DATA;
  imageUrl="https://www.helpguide.org/wp-content/uploads/closeup-salad-in-bowl-held-in-hand-768.jpg";
}
const ELEMENT_DATA= [
  {position: 1, itemname: 'juice', availability: 'yes', addescription: 'banana', amount:'100',  image:'img'},
  
];

