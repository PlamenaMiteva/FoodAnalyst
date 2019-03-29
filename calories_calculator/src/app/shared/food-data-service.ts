import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Food } from './food.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class FoodDataService {
    static instance: FoodDataService;
    endpoint = 'https://api.edamam.com/api/nutrition-data';
    app_id = '7267d317';
    app_key = '31e2e8f118778b3afa64f9e849a9ce96';
    recepieIngredients: Food[] = [];

    constructor(private httpClient: HttpClient) {
        if (!FoodDataService.instance) {
            FoodDataService.instance = this;
        }
        return FoodDataService.instance;
    }

    public searchProduct(searchText: string): Observable<Food> {
        const options = searchText ?
            {params: new HttpParams().
                    set('app_id', this.app_id).
                    set('app_key', this.app_key).
                    set('ingr', searchText)
            } : {};
        return this.httpClient.get(this.endpoint, options).pipe(map(res => new Food().deserialize(res)));
    }

    removeProductFromList(productId: number) {
        this.recepieIngredients = this.recepieIngredients.filter(item => item['Id'] !== productId);
    }
  }

