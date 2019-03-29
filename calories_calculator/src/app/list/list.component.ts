import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular';
import { QuantitySummary } from '../summaries/quantity-summary';
import { NutritionSummary } from '../summaries/nutrition-summary';
import { FoodDataService } from '../shared/food-data-service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @ViewChild('listGrid', { read: IgxGridComponent })
  public grid: IgxGridComponent;
  public listItems = [];
  public quantitySummary = QuantitySummary;
  public nutritionSummary = NutritionSummary;

  ngOnInit() {
    this.listItems = this.foodDataService.recepieIngredients;
  }

  constructor(private foodDataService: FoodDataService) {
  }

  public calculateNutrition(newValue, rowId) {
    // const product = this.dataService.getProductById(rowId);
    // const defaultQuantity = product['Quantity'];
    // const defaultCalories = product['Calories'] / defaultQuantity;
    // const defaultFats = product['Fats'] / defaultQuantity;
    // const defaultCarbs = product['Carbs'] / defaultQuantity;
    // const defaultProteins = product['Proteins'] / defaultQuantity;

    // const row = this.grid.getRowByKey(rowId);
    // const cells = row.cells.toArray();
    // cells.find(cell => cell.column.field === 'Quantity').update(newValue);
    // cells.find(cell => cell.column.field === 'Calories').update(newValue * defaultCalories);
    // cells.find(cell => cell.column.field === 'Fats').update(newValue * defaultFats);
    // cells.find(cell => cell.column.field === 'Carbs').update(newValue * defaultCarbs);
    // cells.find(cell => cell.column.field === 'Proteins').update(newValue * defaultProteins);
  }

  public removeProduct(productId: number) {
    this.foodDataService.removeProductFromList(productId);
    // this.listItems = this.dataService.listItems;
  }
}
