import { Injectable } from '@angular/core';
import { HttpUtilService } from 'src/app/share/services/http-util-service';
import { Http } from '@angular/http';
import { Products } from 'src/app/models/products';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  private loginUrl = 'api/produtos';


  constructor(private http: Http, private httpUtil: HttpUtilService) { }

  getAll(): Observable<Products> {
    const url = this.httpUtil.url(this.loginUrl);

    return this.http
      .get(url, this.httpUtil.headers())
      .map(this.httpUtil.extrairDados)
      .catch(this.httpUtil.processarErros);
  }
}
