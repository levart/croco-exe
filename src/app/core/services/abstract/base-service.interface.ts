import { Observable } from 'rxjs';

export declare interface IBaseService {
    get<T>(url: string, parameters?: { [key: string]: number | string }): Observable<any>;
}
