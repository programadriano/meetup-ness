import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { MaterialModule } from "../share/material/material.module";
import { ScrollDispatchModule } from "@angular/cdk/scrolling";
import { ProductsService } from "./services/products.service";
import { HttpModule } from "@angular/http";
import { HttpUtilService } from "../share/services/http-util-service";
import { ProductsComponent } from "./pages/products/products.component";

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    ScrollDispatchModule,
    HttpModule
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent
  ],
  providers: [ProductsService, HttpUtilService]
})
export class HomeModule { }
