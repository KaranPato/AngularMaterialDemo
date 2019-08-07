import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });

@Injectable({
  providedIn: 'root'
})
export class MainService {
  baseUrl = 'http://localhost:52100/api/Recepi/';

  constructor(private http: HttpClient) { }



  GetRecipes() {

    return this.http.get(this.baseUrl + "GetRecepies", { headers: reqHeader });
  }

  GetRecipeById(Id) {
    return this.http.post(this.baseUrl + "GetRecepiById", Id, { headers: reqHeader })
  }

  AddRecepi(model) {
    return this.http.post(this.baseUrl + "AddRecepi", model, { headers: reqHeader });
  }

  DeleteRecepi(Id) {
    return this.http.delete(this.baseUrl + "/" + Id, { headers: reqHeader });
  }
}
