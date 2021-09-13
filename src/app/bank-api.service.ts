import { IConfigParams } from './shared/model/config-params.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Atribute } from './shared/model/atribute.model';
import { map } from 'rxjs/operators';
import { ConfigParamsService } from './core/config-params.service';

const url = 'https://rickandmortyapi.com/api/character/';

@Injectable()
export class BankApiService {

    constructor(
        private http: HttpClient,
        private configService: ConfigParamsService
    ){ }

    public getAll(config: IConfigParams): Observable<Atribute[]> {
        const configParams = this.configService.configParams(config);
        return this.http.get<Atribute[]>(url, {params: configParams}).pipe(map((x: any) => {
            return x.results;
        }))
    }
    
    public getName(name: string): Promise<Atribute[]>{
        return this.http.get(`https://rickandmortyapi.com/api/character/`)
        .toPromise()
        .then()
    }
}