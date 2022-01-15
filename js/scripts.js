class Producto {
    constructor(marca, nombre, precio, imagen) {
        this.marca = marca;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }

    getTotal() {
        let total = 0;
        total += this.precio;
    }
}


const listaProductos = [];

const marca = ["Nike", "Jordan", "Puma", "Adidas", "UnderArmour"];

listaProductos.push(new Producto(marca[0], "air-Force 1", 800, 'https://u7.uidownload.com/vector/642/513/vector-right-sneaker-shoe-ai-eps-thumbnail.jpg alt="..."'));
listaProductos.push(new Producto(marca[1], "retro 4", 1000, "https://u7.uidownload.com/vector/642/513/vector-right-sneaker-shoe-ai-eps-thumbnail.jpg alt='...'"));
listaProductos.push(new Producto(marca[2], "court 2k", 300, "https://u7.uidownload.com/vector/642/513/vector-right-sneaker-shoe-ai-eps-thumbnail.jpg alt='...'"));
listaProductos.push(new Producto(marca[3], "proBounce", 500, "https://u7.uidownload.com/vector/642/513/vector-right-sneaker-shoe-ai-eps-thumbnail.jpg alt='...'"));
listaProductos.push(new Producto(marca[0], "kobe VI", 2300, "https://u7.uidownload.com/vector/642/513/vector-right-sneaker-shoe-ai-eps-thumbnail.jpg alt='...'"));
listaProductos.push(new Producto(marca[1], "retro 1", 1780, "https://u7.uidownload.com/vector/642/513/vector-right-sneaker-shoe-ai-eps-thumbnail.jpg alt='...'"));
listaProductos.push(new Producto(marca[3], "d Rose", 890, "https://u7.uidownload.com/vector/642/513/vector-right-sneaker-shoe-ai-eps-thumbnail.jpg alt='...'"));
listaProductos.push(new Producto(marca[2], "fusion", 130, "https://u7.uidownload.com/vector/642/513/vector-right-sneaker-shoe-ai-eps-thumbnail.jpg alt='...'"));
listaProductos.push(new Producto(marca[1], "retro 5", 1658, "https://u7.uidownload.com/vector/642/513/vector-right-sneaker-shoe-ai-eps-thumbnail.jpg alt='...'"));
listaProductos.push(new Producto(marca[0], "kobe VII", 2300, "https://u7.uidownload.com/vector/642/513/vector-right-sneaker-shoe-ai-eps-thumbnail.jpg alt='...'"));
listaProductos.push(new Producto(marca[4], "curry One", 1250, "https://u7.uidownload.com/vector/642/513/vector-right-sneaker-shoe-ai-eps-thumbnail.jpg alt='...'"));
listaProductos.push(new Producto(marca[0], "hyperdunk", 2000, "https://u7.uidownload.com/vector/642/513/vector-right-sneaker-shoe-ai-eps-thumbnail.jpg alt='...'"));
listaProductos.push(new Producto(marca[0], "hyperdunk", 1240, "https://u7.uidownload.com/vector/642/513/vector-right-sneaker-shoe-ai-eps-thumbnail.jpg alt='...'"));
listaProductos.push(new Producto(marca[3], "proModel", 450, "https://u7.uidownload.com/vector/642/513/vector-right-sneaker-shoe-ai-eps-thumbnail.jpg alt='...'"));
listaProductos.push(new Producto(marca[0], "leBronSoldier", 1879, "https://u7.uidownload.com/vector/642/513/vector-right-sneaker-shoe-ai-eps-thumbnail.jpg alt='...'"));
listaProductos.push(new Producto(marca[0], "kobe IX", 3599, "https://u7.uidownload.com/vector/642/513/vector-right-sneaker-shoe-ai-eps-thumbnail.jpg alt='...'"));
listaProductos.push(new Producto(marca[1], "retro XXI", 2500, "https://u7.uidownload.com/vector/642/513/vector-right-sneaker-shoe-ai-eps-thumbnail.jpg alt='...'"));
listaProductos.push(new Producto(marca[0], "kyrie 6", 899, "https://u7.uidownload.com/vector/642/513/vector-right-sneaker-shoe-ai-eps-thumbnail.jpg alt='...'"));
listaProductos.push(new Producto(marca[0], "kd IV", 1699, "https://u7.uidownload.com/vector/642/513/vector-right-sneaker-shoe-ai-eps-thumbnail.jpg alt='...'"));
listaProductos.push(new Producto(marca[0], "kobe VIII", 3799, "https://u7.uidownload.com/vector/642/513/vector-right-sneaker-shoe-ai-eps-thumbnail.jpg alt='...'"));


const generarProductos = document.getElementById('generarProductos');

function generarHTMLJQ(products) {
    $('#generarProductos').prepend(componenteCard(products))
}

function mostrarProductos(listado) {
    $('#generarProductos').empty();
    for (let product of listado) {
        generarHTMLJQ(product);
    }
}

//Se generan los productos en el body del HTML
$('#generarProductos').empty();
mostrarProductos(listaProductos);


// Filtro de productos por marca
let filterProducts = document.getElementById('filterProducts');

const selection = (list) => {
    filterProducts.innerHTML += `<option> Todos </option>`;
    for (const product of list) {
        filterProducts.innerHTML += `<option> ${product} </option>`;
    }
}
selection(marca);

filterProducts.onchange = function () {
    if (this.value != 'Todos') {
        const encontrados = listaProductos.filter(product => product.marca == this.value);
        $('#generarProductos').empty();
        mostrarProductos(encontrados);
    } else {
        $('#generarProductos').empty();
        mostrarProductos(listaProductos);
    }
}
const filterByName = () => {
    document.getElementById('productName').addEventListener('keyup', function () {
        const encontrados = listaProductos.filter(product => product.nombre.includes(this.value));
        if (encontrados.length == 0) {
            generarProductos.innerHTML = 'No se encontraron productos';
        } else {
            $('#generarProductos').empty();
            mostrarProductos(encontrados);
        }
    })
}

$('#generarProductos').empty();
mostrarProductos(listaProductos);


$('#action-button').click(function () {
    $.ajax({
        url: 'https://api.joind.in/v2.1/talks/10889',
        data: {
            format: 'json'
        },
        error: function () {
            $('#info').html('<p>An error has occurred</p>');
        },
        dataType: 'jsonp',
        success: function (data) {
            var $title = $('<h1>').text(data.talks[0].talk_title);
            var $description = $('<p>').text(data.talks[0].talk_description);
            $('#info')
                .append($title)
                .append($description);
        },
        type: 'GET'
    });
});
filterByName();