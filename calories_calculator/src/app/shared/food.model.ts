import { Nutrient } from './nutrient.model';
import { Deserializable } from './deserializable.model';

export class Food implements Deserializable {
    name: string;
    calories: number;
    totalWeight: number;
    dietLabels: string[];
    healthLabels: string[];
    cautions: string[];
    nutrients: Nutrient[] = [];
    fat: number; carbs: number; protein: number;
    // totalEnergy: Nutrient;
    // totalFat: Nutrient;
    // totalCarbs: Nutrient;
    // totalProtein: Nutrient;
    // totalNutrientsCal: Nutrient[] = [];

    deserialize(input: any) {
        const _this = this;
        Object.assign(this, input);
        this.fat = input.totalNutrientsKCal['FAT_KCAL']['quantity'];
        this.protein = input.totalNutrientsKCal['PROCNT_KCAL']['quantity'];
        // this.carbs = input.totalNutrientsKCal['CHOCDF_KCAL']['quantity'];
        // this.totalEnergy = new Nutrient().deserialize(input.totalNutrientsKCal['ENERC_KCAL']);
        // this.totalFat = new Nutrient().deserialize(input.totalNutrientsKCal['FAT_KCAL']);
        // this.totalCarbs = new Nutrient().deserialize(input.totalNutrientsKCal['CHOCDF_KCAL']);
        // this.totalProtein = new Nutrient().deserialize(input.totalNutrientsKCal['PROCNT_KCAL']);
        Object.keys(input.totalNutrients).forEach(key => {
            _this.nutrients.push(new Nutrient().deserialize(input.totalNutrients[key]));
        });
        // Object.keys(input.totalNutrientsKCal).forEach(key => {
        //     _this.totalNutrientsCal.push(new Nutrient().deserialize(input.totalNutrientsKCal[key]));
        // });
        return this;
    }
}
