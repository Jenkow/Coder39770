class ProductManager {

    constructor() {
        this.products = []
    }

    addProduct({title, description, price, thumbnail, stock}) {
        let id
        if (this.products.length===0) {
            id = 1
        } else {
            id = this.products[this.products.length-1].id+1
        }
        let product = {title, description, price, thumbnail, stock, id}       
        this.products.push(product)
    }

    getProducts() {
        console.log(this.products)
        return this.products
    }

    getProductById(id) {
        let product = this.products.find(p => p.id===id)
        product = product ?? 'Not Found'
        console.log(product)
        return product
    }

}