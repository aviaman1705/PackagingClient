import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';
import { HttpBaseService } from './http-base.service';

@Injectable()
export class ProductDataService extends HttpBaseService {

    fireRequest(product: Product, method: string) {

        const links = product.links
            ? product.links.find(x => x.method === method)
            : null;

        switch (method) {
            case 'DELETE': {
                return super.delete(`${environment.apiUrl}products/Delete?productId=${product.productId}`);
            }
            case 'POST': {
                return super.add<Product>(product);
            }
            case 'PUT': {
                return super.update<Product>(links.href, product);
            }
            default: {
                console.log(`${links.method} not found!!!`);
                break;
            }
        }
    }
}
