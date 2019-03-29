import { Injectable } from '@angular/core';
import { food_data } from './food_data';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    static instance: DataService;
    public listItems = [];

    constructor() {
        if (!DataService.instance) {
            DataService.instance = this;
        }
        return DataService.instance;
    }

    getData(): any[] {
        return food_data;
    }
    getProductById(productId: number) {
        return food_data.find(item => item['Id'] === productId);
    }
    findProductInList(productId: number) {
        return this.listItems.find(item => item['Id'] === productId);
    }
    addProductToList(productId: number) {
            this.listItems.push(this.getProductById(productId));
    }
    removeProductFromList(productId: number) {
        this.listItems = this.listItems.filter(item => item['Id'] !== productId);
    }
    searchProducts(searchText: string) {
        return food_data.filter(function (item) {
            return item.Product.toString().toLowerCase().includes(searchText.toLowerCase());
        });
    }
}
