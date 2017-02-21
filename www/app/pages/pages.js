import Sidemenu from './sidemenu/sidemenu'
import Login from './login/login'
import Home from './home/home';
import MyProfile from './myProfile/myProfile';
import MyShoppingCart from './myShoppingCart/myShoppingCart';
import MyOrders from './myOrders/myOrders';
import OrderDetail from './orderDetail/orderDetail'
import MyWishlist from './myWishlist/myWishlist';
import Shopping from './shopping/shopping';
import Services from './services/services';
import Shops from './shops/shops';
import ProductDetail from './productDetail/productDetail';
import ShopDetail from './shopDetail/shopDetail'
import Register from './register/register'
import Logout from './logout/logout'
import Checkout from './checkout/checkout'
let pageModule = angular.module('app.pages', [
  Sidemenu,
  Login,
  Home,
  MyProfile,
  MyShoppingCart,
  MyOrders,
  OrderDetail,
  MyWishlist,
  Shopping,
  Services,
  Shops,
  ProductDetail,
  ShopDetail,
  Register,
  Logout,
  Checkout
])

.name;

export default pageModule;
