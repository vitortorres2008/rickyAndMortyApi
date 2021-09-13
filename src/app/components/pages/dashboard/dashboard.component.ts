import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BankApiService } from '@app/bank-api.service';
import { Atribute } from '@app/shared/model/atribute.model';
import { IConfigParams } from '@app/shared/model/config-params.interface';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [BankApiService]
})
export class DashboardComponent implements OnInit {

  public atribute: Array<Atribute> = [];

  public config: IConfigParams = { 
    page: 1,
  }
  public listFilter!: FormGroup;

  constructor(
    private bankApiService: BankApiService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.listFilter = this.fb.group({
      text: ['']
    });

    this.listFilter.get('text')?.valueChanges
    .pipe(debounceTime(400))
    .subscribe((val: string) => {
      this.config.name = val;
    })

    this.getForPage();
  }

  next() {
    if (this.config.page < 34){
      this.config.page++;
      this.getForPage();
    } else {
      alert("The end!!!");
      this.config.page = 1;
      this.getForPage();
    }
    
  }

  back() {
    if (this.config.page > 1){
    this.config.page--;
    this.getForPage();
    } else {
    alert("Home page!!!");
    }
  }

  public getForPage(){
    this.config.page;
    this.bankApiService.getAll(this.config)
    .subscribe((atribute: Atribute[]) => {
      console.log('funciona!');
      this.atribute = atribute;
  }, error => {})
  }
}

