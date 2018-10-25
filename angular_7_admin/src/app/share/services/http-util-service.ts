import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable()
export class HttpUtilService {
  constructor(private router: Router) { }

  private API_URL = environment.API_URL;

  url(path: string) {
    return this.API_URL + path;
  }

  headers() {
    const headersParams = new Headers({ 'Content-Type': 'application/json' });

    if (localStorage['token']) {
      const authToken = localStorage['token'];
      headersParams.append('Authorization', `Bearer ${authToken}`);
    }

    const options = new RequestOptions({ headers: headersParams });
    return options;
  }

  extrairDados(response: Response) {
    const data = response.json();
    return data || {};
  }

  processarErros(erro: any) {
    if (erro.status === 401) {
       this.router.navigate(['/login']);
    }

    return Observable.throw('Erro acessando servidor remoto.');
  }
}
