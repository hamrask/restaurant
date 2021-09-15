import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CommonService } from './shared/services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'Restaurant-beta';
  showLoader = new Subject<boolean>();
  constructor(public common: CommonService) {

  }
  ngOnInit(): void {
    this.showLoader = this.common.isLoading;
  }
}
