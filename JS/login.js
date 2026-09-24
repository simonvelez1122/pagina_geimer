function ValidarInformacion() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (!email || !password) {
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Campos Incompletos",
            showConfirmButton: false,
            timer: 1400,
            width: 320,
            customClass: {
                popup: 'swal-small'
            }
        });
    }
    else {
        console.log(
            `Informacion del usuario: \n
            ${email} \n
            ${password}`
        );

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            console.log("Correo electrónico no válido");
            Swal.fire({
                position: "center",
                title: "Correo electrónico no válido",
                icon: "error",
                showConfirmButton: false,
                timer: 1400,
                width: 320,
                customClass: {
                    popup: 'swal-small'
                }
            });
            return;
        }

        if (password.length < 6) {
            console.log("La contraseña debe tener mínimo 6 caracteres");
            Swal.fire({
                position: "center",
                title: "La contraseña debe tener mínimo 6 caracteres",
                icon: "error",
                showConfirmButton: false,
                timer: 1400,
                width: 320,
                customClass: {
                    popup: 'swal-small'
                }
            });
            return;
        }

        Swal.fire({
            position: "center",
            icon: "success",
            title: "Inicio de sesión correcto",
            showConfirmButton: false,
            timer: 1400,
            width: 320,
            customClass: {
                popup: 'swal-small'
            }
        });
    }
}

const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.onsubmit = function (event) {
        event.preventDefault();
        ValidarInformacion();
    };
}
