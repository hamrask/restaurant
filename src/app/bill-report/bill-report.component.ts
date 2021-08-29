import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill-report',
  templateUrl: './bill-report.component.html',
  styleUrls: ['./bill-report.component.scss']
})
export class BillReportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['position', 'time', 'billno', 'tableno', 'total', 'user', 'action'];
  dataSource = ELEMENT_DATA;
}
const ELEMENT_DATA= [
  {position: 1, time: '10.30', billno: 'a-212', tableno: '21', total:'1300',  user:'fahad', action:'dd'},
  
];

