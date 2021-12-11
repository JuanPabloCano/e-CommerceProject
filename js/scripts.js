class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    showData() {
        return `Nombre del producto: ${this.nombre} <br> Precio: ${this.precio} <hr>`;
    }
}

const listaProductos = [];
// listaProductos.push(new Producto("Nike Air-Force", 800));
// listaProductos.push(new Producto("Adidas proBounce", 500));
// listaProductos.push(new Producto("Jordan retro 4", 1000));
// listaProductos.push(new Producto("Puma court 2k", 300));
// listaProductos.push(new Producto("Nike kobe VI", 2300));
// listaProductos.push(new Producto("Jordan air retro 1", 1780));
// listaProductos.push(new Producto("Adidas D Rose", 890));
// listaProductos.push(new Producto("Puma fusion nitro Spectra", 130));
// listaProductos.push(new Producto("Jordan retro 5", 1658));
// listaProductos.push(new Producto("Nike kobe VII", 2300));
// listaProductos.push(new Producto("Under armour Curry One", 1250));
// listaProductos.push(new Producto("Nike Hyperdunk 2011", 2000));
// listaProductos.push(new Producto("Nike Hyperdunk 2016 low", 1240));
// listaProductos.push(new Producto("Adidas pro model 2g", 450));
// listaProductos.push(new Producto("Nike LeBron soldier 9", 1879));
// listaProductos.push(new Producto("Nike Kobe IX", 3599));
// listaProductos.push(new Producto("Jordan retro XXI", 2500));
// listaProductos.push(new Producto("Nike Kyrie 6", 899));
// listaProductos.push(new Producto("Nike Kd IV", 1699));
// listaProductos.push(new Producto("Nike Kobe VIII", 3799));

let divProduct = document.getElementById('prueba');

const product = (productos) => {
    for (const prod of productos){
        let div = document.createElement('prueba');
        div.innerHTML = prod.showData();
        divProduct.appendChild(div);
    }
}

if ('Productos' in localStorage) {
    let displaySavedProducts = JSON.parse(localStorage.getItem('Productos'));
    for(const product of displaySavedProducts) {
        listaProductos.push(new Producto(product.nombre, product.precio));
    }
}

let input = prompt("Desea agregar un producto??, presione CERO si desea salir");
while (input != 0) {
    listaProductos.push(new Producto(prompt("Nombre del producto"), prompt("Precio del producto")));
    input = prompt("Desea agregar un nuevo producto????, presione CERO si desea salir");
}

product(listaProductos);

localStorage.setItem('Productos', JSON.stringify(listaProductos));



// const discount = () => {

// }


// const addToCart = () => {

// }


// const total = () => {

// }

// let productos = document.getElementsByClassName('btn btn-outline-dark mt-auto');

// for (const product of productos) {
//     console.log(product.innerHTML);
// }