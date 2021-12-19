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

const marca = ["Nike", "Jordan", "Puma", "Adidas", "Under armour"];

listaProductos.push(new Producto(marca[0], "air-Force 1", 800, 'https://img01.ztat.net/article/spp-media-p1/d212dcea28a1366599c3b0874c2294e3/80367f1535d74e469487fe7d3c2029cb.jpg?imwidth=1800&filter=packshot alt="..."'));
listaProductos.push(new Producto(marca[1], "retro 4", 1000, "https://essential.vteximg.com.br/arquivos/ids/330279-1000-1000/306-6638_1.jpg?v=637304226196930000 alt='...'"));
listaProductos.push(new Producto(marca[2], "court 2k", 300, "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/376313/01/sv01/fnd/PNA/fmt/png/Court-Rider-2K-Basketball-Shoes alt='...'"));
listaProductos.push(new Producto(marca[3], "proBounce", 500, "https://m.media-amazon.com/images/I/71rZecw6K+L._AC_UX395_.jpg alt='...'"));
listaProductos.push(new Producto(marca[0], "kobe VI", 2300, "https://www.nicekicks.com/files/2020/12/lead-nike-zoom-kobe-6-grinch-cw2190-300-2021-release-date.jpg alt='...'"));
listaProductos.push(new Producto(marca[1], "retro 1", 1780, "https://cdn.shopify.com/s/files/1/0603/3031/1875/products/554724-173_ta-L_1512x.jpg?v=1633758772 alt='...'"));
listaProductos.push(new Producto(marca[3], "d Rose", 890, "http://desempacados.com/wp-content/uploads/2019/12/adidas-D-Rose-1-Roses-Grey-900x600.jpg alt='...'"));
listaProductos.push(new Producto(marca[2], "fusion nitro Spectra", 130, "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/195684/01/sv01/fnd/PNA/fmt/png/Fusion-Nitro-Spectra-Basketball-Shoes alt='...'"));
listaProductos.push(new Producto(marca[1], "retro 5", 1658, "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/tsfwosn6q2a1ivflhkj6/air-jordan-5-retro-sail-racer-blue-release-date.jpg alt='...'"));
listaProductos.push(new Producto(marca[0], "kobe VII", 2300, "https://m.media-amazon.com/images/I/71VnoJp3NxL._AC_UL1500_.jpg alt='...'"));
listaProductos.push(new Producto(marca[4], "curry One", 1250, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3yEUft1jLuNo3WizaSKqoy5QQZKdiEkPOeA&usqp=CAU alt='...'"));
listaProductos.push(new Producto(marca[0], "hyperdunk 2011", 2000, "https://images.solecollector.com/complex/image/upload/kfny2elbwwvrgxnvbjc7.jpg alt='...'"));
listaProductos.push(new Producto(marca[0], "hyperdunk 2016 low", 1240, "https://m.media-amazon.com/images/I/61chZTph1VL._AC_UY395_.jpg alt='...'"));
listaProductos.push(new Producto(marca[3], "pro model 2g", 450, "https://www.innvictus.com/medias/tenis-adidas-pro-model-2g-in-EF9821-1.png?context=bWFzdGVyfGltYWdlc3wyMTU0MTB8aW1hZ2UvcG5nfGltYWdlcy9oOWYvaDkyLzk2OTEyNjQ2NDcxOTgucG5nfGYwYWQzZjE1MmM2MmExZjE0NmQ4ZjkzMmUyMmUzMzMyZGU5MmE5ZmUzZTY2OGFjNmMzZWViYzE1NTE3NTM0MTc alt='...'"));
listaProductos.push(new Producto(marca[0], "leBron soldier 9", 1879, "https://http2.mlstatic.com/nba-nike-tenis-lebron-soldier-9-tb-lebron-james-original-azl-D_NQ_NP_760578-MLM27297561563_052018-F.jpg alt='...'"));
listaProductos.push(new Producto(marca[0], "kobe IX", 3599, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUPcJGnF7eOTNCcnEJ5rbYG1PrbYpRx_RxIQ&usqp=CAU alt='...'"));
listaProductos.push(new Producto(marca[1], "retro XXI", 2500, "https://i8.amplience.net/i/jpl/jordan-xxi-7199ce15fc160487b15ace9674ea5cd8 alt='...'"));
listaProductos.push(new Producto(marca[0], "kyrie 6", 899, "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nike-kyrie-6-chinese-new-year-cd5029-700-6-1577703426.jpg?resize=768:* alt='...'"));
listaProductos.push(new Producto(marca[0], "kd IV", 1699, "https://m.media-amazon.com/images/I/617UcJ+aqvL._AC_UY575_.jpg alt='...'"));
listaProductos.push(new Producto(marca[0], "kobe VIII", 3799, "https://jgbasket.net/wp-content/uploads/2013/10/nike-kobe-8-viper-baloncesto.jpg alt='...'"));


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
    document.getElementById('productName').addEventListener('keyup', function (){
        const encontrados = listaProductos.filter(product => product.nombre.includes(this.value));
        if (encontrados.length == 0){
            generarProductos.innerHTML = 'No se encontraron productos';
        }else{
            $('#generarProductos').empty();
            mostrarProductos(encontrados);
        }
    })
}
filterByName();