import { Injector } from '@angular/core';
import { IgxNumberSummaryOperand, IgxSummaryResult } from 'igniteui-angular';
import { FoodDataService } from '../shared/food-data-service';

export class NutritionSummary extends IgxNumberSummaryOperand {
  dataService: FoodDataService;

  constructor() {
    super();
    const injector = Injector.create([{ provide: FoodDataService, useClass: FoodDataService, deps: [] }]);
    this.dataService = injector.get(FoodDataService);
  }

  public operate(data?: any[]): IgxSummaryResult[] {
    const items = this.dataService.recepieIngredients;
    let totalQuantity = 0;
    items.forEach(function(item) {
      totalQuantity += item.totalWeight;
  });
    const result = [];
    result.push({
      key: 'total',
      label: 'Total',
      summaryResult: IgxNumberSummaryOperand.sum(data).toFixed(2) + 'kcal'
    });
    result.push({
      key: 'nutrition',
      label: 'Per 100g',
      summaryResult: (items.length ? (IgxNumberSummaryOperand.sum(data) / totalQuantity) * 100 : 0).toFixed(2) + 'kcal'
    });

    return result;
  }
}
