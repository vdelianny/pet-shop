type Product = {
    title: string,
    price: number
}

export const getProducts = () => localStorage.getItem('products')
export const addProduct = (product: Product) => {
    let products = JSON.parse(getProducts() || '[]')
    products.push(product)
    localStorage.setItem('products', JSON.stringify(products))
}
