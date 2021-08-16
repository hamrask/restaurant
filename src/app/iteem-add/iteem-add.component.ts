import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iteem-add',
  templateUrl: './iteem-add.component.html',
  styleUrls: ['./iteem-add.component.scss']
})
export class IteemAddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['position', 'itemname', 'availability', 'addescription', 'amount', 'image'];
  dataSource = ELEMENT_DATA;
  imageUrl="https://www.helpguide.org/wp-content/uploads/closeup-salad-in-bowl-held-in-hand-768.jpg";
}
const ELEMENT_DATA= [
  {position: 1, itemname: 'juice', availability: 'yes', addescription: 'banana', amount:'100',  image:'img'},
  
];

