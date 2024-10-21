// Función para ejecutar la acción de AppSheet
function ejecutarAccionAppSheet() {
  // Obtener los valores de los campos necesarios
  const detalleVenta = encodeURIComponent(JSON.stringify(obtenerDetalleVenta()));
  const noVenta = document.getElementById("noVenta").value;
  const tipoVenta = document.getElementById("tipoVenta").value;
  const transporte = document.getElementById("transporte").value;
  const fecha = document.getElementById("fecha").value;
  const nombreEmpresa = document.getElementById("nombreEmpresa").value;
  const nombreCliente = document.getElementById("nombreCliente").value;
  const direccion = document.getElementById("direccion").value;
  const ruta = document.getElementById("ruta").value;
  const area = document.getElementById("area").value;
  const noNit = document.getElementById("noNit").value;
  const codigoCliente = document.getElementById("codigoCliente").value;
  const telefono = document.getElementById("telefono").value;
  const totalVenta = document.getElementById("totalVenta").value;
  const nombreAsesor = document.getElementById("nombreAsesor").value;

  // Construir la URL para la acción de AppSheet
  const url = `https://wesjapan2021.github.io/web_app/?detalleVenta=${detalleVenta}&noVenta=${noVenta}&tipoVenta=${tipoVenta}&transporte=${transporte}&fecha=${fecha}&nombreEmpresa=${nombreEmpresa}&nombreCliente=${nombreCliente}&direccion=${direccion}&ruta=${ruta}&area=${area}&noNit=${noNit}&codigoCliente=${codigoCliente}&telefono=${telefono}&totalVenta=${totalVenta}&nombreAsesor=${nombreAsesor}`;

  // Abrir la URL en una nueva pestaña
  window.open(url, '_blank');
}

// Función para obtener el detalle de la venta
function obtenerDetalleVenta() {
  // Aquí debes agregar el código para obtener los detalles de la venta desde tu fuente de datos
  // Por ejemplo, si tienes una tabla "Venta" en una base de datos, puedes hacer una consulta y devolver los datos como un array de objetos
  return [];
}
