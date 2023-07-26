class ProductManager {
    constructor() {
        this.products = []
        this.nextId = 1
    }

    addProduct(product) {
        if (!this.isProductValid(product)) {
            console.log("Error: El producto es invalido")
            return
        }

        if (this.isCodeDuplicate(product.code)) {
            console.log("Error: El código del producto ya existe")
            return
        }

        product.id = this.nextId++
        this.products.push(product)
    }

    getProducts() {
        return this.products
    }

    getProductsById(id) {
        const product = this.products.find((p) => p.id === id)
        if (product) {
            return product
        } else {
            console.log("Error:Producto no encontrado")
        }

    }

    isProductValid(product) {
        return (
            product.title &&
            product.description &&
            product.price &&
            product.thumbnail &&
            product.code &&
            product.stock !== undefined
        )
    }

    isCodeDuplicate(code) {
        return this.products.some((p) => p.code === code)
    }
}

//creo una instancia de ProductManager
const productManager = new ProductManager()

//Agrego productos
productManager.addProduct({
    title: "Auriculares",
    description: "Descripcion de auris",
    price: 7000,
    thumbnail: "/imagenAuris.jpg",
    code: "Aur01",
    stock: 8
})

productManager.addProduct({
    title: "Teclado",
    description: "Descripcion de teclado",
    price: 6000,
    thumbnail: "/imagenAuris.jpg",
    code: "Tec01",
    stock: 4
})

productManager.addProduct({
    title: "Mouse",
    description: "Descripcion de Mouse",
    price: 6000,
    thumbnail: "/imagMouse.jpg",
    code: "Tec01",
    stock: 4
})

//Obtener los productos
const productsList = productManager.getProducts();

console.log(productsList);

//Obtener productos por id

const productById = productManager.getProductsById(2);

console.log(productById);


//Obtener producto inexistente

const productByIdInex = productManager.getProductsById(5);

console.log(productByIdInex);