import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ProductsService } from '../../services/products.service';
import { Products } from 'src/app/models/products';
import { AlertService } from 'src/app/share/services/alert.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  displayedColumns = ['codigoBarras', 'nome', 'preco'];
  dataSource = new MatTableDataSource(new Array<Products>());

  constructor(
    private _productsService: ProductsService,
    private _alert: AlertService) { }

  ngOnInit() {
    this.getAll();
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getAll() {
    this._productsService.getAll().subscribe(
      this.cbGetAllSuccess.bind(this),
      this.cbHandlerError.bind(this)
    );
  }

  cbGetAllSuccess(response) {
    this.dataSource = new MatTableDataSource(response);
  }

  cbHandlerError(error) {
    this._alert.error('Whoops', 'Ocorreu um erro inesperado, tente novamente.', 'OK');
  }
}
