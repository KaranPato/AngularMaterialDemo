import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '../../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  baseUrl = 'http://localhost:52100/api/Recepi/';

  constructor(private http: HttpClient) { }

  GetRecipes() {
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(this.baseUrl + "GetRecepies", { headers: reqHeader });
  }

  AddRecepi(model) {
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.baseUrl + "AddRecepi", model, { headers: reqHeader });
  }

  DeleteRecepi(Id) {
    var reqHeader = new HttpHeaders({ 'Content-Type': 'aplication/json' });
    return this.http.delete(this.baseUrl + "/" + Id, { headers: reqHeader });
  }
}
