import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { MyTableDataSource } from './my-table-datasource';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css'],
})
//export class MyTableComponent implements OnInit {
  export class MyTableComponent {

    rows;
    expanded = {};
    timeout: any;
  
    constructor() {
      this.fetch((data) => {
        this.rows = data;
      });
    }
  
    onPage(event) {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        console.log('paged!', event);
      }, 100);
    }
  
    fetch(cb) {
      const req = new XMLHttpRequest();
      req.open('GET', `/angular6-cgc/src/assets/100k.json`);
  
      req.onload = () => {
        const rows = JSON.parse(req.response);
  
        for(const row of rows) {
          row.height = Math.floor(Math.random() * 80) + 50;
        }
  
        cb(rows);
      };
  
      req.send();
    }
  
    getRowHeight(row) {
      return row.height;
    }
  
  }