import { Injectable } from "@angular/core";
import { HttpParams } from "@angular/common/http";
import { IConfigParams } from './../shared/model/config-params.interface';

@Injectable({
    providedIn: 'root'
})
export class ConfigParamsService {

    constructor(){

    }

    configParams(config: IConfigParams){
        let httpParams = new HttpParams();
        if (config.page) {
            httpParams = httpParams.set('page', config.page.toString());
        }
        if (config.name) {
            httpParams = httpParams.set('name', config.name);
        }
        if (config.status) {
            httpParams = httpParams.set('status', config.status);
        }
        if (config.gender) {
            httpParams = httpParams.set('gender', config.gender);
        }

        return httpParams;
    }
}