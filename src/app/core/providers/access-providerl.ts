import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, timeout, map } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class AccessProviders {
    constructor(private http: HttpClient) {}

    postData(body: any, file: string): Observable<any> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=UTF-8'
        });
        return this.http.post(environment.apiHostUrl+file, JSON.stringify(body), { headers })
            .pipe(
                timeout(59000),
                map(res => res)
            );
    }
}