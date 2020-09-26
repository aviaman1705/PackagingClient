import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { Place } from '../models/place.model';
import { ListItem } from '../models/list-item.model';
import { SearchProduct } from '../models/search-product.model';
import { ProductPlace } from '../models/product-place.model';
import { EditInventoryBalance } from '../models/edit-inventory-balance.model';
import { environment } from 'src/environments/environment';
import { IProduct } from '../interfaces/IProduct';
import { IProductPlace } from '../interfaces/IProduct-Place';

@Injectable()
export class ProductService {

  constructor(private httpClient: HttpClient) {

  }

  getPtoducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${environment.apiUrl}products/GetProducts`);
  }

  getProduct(productId: string): Observable<Product> {
    return this.httpClient.get<Product>(`${environment.apiUrl}products/GetProduct?productId=${productId}`);
  }

  insertProduct(newProduct: IProduct): Observable<Product> {
    return this.httpClient.post<Product>(`${environment.apiUrl}products/AddProduct`, newProduct);
  }

  updatePtoduct(product: IProduct): Observable<Product> {
    return this.httpClient.put<Product>(`${environment.apiUrl}products/UpdateProduct/`, product);
  }

  deleteProduct(productId: number): Observable<any> {
    return this.httpClient.delete<number>(`${environment.apiUrl}products/DeleteProduct?productId=${productId}`);
  }

  getPlacesListItem(): Observable<ListItem[]> {
    return this.httpClient.get<ListItem[]>(`${environment.apiUrl}products/GetPlacesListItem`);
  }

  searchPlaces(place: string): Observable<Place[]> {
    return this.httpClient.get<Place[]>(`${environment.apiUrl}products/SearchPlaces?place=${place}`);
  }

  getProductsListItem(): Observable<ListItem[]> {
    return this.httpClient.get<ListItem[]>(`${environment.apiUrl}products/GetProductsListItem`);
  }

  insertProductPlace(newProductPlace: IProductPlace): Observable<ProductPlace> {
    return this.httpClient.post<ProductPlace>(`${environment.apiUrl}products/AddProductPlace`, newProductPlace);
  }

  getProductsPlaces(): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiUrl}products/GetProductsPlaces`);
  }

  searchProductsPlaces(sku: string, warehousesTypeId: number): Observable<SearchProduct> {
    return this.httpClient.get<SearchProduct>(`${environment.apiUrl}products/SearchProductsPlaces?sku=${sku}&warehousesTypeId=${warehousesTypeId}`);
  }

  getInventoryBalance(productPlaceId: number): Observable<EditInventoryBalance> {
    return this.httpClient.get<EditInventoryBalance>(`${environment.apiUrl}products/GetInventoryBalance?productPlaceId=${productPlaceId}`);
  }

  updateInventoryBalance(inventoryBalance: EditInventoryBalance): Observable<SearchProduct> {
    return this.httpClient.put<SearchProduct>(`${environment.apiUrl}products/UpdateInventoryBalance/`, inventoryBalance);
  }
}
