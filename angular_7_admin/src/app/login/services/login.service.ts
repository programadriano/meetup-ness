
import { Injectable } from '@angular/core';
import { HttpUtilService } from '../../share/services/http-util-service';
import { Http, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginUrl = 'api/login';
  constructor(private http: Http, private httpUtil: HttpUtilService) {}

  logIn(user, password): Observable<any> {

    const url = this.httpUtil.url(this.loginUrl);

    const params = JSON.stringify(
      { 'ID': user, 'chaveAcesso': password });


    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const options = new RequestOptions({ headers: headers });

    return this.http
      .post(url, params, options)
      .map(this.httpUtil.extrairDados)
      .catch(this.httpUtil.processarErros);
  }
}
