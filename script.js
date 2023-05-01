import ProductManager from './ProductManager.js'
import CartManager from './CartManager.js'

async function p_manager() {
    let manager = new ProductManager('./products.json')
    await manager.addProduct({ title: 'vaper', description: 'cigarrillo electronico', price: 10000 })
    await manager.addProduct({ title: 'rtx 3080', description: 'placa de video', price: 350000, stock: 3 })
    await manager.addProduct({ title: 'ojota', description: 'pa caminar', price: 15000, stock: 8 })
    await manager.addProduct({ title: 'pantalon', description: 'pa las gambas', price: 30000, stock: 2 })
    await manager.addProduct({ title: 'remera', description: 'pal pecho', price: 7000, stock: 6 })
    await manager.addProduct({ title: 'anteojos', description: 'pa los ojos', price: 25000, stock: 16 })
    await manager.addProduct({ title: 'gorro', description: 'pa la cabeza', price: 8000, stock: 8 })
    await manager.addProduct({ title: 'guantes', description: 'pa las manos', price: 3000, stock: 25 })
    await manager.addProduct({ title: 'zapas', description: 'pa las patas', price: 35000, stock: 8 })
    await manager.addProduct({ title: 'moto', description: 'zanellusqui', price: 300000, stock: 1 })
    console.log(manager.getProductById(9))
    await manager.updateProduct(9, { title: 'CAMBIADO' })
    await manager.deleteProduct(10)
    await manager.getProducts()
}

async function c_manager() {
    let manager = new CartManager('./carts.json')
    await manager.addCart([{id:2, quantity:3}, {id:5, quantity:1}])
    await manager.addCart([{id:1, quantity:6}, {id:3, quantity:4}])
    await manager.addCart([{id:8, quantity:4}, {id:5, quantity:1}])
    await manager.addCart([{id:9, quantity:6}, {id:7, quantity:2}])
    console.log(manager.getCartById(2))
    await manager.getCarts()
}

p_manager()
c_manager()