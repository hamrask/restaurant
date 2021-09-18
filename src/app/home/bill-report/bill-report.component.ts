import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/shared/services/report.service';

@Component({
  selector: 'app-bill-report',
  templateUrl: './bill-report.component.html',
  styleUrls: ['./bill-report.component.scss']
})
export class BillReportComponent implements OnInit {

  constructor(private report: ReportService) { }

  ngOnInit(): void {
    this.getReport();
  }
  displayedColumns: string[] = ['position', 'item', 'total'];
  dataSource = [];
  getReport() {
    this.report.getReport().subscribe(data => {
      this.dataSource = data;
    });
  }
}




