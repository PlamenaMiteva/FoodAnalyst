import { IgxNumberSummaryOperand, IgxSummaryResult } from 'igniteui-angular';

export class QuantitySummary extends IgxNumberSummaryOperand {
  constructor() {
    super();
  }

  public operate(data?: any[]): IgxSummaryResult[] {
    const result = [];
    result.push({
      key: 'total',
      label: 'Total',
      summaryResult: IgxNumberSummaryOperand.sum(data) + 'g'
    });

    return result;
  }
}
