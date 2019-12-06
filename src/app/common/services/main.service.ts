import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });

@Injectable({
  providedIn: 'root'
})
export class MainService {
  recepiUrl = 'http://localhost:52100/api/Recepi/';
  userUrl = 'http://localhost:52100/api/User/';
  baseUrl = 'http://localhost:52100/api/Recepi/';

  constructor(private http: HttpClient) { }



  GetRecipes() {
    return this.http.get(this.recepiUrl + "GetRecepies", { headers: reqHeader });
  }

  GetRecipeById(Id) {
    return this.http.post(this.recepiUrl + "GetRecepiById", Id, { headers: reqHeader })
  }

  AddRecepi(model) {
    return this.http.post(this.recepiUrl + "AddRecepi", model, { headers: reqHeader });
  }

  DeleteRecepi(Id) {
    return this.http.delete(this.recepiUrl + "/" + Id, { headers: reqHeader });
  }

  Login(data: any) {
    return this.http.post(this.userUrl + '/login', data, { headers: reqHeader }).pipe()
  }

  Register(data: any) {
    return this.http.post(this.userUrl + '/register', data, { headers: reqHeader }).pipe()
  }

  GetAllUsers() {
    return this.http.get(this.userUrl + '/getAllUsers', { headers: reqHeader }).pipe();
  }
}
