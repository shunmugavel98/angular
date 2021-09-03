import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './my/orders/orders.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { UserService } from './user.service';
import { CategoryService } from './category.service';
import { AdminAuthGuardService } from './admin-auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    OrdersComponent,
    ProductFormComponent
  ],
  imports: [
    NgbModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'products', component: ProductsComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent},
      { path: 'login', component: LoginComponent},

      { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuardService] },
      { path: 'my/orders', component: OrdersComponent, canActivate: [AuthGuardService]},
      { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuardService]},

      { path: 'admin/admin-orders', component: AdminOrdersComponent, canActivate: [AuthGuardService]},
      { path: 'admin/admin-products', component: AdminProductsComponent, canActivate: [AuthGuardService]},
      { path: 'admin/product-form', component: ProductFormComponent, canActivate: [AuthGuardService]}
    ])
  ],
  providers: [
    AuthService,
    AuthGuardService,
    AdminAuthGuardService,
    UserService,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
