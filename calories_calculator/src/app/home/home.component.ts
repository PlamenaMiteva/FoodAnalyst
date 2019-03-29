import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FoodDataService } from '../shared/food-data-service';
import { IgxToastComponent, IgxToastPosition, IgxCardComponent } from 'igniteui-angular';
import { Food } from '../shared/food.model';
import { Nutrient } from '../shared/nutrient.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('toast', { read: IgxToastComponent })
  public toast: IgxToastComponent;
  @ViewChild('card', { read: IgxCardComponent })
  public card: IgxCardComponent;
  public food: Food;
  public totalEnergy: Nutrient; totalFat: Nutrient; totalCarbs: Nutrient; totalProtein: Nutrient;
  public searchText = '';

  ngOnInit() {
    // this.foodDataService.getProducts().subscribe(data => {
    //   this.data = data;
    // });
  }

  constructor(private foodDataService: FoodDataService, private router: Router) {
  }

  public searchProduct() {
    this.foodDataService.searchProduct(this.searchText).subscribe(data => {
      this.food = data;
      this.totalEnergy = this.food.totalNutrientsCal.find(item => item.label === 'Energy');
      this.totalFat = this.food.totalNutrientsCal.find(item => item.label === 'Calories from fat');
      this.totalCarbs = this.food.totalNutrientsCal.find(item => item.label === 'Calories from carbohydrates');
      this.totalProtein = this.food.totalNutrientsCal.find(item => item.label === 'Calories from protein');
      console.log(data);
    });
  }

  public clearSearch() {
    this.food = new Food();
  }

  public addProduct(productId: number) {
  //   const listItem = this.dataService.findProductInList(productId);
  //   if (!listItem) {
  //     this.dataService.addProductToList(productId);
  //     const item = this.dataService.getProductById(productId);
  //     this.toast.message = item.Product + ' successfully added to recipe list';
  //   } else {
  //     const item = this.dataService.getProductById(productId);
  //     this.toast.message = item.Product + ' already added to recipe list';
  //   }
  //   this.toast.position = IgxToastPosition.Middle;
  //   this.toast.show();
  }
}
