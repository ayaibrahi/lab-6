import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Insertproduct } from '../../models/insertproduct';
import {  Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InsertproductsService {


  constructor( private http:HttpClient) { }
  getall(){
    return this.http.get<Insertproduct[]>('http://localhost:3000/insertproduct')
  }

  createnewproduct(product:Insertproduct):Observable<any>{
    return this.http.post<any>(`http://localhost:3000/insertproduct`, JSON.stringify(product))
  }
  deletepro(productid:string):Observable<any>{
    return this.http.delete<any>(`http://localhost:3000/insertproduct/${productid}`)
  }
  updateProduct(prod: any): Observable<any> {
    return this.http.put<any>(`http://localhost:3000/products/${prod.id}`, JSON.stringify(prod), {
      headers: new HttpHeaders({
        'content-type': 'application/json',
      }),
    });
  }

  // edit(id : number){
  //   return this.http.get<Insertproduct>('http://localhost:3000/insertproduct/${id}')
  // }
  // delete(id : number){
  //   return this.http.delete<Insertproduct>('http://localhost:3000/insertproduct')
  // }

}
