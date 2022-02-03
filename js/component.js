function componenteCard(producto) {
    return `<div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4">
                    <img src=${producto.imagen} height="200px" width="200px" class="card-img-top">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5>${producto.marca} </h5>
                        <h5 class="card-title">${producto.nombre} <br>
                            <h6> $ ${producto.precio} USD </h6>
                        </h5>
                        <div class="d-grid gap-2 d-md-flex md-end">
                            <button id=${producto.id} type="button" class="btn btn-dark btn-product"> Add</button>
                            <button id=${producto.id} type="button" class="btn btn-dark btnDelete"> Eliminar </button>
                        </div>
                    </div>
                </div>
            </div>`
}
