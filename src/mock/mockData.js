const products = [
    {
        id: "1",
        name: "Remera Palm Angels Negra",
        price: 25000,
        category: "remeras",
        img: "https://dcdn.mitiendanube.com/stores/992/140/products/zyro-image31-1971f9c8d568f33fda16764926128855-640-0.png", 
        stock: 5,
        description: "Remera Oversize Negra Hombre"
    },
    {
        id: "2",
        name: "Remera Your Future Negra",
        price: 27000,
        category: "remeras",
        img: "https://dcdn.mitiendanube.com/stores/002/205/600/products/8o3a2896-013c18fd4b2c48155b17204587743949-1024-1024.jpg", 
        stock: 7,
        description: "Remera Oversize Negra Hombre"
    },
    {
        id: "3",
        name: "Remera 23 Blanca",
        price: 26500,
        category: "remeras",
        img: "https://replymoda.com/wp-content/uploads/2023/08/16916676104de0de517dd5b821b9a006455ebceca6.jpg", 
        stock: 9,
        description: "Remera Oversize Blanca 23 Hombre"
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500);
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export default getProducts; getProductById