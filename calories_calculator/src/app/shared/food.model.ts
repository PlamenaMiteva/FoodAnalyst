import { Nutrient } from './nutrient.model';
import { Deserializable } from './deserializable.model';

export class Food implements Deserializable {
    calories: number;
    totalWeight: number;
    dietLabels: string[];
    healthLabels: string[];
    cautions: string[];
    nutrients: Nutrient[] = [];
    totalNutrientsCal: Nutrient[] = [];

    // constructor(obj?: any) {
    //     Object.assign(this, obj);
    // }

    deserialize(input: any) {
        const _this = this;
        Object.assign(this, input);
        Object.keys(input.totalNutrients).forEach(key => {
            _this.nutrients.push(new Nutrient().deserialize(input.totalNutrients[key]));
        });
        Object.keys(input.totalNutrientsKCal).forEach(key => {
            _this.totalNutrientsCal.push(new Nutrient().deserialize(input.totalNutrientsKCal[key]));
        });
        return this;
    }
}
