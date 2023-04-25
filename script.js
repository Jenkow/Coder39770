const ProductManager = require('./ProductManager')

async function manager() {
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

manager()