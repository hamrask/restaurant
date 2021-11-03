import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReportService } from 'src/app/shared/services/report.service';

@Component({
  selector: 'app-bill-report',
  templateUrl: './bill-report.component.html',
  styleUrls: ['./bill-report.component.scss']
})
export class BillReportComponent implements OnInit {
  date;
  searchText = new FormControl('');
  items = [];
  netTotal;
  constructor(private report: ReportService) { }

  ngOnInit(): void {
    this.getReport();
    this.searchText.valueChanges.subscribe(data => {
      this.filterItems(data);
    });
  }
  filterItems(text) {
    this.dataSource = this.items.filter(x => x.itemName.toLowerCase().includes(text));
  }
  displayedColumns: string[] = ['position', 'item', 'total quantity', 'total amount'];
  dataSource = [];
  getReport() {
    if (!this.date) {
      this.date = new Date().toISOString();
    } else {
      this.date = new Date(this.date).toISOString();
    }
    this.report.getReport(this.date).subscribe(data => {
      this.dataSource = this.items = data.list;
    this.netTotal = data.total;
    });

  }
}




