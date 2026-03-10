export default class ProductService {
    constructor(){
        this.products =
        JSON.parse(localStorage.getItem("products")) || []
    }
    save(){
        localStorage.setItem(
            "products",
            JSON.stringify(this.products)
        )
    }
    create(name, price, stock){
        const product = {
            id: this.products.length + 1,
            name,
            price,
            stock
        }
        this.products.push(product)
        this.save()
        return product
    }
    getAll(){
        return this.products
    }
    getById(id){
        return this.products.filter(p => p.id == id)[0]
    }
    delete(id){
        this.products =
        this.products.filter(p => p.id !== id)
        this.save()
    }
}
