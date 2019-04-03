import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FoodDataService } from '../shared/food-data-service';
import { IgxToastComponent, IgxToastPosition, IgxExpansionPanelComponent } from 'igniteui-angular';
import { Food } from '../shared/food.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild('panel', { read: IgxExpansionPanelComponent })
  public panel: IgxExpansionPanelComponent;
  @ViewChild('toast', { read: IgxToastComponent })
  public toast: IgxToastComponent;
  public food: Food;
  public searchText = '';

  constructor(private foodDataService: FoodDataService, private router: Router) {
  }

  public searchProduct() {
    this.foodDataService.searchProduct(this.searchText).subscribe(data => {
      this.food = data;
      this.food.name = this.searchText;
      console.log(data);
    });
  }

  public clearSearch() {
    this.searchText = '';
    this.food = new Food();
  }

  public addProduct() {
    this.foodDataService.recepieIngredients.push(this.food);
    this.toast.message = this.searchText + ' successfully added to recipe list';
    this.toast.position = IgxToastPosition.Middle;
    this.toast.show();
  }

  public showDetails() {
      this.panel.toggle();
  }
}
