import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  private API_PRODUCTOS = 'http://localhost:3000/games';

  // GET
  getProductos(): Observable<any> {
    return this.http.get(this.API_PRODUCTOS);
  }

  // POST
  postProductos(user: any): Observable<any> {
    return this.http.post(this.API_PRODUCTOS, user);
  }

  // PUT
  putProductos(user: any, id: number): Observable<any> {
    this.API_PRODUCTOS = `${this.API_PRODUCTOS}/${id}`

    return this.http.put(this.API_PRODUCTOS, user)
  }

  // Delete
  deleteProductos(id: number): Observable<any> {
    this.API_PRODUCTOS = `${this.API_PRODUCTOS}/${id}`

    return this.http.delete(this.API_PRODUCTOS)
  }
}
