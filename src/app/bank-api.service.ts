import { IConfigParams } from './shared/model/config-params.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Atribute } from './shared/model/atribute.model';
import { catchError, map, take } from 'rxjs/operators';
import { ConfigParamsService } from './core/config-params.service';
import { TrackHttpError } from './trackHttpError';
import { url } from './app.api';

@Injectable({
    providedIn: 'root',
})
export class BankApiService {
    [x: string]: any;

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

    public searchCharacters(query = ''):Observable<Atribute[] | TrackHttpError> {
        const filter = `${url}?name=${query}`;
        return this.http.get<Atribute[]>(filter);
      }
}