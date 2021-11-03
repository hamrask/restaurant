import { Component, OnInit ,Inject, ElementRef, ViewChild} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ItemService } from '../../shared/services/item.service';
import {MatDialog} from '@angular/material/dialog';
import { UpdateStockComponent } from '../update-stock/update-stock.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-iteem-add',
  templateUrl: './iteem-add.component.html',
  styleUrls: ['./iteem-add.component.scss']
})
export class IteemAddComponent implements OnInit {
  itemForm: FormGroup;
  items:any;
  allItems = [];
  categoryIds = [];
  sectionIds = [];
  @ViewChild('form') private form: NgForm;
  displayedColumns: string[] = ['position', 'itemname', 'availability', 'addescription', 'amount','action','stock'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchTextControl = new FormControl('');
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
    this.searchTextControl.valueChanges.subscribe(data => {
      this.filterItems(data);
    });
  }
  filterItems(searchText) {
    const filter = this.allItems.filter(x => x.itemName.toLowerCase().includes(searchText.toLowerCase()));
    this.items = new MatTableDataSource<Element>(filter);
    this.items.paginator = this.paginator;
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
      this.allItems = data;
      this.items = data;
      this.items = new MatTableDataSource<Element>(data);
      this.items.paginator = this.paginator;
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

