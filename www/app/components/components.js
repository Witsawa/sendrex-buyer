import ProductList from './productList/productList';
import ProductListItem from './productListItem/productListItem';
import AddToCartButton from './addToCartButton/addToCartButton';
import WishListButton from './wishListButton/wishListButton';
import ItemSelectModal from './itemSelectModal/itemSelectModal';
import ShopList from './shopList/shopList';
import ShopListItem from './shopListItem/shopListItem';
import ProductDetail from './productDetail/productDetail';
import MyCart from './myCart/myCart';
import WishList from './wishList/wishList';
import MyCartProductList from './myCartProductList/myCartProductList';
import MyCartProductListItem from './myCartProductListItem/myCartProductListItem';
import CheckoutButton from './checkoutButton/checkoutButton';
import LocationPicker from './locationPicker/locationPicker';
import MyProfile from './myProfileForm/myProfileForm';
import ImagePicker from './imagePicker/imagePicker'
import DatePicker from './datePicker/datePicker'
import ShopDetail from './shopDetail/shopDetail'
import ShopDetailHeader from './shopDetailHeader/shopDetailHeader'
import DeliveryLocationPicker from './deliveryLocationPicker/deliveryLocationPicker'
import CheckoutForm from './checkoutForm/checkoutForm'
import CreditCardSelectItem from './creditCardSelectItem/creditCardSelectItem'
import FollowButton from './followButton/followButton'
import MessageButton from './messageButton/messageButton'
import ChatRoom from './chatRoom/chatRoom'
import ChatList from './chatList/chatList'
import MultiImagePicker from './multiImagePicker/multiImagePicker'
let componentModule = angular.module('app.components', [
  ProductList,
  ProductListItem,
  AddToCartButton,
  WishListButton,
  ItemSelectModal,
  ShopList,
  ShopListItem,
  ProductDetail,
  MyCart,
  WishList,
  MyCartProductList,
  MyCartProductListItem,
  CheckoutButton,
  LocationPicker,
  MyProfile,
  ImagePicker,
  DatePicker,
  ShopDetail,
  ShopDetailHeader,
  DeliveryLocationPicker,
  CheckoutForm,
  CreditCardSelectItem,
  FollowButton,
  MessageButton,
  ChatRoom,
  MultiImagePicker,
  ChatList
])

.name;

export default componentModule;
