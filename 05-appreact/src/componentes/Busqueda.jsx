/* Hacemos una funcion con un mensaje */
function buscarPedidos() {
    alert('Estamos buscando su pedido')
}



/* Hacemos un componente que en este caso es la barra de busqueda*/
const Busqueda = () => {
    return (
        <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" onClick={buscarPedidos} type="submit">Search</button>
        </form>
    )
}

export default Busqueda