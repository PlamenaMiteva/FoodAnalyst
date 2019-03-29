import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Food } from './food.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class FoodDataService {
    endpoint = 'https://api.edamam.com/api/nutrition-data';
    app_id = '7267d317';
    app_key = '31e2e8f118778b3afa64f9e849a9ce96';
    // httpOptions = {
    //     headers: new HttpHeaders({
    //         'Content-Type': 'application/json'
    //     })
    // };

    constructor(private httpClient: HttpClient) { }
    public searchProduct(searchText: string): Observable<Food> {
        const options = searchText ?
            {params: new HttpParams().
                    set('app_id', this.app_id).
                    set('app_key', this.app_key).
                    set('ingr', searchText)
            } : {};
        return this.httpClient.get(this.endpoint, options).pipe(map(res => new Food().deserialize(res)));
    }
  }

