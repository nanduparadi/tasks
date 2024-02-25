import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/users';
  private getapiUrl = 'http://localhost:3000/users?role=manager';
  private timesheetUrl = 'http://localhost:3000/timesheets';
  private projectUrl = '  http://localhost:3000/projects';
  private productUrl = '  http://localhost:3000/products';
  private dataUrl = 'http://localhost:3000/data';

  constructor(private http: HttpClient) {}
  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.dataUrl);
  }
  addData(data: any): Observable<any> {
    return this.http.post<any>(this.dataUrl, data);
  }
  updateData(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.dataUrl}/${id}`, data);
  }

  deleteData(id: number): Observable<any> {
    return this.http.delete<any>(`${this.dataUrl}/${id}`);
  }

  signUp(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }
  storeProjects(user: any): Observable<any> {
    return this.http.post(this.projectUrl, user);
  }
  getProjects() {
    return this.http.get(this.projectUrl);
  }
  addProduct(product: any) {
    return this.http.post(this.productUrl, product);
  }
  getAllProducts() {
    return this.http.get(this.productUrl);
  }
  timesheetApi(t: any): Observable<any> {
    return this.http.post(this.timesheetUrl, t);
  }
  // updateProject(id: number, updatedProject: any): Observable<any> {
  //   const updateUrl = `${this.projectUrl}/${id}`;
  //   return this.http.put(updateUrl,id);
  // }

  updateProject(id: number, updatedProject: any): Observable<any> {
    const updateUrl = `${this.projectUrl}/${id}`;
    return this.http.put(updateUrl, updatedProject);
  }
  updateProduct(id: number, updatedProduct: any): Observable<any> {
    const updateUrl = `${this.productUrl}/${id}`;
    return this.http.put(updateUrl, updatedProduct);
  }

  // duplicateProduct(product: Product, newName: string): Observable<Product> {
  //   // Assuming you have an endpoint for duplicating products
  //   const duplicateUrl = `${this.productUrl}/duplicate/${product.id}`;
  //   const duplicatedProduct = { ...product, productName: newName };

  //   return this.http.post<Product>(duplicateUrl, duplicatedProduct);
  // }
  duplicateProduct(product: any, newName: string): Observable<any> {
    const duplicateUrl = `${this.productUrl}/duplicate/${product.id}`;
    const duplicatedProduct = { ...product, productName: newName };

    return this.http.post<any>(duplicateUrl, duplicatedProduct);
  }

  deleteProject(id: number): Observable<any> {
    const deleteUrl = `${this.projectUrl}/${id}`;
    return this.http.delete(deleteUrl);
  }

  signIn(credentials: any): Observable<any> {
    return this.http.get(this.getapiUrl);
  }
}
