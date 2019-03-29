import { Injector } from '@angular/core';
import { IgxNumberSummaryOperand, IgxSummaryResult } from 'igniteui-angular';
import { DataService } from '../data.service';

export class NutritionSummary extends IgxNumberSummaryOperand {
  dataService: DataService;

  constructor() {
    super();
    const injector = Injector.create([{ provide: DataService, useClass: DataService, deps: [] }]);
    this.dataService = injector.get(DataService);
  }

  public operate(data?: any[]): IgxSummaryResult[] {
    const items = this.dataService.listItems;
    let totalQuantity = 0;
    items.forEach(function(item) {
      totalQuantity += item.Quantity;
  });
    const result = [];
    result.push({
      key: 'total',
      label: 'Total',
      summaryResult: IgxNumberSummaryOperand.sum(data).toFixed(2) + 'g'
    });
    result.push({
      key: 'nutrition',
      label: 'Per 100g',
      summaryResult: (items.length ? (IgxNumberSummaryOperand.sum(data) / totalQuantity) * 100 : 0).toFixed(2) + 'g'
    });

    return result;
  }
}
