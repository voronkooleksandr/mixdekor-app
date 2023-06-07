import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  cartQuantity = 0;
  user!: User;

  constructor(cartService: CartService, private userSerice: UserService) {
    cartService.getCartObservable().subscribe((newCart) => {
      this.cartQuantity = newCart.totalCount;
    });
    userSerice.userObservable.subscribe((newUser) => {
      this.user = newUser;
    })
  }

  ngOnInit(): void {}

  logout() {
    this.userSerice.logout();
  }

  get isAuth() {
    return this.user.token;
  }
}
