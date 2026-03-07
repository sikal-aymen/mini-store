import ProductService from "./services/ProductService.js"
import UserService from "./services/UserService.js"
import CartService from "./services/CartService.js"
import OrderService from "./services/OrderService.js"
import ProductController from "./controllers/ProductController.js"
import UserController from "./controllers/UserController.js"
import CartController from "./controllers/CartController.js"
import OrderController from "./controllers/OrderController.js"
import ProductView from "./views/ProductView.js"
import UserView from "./views/UserView.js"
import CartView from "./views/CartView.js"
import OrderView from "./views/OrderView.js"
let productService = new ProductService()
let userService = new UserService()
let cartService = new CartService()
let orderService = new OrderService(cartService, productService)
let productController = new ProductController(productService, new ProductView())
let userController = new UserController(userService, new UserView())
let cartController = new CartController(cartService, new CartView())
let orderController = new OrderController(orderService, new OrderView())
userController.createUser("aymen", "aymen2000@mail.com")
userController.createUser("sikal", "sikal@mail.com")
productController.createProduct("ps3", 50, 1)
productController.createProduct("controller ps3", 25, 1)
productController.createProduct("Monitor", 200, 5)
productController.getProducts()
cartController.addProduct(1, 2)
cartController.addProduct(2, 1)
cartController.showCart()
orderController.checkout(1)
orderController.getOrders()
productController.getProducts()