import { Component, OnInit } from '@angular/core';
import { BankApiService } from '@app/bank-api.service';
import { Atribute } from '@app/shared/model/atribute.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [BankApiService]
})
export class DashboardComponent implements OnInit {

  public atribute: Array<Atribute> = [];

  constructor(private bankApiService: BankApiService) { }

  ngOnInit() {
    this.bankApiService.getAll().then((atribute: Atribute[])=>{
      console.log('funciona!')
      this.atribute = atribute;

    })
    .catch((param:any)=>{
      console.log(param);
    })
  }  
}

