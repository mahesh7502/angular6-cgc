import { MyTableDataSource } from './../my-table/my-table-datasource';
import { MyTableComponent } from './../my-table/my-table.component';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  sample: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', sample: "text"},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He',  sample: "text"},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li',  sample: "text"},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be',  sample: "text"},
];

@Component({
  selector: 'app-my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.css'],
})

export class MyDashboardComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'sample'];
  dataSource = ELEMENT_DATA;
  constructor(private breakpointObserver: BreakpointObserver) {}

  
}
