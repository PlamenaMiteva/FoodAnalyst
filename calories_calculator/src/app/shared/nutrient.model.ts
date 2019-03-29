import { Deserializable } from './deserializable.model';

export class Nutrient implements Deserializable {
    label: string;
    quantity: number;
    unit: string;
    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}
