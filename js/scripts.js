class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

function lista() {
    const listaProductos = [];
    listaProductos.push(new Producto("nike", 800));
    listaProductos.push(new Producto("adidas", 500));
    listaProductos.push(new Producto("jordan", 1000));
    listaProductos.push(new Producto("puma", 300));

    const exit = true;

    do {
        let s = prompt("Ingrese el nombre de uno de los siguientes productos para conocer su precio (nike, adidas, jordan, puma)");
        const a = listaProductos.find(x => x.nombre == s);
        alert("Precio del producto " + a.nombre + " = " + a.precio + " dólares");

    } while (exit)
}


// const discount = () => {

// }


// const addToCart = () => {

// }


// const total = () => {

// }

lista()
