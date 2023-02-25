const addZeros = n => {

    if (n.toString().length < 2) return "0". concat(n);

    return n;
}

const actualizarHora = () => {

    const time = new Date()

    var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    var days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

    let obtenerAño = time.getFullYear();
    let obtenerMes = meses[time.getMonth()];
    let obtenerDia = days[time.getDay()];
    let hora = addZeros(time.getHours());
    let min = addZeros(time.getMinutes());
    let seg = addZeros(time.getSeconds());
    
    document.querySelector("#año").textContent = obtenerAño;
    document.querySelector("#mes").textContent = obtenerMes;
    document.querySelector("#dia").textContent = obtenerDia;
    document.querySelector(".hora").textContent = hora;
    document.querySelector(".minutos").textContent = min;
    document.querySelector(".segundos").textContent = seg;
}

actualizarHora() 
setInterval(actualizarHora, 1000)

let dia = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]
