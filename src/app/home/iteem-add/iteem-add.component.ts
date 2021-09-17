import { Component, OnInit ,Inject, ElementRef, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ItemService } from '../../shared/services/item.service';
import {MatDialog} from '@angular/material/dialog';
import { UpdateStockComponent } from '../update-stock/update-stock.component';


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
  @ViewChild('form') private form: NgForm;
  displayedColumns: string[] = ['position', 'itemname', 'availability', 'addescription', 'amount','action','stock'];
  constructor(private fb: FormBuilder,
              private itemService: ItemService,
              private toastr: ToastrService,
              public dialog: MatDialog) { }
  ngOnInit(): void {
    this.initForm();
    this.getAllItems();
    this.getAllCategoryIds();
    this.getAllSectionsIds();
  }
  initForm() {
    this.itemForm = this.fb.group({
      _id: [null],
      itemName: ['', Validators.required],
      isAvailable: ['true', Validators.required],
      description: [''],
      amount: ['', Validators.required],
      categoryId: ['', Validators.required],
      sectionId: ['', Validators.required],
      photoUrl: [''],
      quantity: [1]
    });
  }
  saveItem() {
    if (this.itemForm.valid) {
      this.itemService.saveItem(this.itemForm.value).subscribe(data => {
        this.getAllItems();
        this.itemForm.reset();
        this.itemForm.get('isAvailable').setValue(true);
        this.form.resetForm();
        this.toastr.success('Success', 'Item added successfully');
      }, error => {
        console.log(error);
        this.toastr.error('Error', error?.error?.message);
      })
    }
  }
  getAllItems() {
    this.itemService.getAllItem().subscribe(data => {
      this.items = data;
    });
  }
  getAllCategoryIds() {
    this.itemService.getAllCategory().subscribe(data => {
      this.categoryIds = data;
    });
  }
  getAllSectionsIds() {
    this.itemService.getAllSection().subscribe(data => {
      this.sectionIds = data;
    });
  }
  deleteItem(itemId) {
    this.itemService.deleteItemById(itemId).subscribe(data => {
      this.getAllItems();
    });
  }
  editItem(itemDetails) {
    this.itemForm.patchValue(itemDetails);
  }
  updateStock(itemDetails): void {
    itemDetails.itemId = itemDetails._id;
    const dialogRef = this.dialog.open(UpdateStockComponent, {
      width: '450px',
      data: itemDetails,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getAllItems();
    });
  }

  imageUrl = "https://www.helpguide.org/wp-content/uploads/closeup-salad-in-bowl-held-in-hand-768.jpg";
}

