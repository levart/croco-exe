import { Inject, Injectable } from '@angular/core';
import { HttpBackend, HttpClient, HttpParams } from '@angular/common/http';
import { ENV_CONFIG, IEnvironment } from '../../config';
import { concatMap, Observable, of } from 'rxjs';
import { IBaseService } from './base-service.interface';

@Injectable({
    providedIn: 'root',
})
export class BaseService implements IBaseService {
    private baseUrl: string;

    constructor(
        private http: HttpClient,
        @Inject(ENV_CONFIG) private config: IEnvironment,
        private httpBackend: HttpBackend
    ) {
        this.baseUrl = config.environment.apiUrl;
    }

    get<T>(url: string, parameters?: { [key: string]: number | string }): Observable<T> {
        const options = {
            params: this.getHttpParams(parameters),
        };
        return this.http.get<T>(`${this.baseUrl}${url}`, options).pipe(
            concatMap((res: T) => {
                return of(res);
            })
        );
    }

    private getHttpParams(parameters: any) {
        let httpParams = new HttpParams();

        function encodeValue(value: string) {
            if (value && value.toString() === '[object Object]') {
                return JSON.stringify(value);
            } else {
                return value;
            }
        }

        for (const key in parameters) {
            if (!parameters.hasOwnProperty(key)) {
                continue;
            }
            const val = parameters[key];
            if (val != null && val != 'undefined') {
                if (Array.isArray(val)) {
                    val.forEach((element: any) => {
                        httpParams = httpParams.append(key, encodeValue(element));
                    });
                } else {
                    httpParams = httpParams.append(key, encodeValue(val));
                }
            }
        }
        return httpParams;
    }
}
