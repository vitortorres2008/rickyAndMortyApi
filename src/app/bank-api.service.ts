import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Atribute } from './shared/model/atribute.model';

@Injectable()
export class BankApiService {

    constructor(private http: HttpClient){

    }

    public getAll(): Promise<Atribute[]> {
        return this.http.get('http://localhost:3000/results')
        // return this.http.get('https://rickandmortyapi.com/api/character')
        .toPromise()
        .then()
    }
}