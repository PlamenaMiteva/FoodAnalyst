import { Injector } from '@angular/core';
import { IgxNumberSummaryOperand, IgxSummaryResult } from 'igniteui-angular';
import { DataService } from '../data.service';

export class CaloriesSummary extends IgxNumberSummaryOperand {
  dataService: DataService;

  constructor() {
    super();
    const injector = Injector.create([{ provide: DataService, useClass: DataService, deps: [] }]);
    this.dataService = injector.get(DataService);
  }

  public operate(data?: any[]): IgxSummaryResult[] {
    const items = this.dataService.listItems;
    let totalQuantity = 0;
    let totalCalories = 0;
    items.forEach(function(item) {
      totalQuantity += item.Quantity;
      totalCalories += item.Calories;
  });
    const result = [];
    result.push({
      key: 'total',
      label: 'Total',
      summaryResult: totalCalories.toFixed(0)
    });
    result.push({
      key: 'avgCalories',
      label: 'Per 100g',
      summaryResult: (items.length ? (totalCalories / totalQuantity) * 100 : 0).toFixed(0)
    });

    return result;
  }
}
