import { Nutrient } from './nutrient.model';
import { Deserializable } from './deserializable.model';

export class Food implements Deserializable {
    name: string;
    calories: number;
    totalWeight: number;
    dietLabels: string[];
    healthLabels: string[];
    cautions: string[];
    fat: number; carbs: number; protein: number;
    // nutrients: Nutrient[] = [];
    fatNutirents: Nutrient[] = [];
    carbNutirents: Nutrient[] = [];
    vitaminNutirents: Nutrient[] = [];
    mineralNutirents: Nutrient[] = [];


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
            switch (input.totalNutrients[key].label) {
                case 'Saturated':
                case 'Trans':
                case 'Monounsaturated':
                case 'Polyunsaturated':
                _this.fatNutirents.push(new Nutrient().deserialize(input.totalNutrients[key]));
                  break;
                case 'Fiber':
                case 'Sugars':
                _this.carbNutirents.push(new Nutrient().deserialize(input.totalNutrients[key]));
                  break;
                  case 'Sodium':
                  case 'Calcium':
                  case 'Magnesium':
                  case 'Potassium':
                  case 'Iron':
                  case 'Zinc':
                  case 'Phosphorus':
                  _this.mineralNutirents.push(new Nutrient().deserialize(input.totalNutrients[key]));
                  break;
                  case 'Thiamin (B1)':
                  case 'Riboflavin (B2)':
                  case 'Niacin (B3)':
                  case 'Vitamin B6':
                  case 'Vitamin E':
                  case 'Folate (food)':
                  _this.vitaminNutirents.push(new Nutrient().deserialize(input.totalNutrients[key]));
                  break;
                default:
              }
        });
        // Object.keys(input.totalNutrientsKCal).forEach(key => {
        //     _this.totalNutrientsCal.push(new Nutrient().deserialize(input.totalNutrientsKCal[key]));
        // });
        return this;
    }
}
