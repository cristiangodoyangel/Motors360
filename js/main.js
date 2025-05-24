// Preloader
window.onload = function() {
    setTimeout(function() {
        document.getElementById('preloader').style.display = 'none';
    }, 800);
};

// Selección de división
function seleccionarDivision(division) {
    if(division === 'equipamiento') {
        Swal.fire({
            title: 'Equipamiento Minero',
            text: 'Próximamente accederás a la división Equipamiento Minero.',
            icon: 'info',
            confirmButtonText: 'Continuar'
        });
        // Aquí puedes redirigir o cargar contenido dinámico
        // window.location.href = 'equipamiento.html';
    } else if(division === 'servicios') {
        Swal.fire({
            title: 'Servicios Integrales',
            text: 'Próximamente accederás a la división Servicios Integrales.',
            icon: 'info',
            confirmButtonText: 'Continuar'
        });
        // window.location.href = 'servicios.html';
    }
}
