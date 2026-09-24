function ValidarRegistro() {
    let nombre = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;

    if (!nombre || !email || !password || !confirmPassword) {
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
            ${nombre} \n
            ${email} \n
            ${password} \n
            ${confirmPassword}`
        );

        if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(nombre)) {
            console.log("El nombre solo debe contener letras");
            Swal.fire({
                position: "center",
                title: "El nombre solo debe contener letras",
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

        if (password !== confirmPassword) {
            console.log("Las contraseñas no coinciden");
            Swal.fire({
                position: "center",
                title: "Las contraseñas no coinciden",
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
            title: "Registro exitoso",
            showConfirmButton: false,
            timer: 1400,
            width: 320,
            customClass: {
                popup: 'swal-small'
            }
        });
    }
}

const registerForm = document.getElementById("register-form");

if (registerForm) {
    registerForm.onsubmit = function (event) {
        event.preventDefault();
        ValidarRegistro();
    };
}
