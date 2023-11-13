import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Expense} from "../../interfaces/expense";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  tableHeader: string = 'header-dark';
  tableTheme: string = 'ion-border';
  records: any;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get<Expense>('/../../assets/data/records.json')
      .subscribe((res) => {
        console.log(res)
        this.records = res;
      });
  }

}
