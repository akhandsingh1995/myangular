import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class MyserviceService {
  constructor(private http: HttpClient) { }

  userRegister(body:any):Observable<any> {

    return this.http.post('http://localhost:4400/users/register', body);
  }

  userLogin(data) : Observable<any> {

    return this.http.post('http://localhost:4400/users/login',data);
  }

  getUsers(): Observable<any> {

    return this.http.get('http://localhost:4400/users/');
  }

  getProduct(): Observable<any> {
    
    return this.http.get('http://localhost:4400/products/')
  }

  postUsers(data:any): Observable<any> {

    return this.http.post('http://localhost:4400/users/create', data);
  }

  postProduct(data:any): Observable<any> {

    return this.http.post('http://localhost:4400/products/create', data);
  }

  deleteUsers(id:any): Observable<any> {
    
    return this.http.delete('http://localhost:4400/users/delete/' +id);
  }

  deleteProducts(id:any): Observable<any> {

    return this.http.delete('http://localhost:4400/products/delete/' +id);
  }

  updateUsers(id,body): Observable<any> {

    return this.http.put('http://localhost:4400/users/update/' +id,body);
  }

  updateProducts(id,body): Observable<any> {

    return this.http.put('http://localhost:4400/products/update/' +id,body);
  }
 
}
