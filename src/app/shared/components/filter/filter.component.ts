import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})

export class FilterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void { }

  onSearch(value: string) {
    if (value && value.length > 3) {
      this.router.navigate([], 
        {queryParams: { q: value},
      });
      console.log(value)
    }
    
  }
}