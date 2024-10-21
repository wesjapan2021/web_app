// Función para obtener los parámetros de la URL
function obtenerParametrosURL() {
    const params = new URLSearchParams(window.location.search);
    return {
        detalleVenta: params.get('detalleVenta'),
        noVenta: params.get('noVenta'),
        tipoVenta: params.get('tipoVenta'),
        transporte: params.get('transporte'),
        fecha: params.get('fecha'),
        nombreEmpresa: params.get('nombreEmpresa'),
        nombreCliente: params.get('nombreCliente'),
        direccion: params.get('direccion'),
        ruta: params.get('ruta'),
        area: params.get('area'),
        noNit: params.get('noNit'),
        codigoCliente: params.get('codigoCliente'),
        telefono: params.get('telefono'),
        totalVenta: params.get('totalVenta'),
        nombreAsesor: params.get('nombreAsesor')
    };
}

// Función para llenar los datos principales
function llenarDatos(datos) {
    document.getElementById('fecha').textContent = datos.fecha;
    document.getElementById('noVenta').textContent = datos.noVenta;
    document.getElementById('tipoVenta').textContent = datos.tipoVenta;
    document.getElementById('transporte').textContent = datos.transporte;
    document.getElementById('nombreCliente').textContent = datos.nombreCliente;
    document.getElementById('codigoCliente').textContent = datos.codigoCliente;
    document.getElementById('direccion').textContent = datos.direccion;
    document.getElementById('ruta').textContent = datos.ruta;
    document.getElementById('area').textContent = datos.area;
    document.getElementById('noNit').textContent = datos.noNit;
    document.getElementById('telefono').textContent = datos.telefono;
    document.getElementById('nombreAsesor').textContent = datos.nombreAsesor;
    document.getElementById('totalVenta').textContent = datos.totalVenta;
}

// Función para llenar los detalles de los productos
function llenarDetallesProductos(detalleVenta) {
    const productos = JSON.parse(decodeURIComponent(detalleVenta));
    const tbody = document.querySelector('#detalleVenta tbody');
    tbody.innerHTML = ''; // Limpiar contenido existente
    productos.forEach(producto => {
        const row = tbody.insertRow();
        row.innerHTML = `
            <td>${producto.UBICACION}</td>
            <td>${producto.CANTIDAD}</td>
            <td>${producto.CODIGO}</td>
            <td>${producto.DESCRIPCION}</td>
            <td>${producto.PRECIO}</td>
            <td>${producto.SUBTOTAL}</td>
        `;
    });
}

// Llenar los datos en la página
const datos = obtenerParametrosURL();
llenarDatos(datos);
llenarDetallesProductos(datos.detalleVenta);
