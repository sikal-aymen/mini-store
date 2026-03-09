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
let productView = new ProductView()
let productController =
new ProductController(productService, productView)
productView.controller = productController
let userView = new UserView()
let userController =
new UserController(userService, userView)
userView.controller = userController
let cartController = new CartController(cartService, new CartView())
let orderController = new OrderController(orderService, new OrderView())
userController.createUser("aymen", "aymen2000@mail.com")
userController.createUser("sikal", "sikal@mail.com")
productController.getProducts()
cartController.showCart()
orderController.getOrders()
productController.getProducts()
const btn = document.getElementById("addProduct")
btn.addEventListener("click", () => {
    const name = document.getElementById("name").value
    const price = Number(document.getElementById("price").value)
    const stock = Number(document.getElementById("stock").value)
    productController.createProduct(name, price, stock)
    productController.getProducts()
})
const addUserBtn = document.getElementById("addUser")
addUserBtn.addEventListener("click", () => {
    const name = document.getElementById("username").value
    const email = document.getElementById("email").value
    userController.createUser(name, email)
    userController.getUsers()
})
