import { Product } from './product.model';
import { Place } from './place.model';

export class ProductPlace {
    productId: number;
    product: Product;
    placeId:number;
    place:Place;
    count:number;
    createdDate: Date;
    instruction: string;
}
