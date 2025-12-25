


const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            const realSrc = img.getAttribute('data-src');
            if (realSrc) {
                img.src = realSrc; // Aquí se descarga la imagen real
                img.style.opacity = '1'; 
            }
            observer.unobserve(img); // Dejar de vigilar una vez cargada
        }
    });
}, { rootMargin: "50px" }); // Empieza a cargar 50px antes de que aparezca
           
           
           
           
           document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('carousel');
    const imageSources = [
        
             
            
        {
            src: 'https://img.freepik.com/premium-photo/concept-christmas-gift-young-woman-look-box_185193-96508.jpg',
            title: 'Ofertas'
        },
        {
            src: 'https://www.ctendance.fr/wp-content/uploads/2020/08/bleu-nuit-et-jaune-orange-katarzyna-bialasiewicz-600x418.jpg', //'https://img.wallpapic.com/i2677-221-45/medium/sala-diseno-interior-moderno-de-interiores-sofa-fondo-de-pantalla.jpg',//muebles
            // src: 'https://lh3.googleusercontent.com/d/1IRZ_YntKn1i6vNZ-A_gL1FSXFymhTSak=w469-h528-mo?authuser=0', //'https://img.wallpapic.com/i2677-221-45/medium/sala-diseno-interior-moderno-de-interiores-sofa-fondo-de-pantalla.jpg',//muebles
            title: 'Muebles'
        },
        {
            src: 'https://i.pinimg.com/originals/c1/a1/f7/c1a1f79f7169b2591c70824fe83ead45.jpg',//moda
            title: 'Moda'
        },
        // Agrega más imágenes y títulos aquí...
    ];

     // Array de funciones que se ejecutarán al hacer clic en cada imagen
     const imageClickFunctions = [
        () => {
            resetFilters();
            document.getElementById('ofertaFiltro').value = 'true';
            filtrarProductos();
        },
        () => {
            resetFilters();
            document.getElementById('tipoProductoFiltro').value = 'Mueble 🛋️';
            filtrarProductos();
        },
        () => {
            resetFilters();
            document.getElementById('tipoProductoFiltro').value = 'Ropa 👕👖';
            filtrarProductos();
        },
    ];

    function handleImageClick(index) {
        if (imageClickFunctions[index]) {
            imageClickFunctions[index]();
        }
    }
    imageSources.forEach((item, index) => {
        let imgContainer = document.createElement('div');
        imgContainer.classList.add('image-container');

        let img = document.createElement('img');
       let src = item.src;
        const urlOptimizada = `https://images.weserv.nl/?url=${encodeURIComponent(src)}&w=400&output=webp&q=80&fit=cover&a=attention&sharp=0.3&mask=ellipse&trim=5&bg=transparent`;

        img.src = urlOptimizada;
        img.classList.add('carousel-image');
        img.dataset.index = index;
        
        let title = document.createElement('div');
        title.classList.add('image-title');
        title.textContent = item.title;

        imgContainer.appendChild(img);
        imgContainer.appendChild(title);
        carousel.appendChild(imgContainer);
    });

    // Crear una copia de las imágenes para el ciclo infinito, con título asociado
    const images = document.querySelectorAll('#carousel img');
    const titles = document.querySelectorAll('.image-title');
    
    images.forEach((img, index) => {
        let cloneContainer = document.createElement('div');
        cloneContainer.classList.add('image-container');
        
        let clonedImg = img.cloneNode(true);
        let clonedTitle = titles[index].cloneNode(true);

        // Añadir el clon de la imagen y su título al contenedor del carrusel
        cloneContainer.appendChild(clonedImg);
        cloneContainer.appendChild(clonedTitle);
        
        carousel.appendChild(cloneContainer);
    });

    // Delegación de eventos para manejar clics
    carousel.addEventListener('click', function (event) {
        if (event.target && event.target.classList.contains('carousel-image')) {
            const index = event.target.dataset.index;
            handleImageClick(index);
        }
    });

    // Ajuste de la animación del carrusel
    const carouselWidth = images[0].offsetWidth + 10;
    const totalWidth = carouselWidth * images.length;
    const styleSheet = document.styleSheets[0];
    const keyframes = `
        @keyframes carouselAnimation {
            0% { transform: translateX(0); }
            100% { transform: translateX(-${totalWidth}px); }
        }
    `;
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

    const animationDuration = totalWidth / 26;
    carousel.style.animationDuration = `${animationDuration}s`;
});

    // Función para cerrar el modal
    document.getElementById('cerrar-modal').addEventListener('click', () => {
        document.getElementById('detalles-modal').style.display = 'none';
    });


    const foticos = ['https://th.bing.com/th/id/OIP.9_hdB5hQ6miLVwlvCGw6zgHaNb?rs=1&pid=ImgDetMain',
        'https://th.bing.com/th/id/OIP.WfYk77up_7cFglYroR7p4AAAAA?w=428&h=600&rs=1&pid=ImgDetMain',
        'https://i.pinimg.com/originals/74/26/d0/7426d0108b8b1c8bcba67e6fed0107db.jpg',
        'https://st3.myideasoft.com/idea/im/43/myassets/products/350/image-tr-204bttat804000001-8.jpg?revision=1673352894',
        'https://mthai.com/app/uploads/2019/12/turtleneck-cover.jpg',//moda mujer
        'https://bestmanunleashed.com/wp-content/uploads/2021/01/fashion-looksmaxing-for-men-guide.jpg',//hombra


    ]

    // startSlide("slidesOfertas", foticos, 4)
    window.history.pushState(null, null, window.location.href);

    function startSlide(id, array, timeoff) {
        const imgElement = document.getElementById(id);

        let slideIndex = 0;
        function showSlides() {
            imgElement.style.opacity = 0.8;
            setTimeout(() => {
                imgElement.src = array[slideIndex];
               
                slideIndex++;
                if (slideIndex >= array.length) {
                    slideIndex = 0; // Reinicia al principio si llegamos al final
                }
                imgElement.style.opacity = 1;
               
            }, timeoff * 1000);
        }
        setInterval(() => {
            showSlides();
        }, 8000);
        showSlides();
    }
    
    document.getElementById("openModal").onclick = function () {
        document.getElementById("termsModal").style.display = "block";
    }
    document.getElementById("closeModal").onclick = function () {
        document.getElementById("termsModal").style.display = "none";
    }
    document.getElementById("modal").addEventListener('click', function(event) {
    let modal = document.getElementById("modal");
        // Verificamos si el clic fue fuera de la sección modal-content
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
    document.getElementById("termsModal").addEventListener('click', function(event) {
    let modal = document.getElementById("termsModal");
        // Verificamos si el clic fue fuera de la sección modal-content
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
    







    let openModals = {}; // Objeto para manejar el estado de los modales

    function openModal(modalId) {
        document.getElementById(modalId).style.display = 'block';
        openModals[modalId] = true; // Marca el modal como abierto
        history.pushState({ modalId }, ''); // Agrega el estado al historial
    }

    function closeModal(modalId) {
        document.getElementById(modalId).style.display = 'none';
        delete openModals[modalId]; // Marca el modal como cerrado
        history.back(); // Vuelve al estado anterior
    }

    // Manejar el botón "Atrás"
    window.onpopstate = function (event) {
        if (event.state && event.state.modalId) {
            closeModal(event.state.modalId); // Cierra el modal abierto
        } else {
            // Aquí puedes manejar otras acciones si no hay modales abiertos
            // Por ejemplo, redirigir o mostrar un mensaje
        }
    };
    function closeUserInfo() {
        document.getElementById('user-info').style.display = 'none';
    }



    // Función para alternar la visibilidad de la contraseña
    function togglePasswordVisibility(passwordFieldId, checkboxId) {
        const passwordField = document.getElementById(passwordFieldId);
        const checkbox = document.getElementById(checkboxId);
        checkbox.addEventListener('change', function () {
            passwordField.setAttribute('type', this.checked ? 'text' : 'password');
        });
    }

    // Función para mostrar mensajes de error
    function displayError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = message;
    }

    // Función para limpiar los mensajes de error
    function clearErrors() {
        const errorElements = document.querySelectorAll('.error');
        errorElements.forEach(el => el.textContent = '');
    }

    // Inicializar eventos y funcionalidades cuando se carga el documento
    document.addEventListener('DOMContentLoaded', function () {
        // Manejar el clic en "Crear una nueva cuenta"
        document.getElementById('showRegister').addEventListener('click', function (e) {
            e.preventDefault();
            clearErrors();
            document.getElementById('loginForm').style.display = 'none';
            document.getElementById('registerForm').style.display = 'block';


        });

        // Manejar el clic en "Iniciar sesión"
        document.getElementById('showLogin').addEventListener('click', function (e) {
            e.preventDefault();
            clearErrors();
            document.getElementById('registerForm').style.display = 'none';
            document.getElementById('loginForm').style.display = 'block';
        });


        // Manejar el cierre de formularios
        document.getElementById('closeBtn').addEventListener('click', function () {
            document.getElementById('overlay').style.display = 'none';
        });
        // En el manejador de popstate


        // Cerrar el formulario con la tecla Escape
        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') {
                document.getElementById('overlay').style.display = 'none';
            }
        });
        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') {
                document.getElementById('modal').style.display = 'none';
            }
        });

        document.getElementById('closeRegisterBtn').addEventListener('click', function () {
            document.getElementById('overlay').style.display = 'none';
        });

        // Inicializar la visibilidad de las contraseñas
        togglePasswordVisibility('loginPassword', 'showLoginPassword');
        togglePasswordVisibility('registerPassword', 'showRegisterPassword');

        // Validación básica de formularios
        document.getElementById('loginFormElement').addEventListener('submit', function (e) {
            e.preventDefault();
            clearErrors();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            if (!email) {
                displayError('loginEmailError', 'Por favor, ingrese su correo electrónico.');
            }
            if (!password) {
                displayError('loginPasswordError', 'Por favor, ingrese su contraseña.');
            }
        });




        document.getElementById('registerFormElement').addEventListener('submit', function (e) {
            e.preventDefault();
            clearErrors();
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const identityDocument = document.getElementById('identityDocument').value;
            const age = document.getElementById('age').value;
            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const shippingAddress = document.getElementById('shippingAddress').value;


            if (!firstName) {
                displayError('firstNameError', 'Por favor, ingrese su nombre.');
            }
            if (!lastName) {
                displayError('lastNameError', 'Por favor, ingrese su apellido.');
            }
            if (!identityDocument) {
                displayError('identityDocumentError', 'Por favor, ingrese su documento de identidad.');
            }
            if (!age) {
                displayError('ageError', 'Por favor, ingrese su edad.');
            }
            if (!email) {
                displayError('registerEmailError', 'Por favor, ingrese su correo electrónico.');
            }
            if (!password) {
                displayError('registerPasswordError', 'Por favor, ingrese su contraseña.');
            }
            if (password !== confirmPassword) {
                displayError('confirmPasswordError', 'Las contraseñas no coinciden.');
            }
            if (!shippingAddress) {
                displayError('shippingAddressError', 'Por favor, ingrese su dirección de envío.');
            }

            // Más procesamiento (por ejemplo, llamada a API) se puede agregar aquí
        });
    });



    $(document).ready(function () {
        const iti = window.intlTelInput(document.querySelector("#phone"), {
            preferredCountries: ["co", "ec", "ve", "us", "br"], // Países preferidos
            utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.0/js/utils.js", // Para formateo automático y validación
        });

        // Validación en tiempo real
        $("#phone").on("blur", function () {
            const number = iti.getNumber();
            const isValid = iti.isValidNumber();
            const errorElement = document.getElementById('phoneError');
            errorElement.textContent = '';

            if (!isValid) {
                errorElement.textContent = 'Por favor, ingrese un número válido.';
            }
        });
    });





    let usuarioActualEmail = null;
    let token = null;

    document.getElementById('loginFormElement').addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar el envío del formulario

        const formData = new FormData(document.getElementById("loginFormElement"));
        formData.append('action', 'openSession');

        manejarCarga(() => {
            return fetch(jsonUrl, {
                method: 'POST',
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        // Manejar el inicio de sesión exitoso
                        mensajeEstado(`Inicio de sesión exitoso! \n ${data.userInfo.fullName}\n\n${data.userInfo.email}`, 5000);


                        usuarioActualEmail = data.userInfo.email;

                        // mensajeEstado(usuarioActualEmail) 

                        // Cargar datos del usuario
                        document.getElementById('overlay').style.display = 'none';
                        document.getElementById('welcome-message').textContent = `Bienvenido, ${data.userInfo.fullName}`;
                        document.getElementById('user-email').innerText = data.userInfo.email;
                        document.getElementById('user-phone').innerText = data.userInfo.phone;
                        document.getElementById('user-address').innerText = data.userInfo.shippingAddress;
                        token = data.token
                        const fullName = data.userInfo.fullName;
                        const names = fullName.split(' '); // Separa por espacios
                        document.getElementById('nombre_cliente').value = names[0]; // Primer nombre
                        document.getElementById('apellido_cliente').value = names.slice(1).join(' ');

                        document.getElementById('cedula_cliente').value = data.userInfo.cedu;
                        // document.getElementById('departamento_cliente').value = data.userInfo.depa;
                        // document.getElementById('ciudad_cliente').value = data.userInfo.city;
                        document.getElementById('barrio_cliente').value = data.userInfo.barrio;
                        document.getElementById('informacionAdicional').value = data.userInfo.info;
                        document.getElementById('telefono_cliente').value = data.userInfo.phone;
                        document.getElementById('registerEmail').value = data.userInfo.email;
                        document.getElementById('direccion_cliente').value = data.userInfo.shippingAddress;

                        const orderHistory = document.getElementById('order-history').getElementsByTagName('tbody')[0];
                        orderHistory.innerHTML = '';
                        data.userInfo.recentOrders.sort((a, b) => new Date(b.date) - new Date(a.date));
                        data.userInfo.recentOrders.forEach(order => {
                            const row = orderHistory.insertRow();
                            row.insertCell(0).innerText = order.orderId;
                            row.insertCell(1).innerText = order.date;
                            row.insertCell(2).innerText = order.total;
                            row.insertCell(3).innerText = order.status;

                            // Columna de detalles
                            const detallesCell = row.insertCell(4);
                            const detallesButton = document.createElement('button');
                            detallesButton.textContent = 'Ver Detalles';
                            detallesButton.onclick = function () {
                                verDetallesPedido(order.detalle); // Mostrar detalles al hacer clic
                            };
                            detallesCell.appendChild(detallesButton);
                        });


                        updateMenuForLoggedInUser(); // Actualiza el menú


                        toggleVisibility(1, '.ocultar-al-logueo');
                        const user = data.userInfo; // Contiene información del usuario, incluyendo lastCart
                        console.table(user.lastCart);
                        console.table(user)
                        mostrarCarritoDesdeBackend(user.lastCart);


                    } else {
                        // Manejar errores
                        document.getElementById('loginEmailError').textContent = data.message || 'Error en el inicio de sesión.';
                    }
                });
        });
    });
    toggle('userProfile', 'user-info');



    function guardarCarrito() {

        // Verificar si el usuario está logueado
        if (!usuarioActualEmail || !token) {
            console.error('El usuario no ha iniciado sesión.');
            return;
        }
        const carritoSimplificado = carrito.map(item => ({
            id: item.id,
            cantidad: item.cantidad
        }));

        fetch(jsonUrl, {
            method: 'POST',
            body: new URLSearchParams({
                action: 'guardarCarrito',
                loginEmail: usuarioActualEmail, // Asegúrate de tener el email del usuario
                token: token, // Incluir el token en la solicitud
                carrito: JSON.stringify(carritoSimplificado)
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    console.log('Carrito guardado exitosamente.');
                } else {
                    mensajeEstado('c')
                    console.error(data.message);
                }
            });
    }

    function mostrarCarritoDesdeBackend(carritoData) {
    // Vaciar el carrito actual
    carrito = []; // Reiniciar el carrito

    // Convertir la información recibida en un objeto si es necesario
    const carritoItems = JSON.parse(carritoData); // Asumiendo que carritoData es un string JSON

    // Primero, establecer los máximos basados en productosData
    carritoItems.forEach(item => {
        const producto = productosData.find(p => p.id === item.id);
        if (producto) {
            // Solo agregar el producto si hay stock disponible
            if (producto.cantidad > 0) {
                // Determinar el precio correcto (oferta si existe, si no, el precio normal)
                const precioFinal = producto.oferta && producto.oferta !== producto.precio_venta ? producto.oferta : producto.precio_venta;

                // Agregar el producto al carrito con la cantidad máxima y el precio correcto
                carrito.push({
                    ...producto, 
                    cantidad: 0, // Inicializa con cantidad 0
                    cantidadMax: producto.cantidad, // Maximo disponible
                    precioFinal: precioFinal // Asigna el precio final
                });
            } else {
                mensajeEstado(`No hay stock disponible para ${producto.producto_Nombre}.`);
            }
        } else {
            console.error(`Producto con ID ${item.id} no encontrado.`);
        }
    });

    // Ahora actualizar las cantidades desde el carrito del backend
    carritoItems.forEach(item => {
        const existingProduct = carrito.find(p => p.id === item.id);
        if (existingProduct) {
            // Establecer la cantidad máxima permitida en el carrito
            const cantidadPermitida = Math.min(existingProduct.cantidadMax, item.cantidad);
            existingProduct.cantidad = cantidadPermitida; // Asignar la cantidad del backend, hasta el máximo permitido
        }
    });

    // Actualizar la visualización del carrito
    updateCart();
}





    // Manejar el estado del loader
    function manejarCarga(callback) {
        // Mostrar loader y mensaje de carga

        const mensajeAzar = randomLista(mensajes);
        mensajeCargando.textContent = `${mensajeAzar}`;
        mensajeCargando.style.display = 'block';

        const imagenAzar = randomLista(imagenes);
        loaderImage.style.display = 'block';
        // Mostrar loader antes de hacer el fetch
        loader.style.display = 'block';




        // Ejecutar el callback (que es el fetch)
        callback().finally(() => {
            // Aquí ocultamos el loader cuando la promesa se resuelve o se rechaza
            loader.style.display = 'none';
            mensajeCargando.style.display = 'none';
            loaderImage.style.display = 'none';
            mensajeEstado(data.message, 4000)
        });
    }



    function resetFilters(except = null) {
        const filters = [
            'tipoProductoFiltro',
            'listaProductosFiltro',
            'generoFiltro',
            'tallaFiltro',
            'coloresFiltro',
            'ofertaFiltro',
            'tipoMuebleFiltro',
            'precioMinimo',
            'precioMaximo'
        ];

        filters.forEach(filter => {
            if (filter !== except) {
                document.getElementById(filter).value = '';
            }
        });

        filtrarProductos(); // Vuelve a mostrar todos los productos
    }

    // Asignar eventos para los botones de reset
    document.getElementById('resetFilters').addEventListener('click', resetFilters);
    document.getElementById('reset').addEventListener('click', resetFilters);














    function addMenuEventListeners() {
        document.getElementById('ropaLi').addEventListener('click', () => {
            resetFilters();
            document.getElementById('tipoProductoFiltro').value = 'Ropa 👕👖';
            filtrarProductos();
        });
        document.getElementById('muebleLi').addEventListener('click', () => {
            resetFilters();
            document.getElementById('tipoProductoFiltro').value = 'Mueble 🛋️';
            filtrarProductos();
        });
        document.getElementById('ofertaLi').addEventListener('click', () => {
            resetFilters();
            document.getElementById('ofertaFiltro').value = 'true';
            filtrarProductos();
        });

    }
    addMenuEventListeners()


    // Función para mostrar/ocultar el historial de pedidos
    function toggleOrderHistory() {
        const historyContainer = document.getElementById('history-container');
        historyContainer.style.display = historyContainer.style.display === 'none' ? 'block' : 'none';
    }
    function updateMenuForLoggedInUser() {
        document.getElementById("userProfile").classList.remove("hidden");
        document.getElementById("logout").classList.remove("hidden");
        document.getElementById("loginLi").classList.add("hidden");


    }

    function toggleVisibility(v, clas) {
        const fieldsToHide = document.querySelectorAll(clas);
        fieldsToHide.forEach(field => {
            if (v) {
                field.style.display = 'none'; // Oculta si está logueado
            } else {
                field.style.display = 'block'; // Muestra si NO está logueado
            }
        });
    }



    function logout() {

        // Limpiar la variable del usuario actual
        usuarioActualEmail = null;
        token = null;
        // document.getElementById('user-email').innerText = '';
        // document.getElementById('user-phone').innerText = '';
        // document.getElementById('user-address').innerText = '';
        // document.getElementById('nombre_cliente').value = names[0]; // Primer nombre
        //                 document.getElementById('apellido_cliente').value = names.slice(1).join(' ');

        //                 document.getElementById('cedula_cliente').value =                         '';
        //                 document.getElementById('telefono_cliente').value = '';
        //                 document.getElementById('registerEmail').value = '';
        //                 document.getElementById('direccion_cliente').value = '';
        resetearFormulario('order-form')
        toggleVisibility(0, '.ocultar-al-logueo');


        const orderHistory = document.getElementById('order-history').getElementsByTagName('tbody')[0];
        orderHistory.innerHTML = '';
        document.getElementById('user-info').style.display = 'none'; // Ocultar información del usuario
        updateMenuForLoggedOutUser(); // Actualiza el menú


    }
    function resetearFormulario(idFormulario) {
        // Obtener el formulario por su ID
        const formulario = document.getElementById(idFormulario);

        // Resetear todos los campos del formulario
        formulario.reset();
    }



    // Función para actualizar el menú para un usuario no logueado
    function updateMenuForLoggedOutUser() {
        document.getElementById("userProfile").classList.add("hidden");
        document.getElementById("logout").classList.add("hidden");
        document.getElementById("loginLi").classList.remove("hidden");
        carrito = []; // Vaciar el carrito
        updateCart();
        mensajeEstado('See ya ')
    }



    document.getElementById('registerFormElement').addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar el envío del formulario

        const registerPassword = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const formData = new FormData(document.getElementById("registerFormElement"));

        if (registerPassword !== confirmPassword) {
            document.getElementById('confirmPasswordError').textContent = 'Las contraseñas no coinciden.';
            return;
        }

        // Iniciar el loader aquí
        manejarCarga(() => {
            // Enviar la solicitud al servidor
            return fetch(jsonUrl, {
                method: 'POST',
                body: formData
            })
                .then(response => {
                    // Si la respuesta no es correcta, lanzamos un error
                    if (!response.ok) {
                        throw new Error(`Error al registrar: ${response.statusText}`);
                    }
                    return response.json(); // Convertir la respuesta a JSON
                })
                .then(data => {
                    if (data.success) {
                        // Manejar el registro exitoso
                        alert('Registro exitoso! Puedes iniciar sesión.');
                        mensajeEstado(`${data.message}`)
                    } else {
                        // Si el backend responde con un error (por ejemplo, email ya registrado)
                        document.getElementById('registerEmailError').textContent = data.message || 'Error en el registro.';
                        mensajeEstado(`${data.message}`)
                    }
                })
                .catch(error => {
                    // En caso de error, mostrar un mensaje genérico
                    console.error('Error:', error);
                    document.getElementById('registerEmailError').textContent = `Hubo un problema al registrar tu cuenta. Inténtalo nuevamente.`;
                    mensajeEstado(`hola${data.message}`,4000) 
                })

        });
    });



    // document.getElementById('registerFormElement').addEventListener('submit', function (event) {
    //         event.preventDefault(); // Evitar el envío del formulario

    //         const registerPassword = document.getElementById('registerPassword').value;
    //         const confirmPassword = document.getElementById('confirmPassword').value;
    //         const formData = new FormData(document.getElementById("registerFormElement"));

    //         if (registerPassword !== confirmPassword) {
    //             document.getElementById('confirmPasswordError').textContent = 'Las contraseñas no coinciden.';
    //             return;
    //         }
    //         fetch(jsonUrl, {
    //             method: 'POST',
    //             body: formData
    //         })
    //             .then(response => response.json())
    //             .then(data => {
    //                 if (data.success) {
    //                     // Manejar el registro exitoso
    //                     alert('Registro exitoso! Puedes iniciar sesión.');
    //                 } else {
    //                     // Manejar errores
    //                     document.getElementById('registerEmailError').textContent = data.message || 'Error en el registro.';
    //                 }
    //             })
    //             .catch(error => {
    //                 console.error('Error:', error);
    //             });
    //     });




    // Al cargar la página, agregar un estado al historial






    function toggleLogin() {
        const overlay = document.getElementById("overlay");
        const register = document.getElementById("registerForm");
        const loginForm = document.getElementById("loginForm");
        overlay.style.display = overlay.style.display === "none" ? "flex" : "none";
        register.style.display = 'none';
        loginForm.style.display = 'block';
    }
    // Función para mostrar/ocultar secciones
    function toggle(idButton, idCuadro) {
        document.getElementById(idButton).addEventListener('click', () => {
            const cuadro = document.getElementById(idCuadro);
            cuadro.style.display = cuadro.style.display === "none" ? "block" : "none";
            document.getElementById('nav').classList.remove('active');
        });
    }

    let isCompactView = false;

    document.getElementById('toggleView').addEventListener('click', () => {
        const productos = document.getElementById('productos');
        isCompactView = !isCompactView;

        if (isCompactView) {
            productos.classList.add('compact');

        } else {
            productos.classList.remove('compact');

        }
    });
    document.getElementById('toggleView').click();


    // Función para manejar el botón de retroceso
    window.addEventListener('popstate', (event) => {
        const toggleFilters = document.getElementById('toggleFilters');
        const carritoContainer = document.getElementById('carritoContainer');
        const formContainer = document.getElementById('form-container');
        const nav = document.getElementById('nav');
        const filtrosContainer = document.getElementById('filtrosContainer');

        // Cierra el carrito si está abierto
        if (carritoContainer.style.display === 'block') {
            carritoContainer.style.display = 'none';
            history.pushState(null, null, window.location.href);
        }
        // Cierra el formulario si está abierto
        else if (formContainer.style.display === 'block') {
            formContainer.style.display = 'none';
            history.pushState(null, null, window.location.href);
        }
        // Cierra la navegación si está activa
        else if (nav.classList.contains('active')) {
            nav.classList.remove('active');
            history.pushState(null, null, window.location.href);
        }
        // Cierra los filtros si están abiertos
        else if (filtrosContainer.style.display === 'block') {
            toggleFilters.style.visibility = 'visible';
            filtrosContainer.style.display = 'none';
            toggleFilters.style.visibility = 'visible';
            history.pushState(null, null, window.location.href);
        } else {
            // Si no hay menús abiertos, pregunta si están seguros de salir
            const salir = confirm("¿Estás seguro de que quieres salir de la aplicación?");
            if (salir) {
                window.location.href = 'https://ivn6.github.io/TIENLY/shop/nay.html'; // Cambia esto por la URL de la página a la que deseas redirigir
            } else {
                history.pushState(null, null, window.location.href); // Mantiene el estado actual
            }
            if (contador <= 0) {
                // Pregunta al usuario si quiere cerrar la página
                if (confirm("¿Quieres cerrar la página?")) {
                    window.location.href = 'https://ivn6.github.io/TIENLY/shop/nay.html'; // Cambia esto si deseas otra acción
                }
                contador = 10; // Reinicia el contador
            }
        }
    });

    // Inicializa el estado al cargar la página
    window.addEventListener('load', () => {
        history.replaceState(null, null, window.location.href);
    });




    const formContainer = document.getElementById('form-container');
    const closeButton = document.getElementById('close-button');

    // Función para cerrar el formulario
    function closeForm() {
        formContainer.style.display = 'none';
    }

    // Evento para cerrar el formulario al hacer clic en el botón
    closeButton.addEventListener('click', closeForm);



    const menuIcon = document.getElementById('menu-icon');
    const nav = document.getElementById('nav');

    menuIcon.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    document.addEventListener('click', (event) => {
        if (!menuIcon.contains(event.target) && !nav.contains(event.target)) {
            nav.classList.remove('active');
        }
    });


    function toggleCart() {
        const carritoContainer = document.getElementById('carritoContainer');
        carritoContainer.style.display = (carritoContainer.style.display === 'none' || carritoContainer.style.display === '') ? 'block' : 'none';
    }




    // Evento para abrir el carrito
    document.getElementById('menu-carrito').addEventListener('click', (event) => {
        event.stopPropagation(); // Evita que el clic en el botón cierre el carrito
        toggleCart();
        nav.classList.remove('active');
        document.getElementById('filtrosContainer').style.display = 'none'

    });

    // Evento para cerrar el carrito si se hace clic fuera de él
    document.addEventListener('click', () => {
        const carritoContainer = document.getElementById('carritoContainer');
        carritoContainer.style.display = 'none';
    });

    // Evitar que el carrito se cierre al hacer clic dentro de él
    document.getElementById('carritoContainer').addEventListener('click', (event) => {
        event.stopPropagation();
    });
    // Evento para cerrar el fomu si se hace clic fuera de él
    document.addEventListener('click', () => {
        const formu = document.getElementById('form-container');
        formu.style.display = 'none';
    });

    // Evitar que el form se cierre al hacer clic dentro de él
    document.getElementById('form-container').addEventListener('click', (event) => {
        event.stopPropagation();
    });
    // Función para cerrar cualquier overlay
function closeOverlay(elementId) {
    const overlay = document.getElementById(elementId);
    if (overlay && overlay.style.display !== 'none') {
        overlay.style.display = 'none'; // Cierra el overlay
    }
}

// Escucha el evento popstate una sola vez
window.addEventListener('popstate', function(event) {
    // Lista de IDs de elementos a cerrar
    const elementsToClose = ['overlay', 'modal', 'form-container']; 

    // Cierra cada uno de los elementos listados
    elementsToClose.forEach(function(elementId) {
        closeOverlay(elementId);
    });
});

    let contador = 10;

    function handleBackNavigation() {
        const openMenus = document.querySelectorAll(' .form-container.open, .form.open');
        contador--;
        console.log(contador); // Muestra el contador en la consola

        if (openMenus.length > 0) {
            // Cierra el último menú abierto
            const lastMenu = openMenus[openMenus.length - 1];
            lastMenu.classList.remove('open');
        } else if (contador <= 0) {
            // Pregunta al usuario si quiere cerrar la página
            if (confirm("¿Quieres cerrar la página?")) {
                window.location.href = 'about:blank'; // Cambia esto si deseas otra acción
            }
            contador = 10; // Reinicia el contador
        }
    }










    const filtro = (() => {
        const toggleFilters = document.getElementById('toggleFilters');
        const filtrosContainer = document.getElementById('filtrosContainer');

        toggleFilters.addEventListener('click', () => {
            filtrosContainer.style.display = filtrosContainer.style.display === 'none' ? 'block' : 'none';
            toggleFilters.style.visibility = filtrosContainer.style.display === 'none' ? 'visible' : 'hidden';
        });

        function closeFilters() {
            filtrosContainer.style.display = 'none';
            toggleFilters.style.visibility = 'visible';
            hideAllSelects();
        }

        function hideAllSelects() {
            const selects = filtrosContainer.querySelectorAll('select');
            selects.forEach(select => {
                select.style.display = 'none';
            });
        }

        document.addEventListener('click', (event) => {
            if (!filtrosContainer.contains(event.target) && !toggleFilters.contains(event.target)) {
                closeFilters();
            }
        });

        function toggleSelect(selectId) {
            const select = document.getElementById(selectId);
            const isDisplayed = select.style.display === 'block';
            hideAllSelects();
            select.style.display = isDisplayed ? 'none' : 'block';
        }

        function handleSelectChange(selectId) {
            const select = document.getElementById(selectId);
            select.style.display = 'none'; // Ocultar el select después de seleccionar
        }

        function toggleInputs(inputGroupId) {
            const inputGroup = document.getElementById(inputGroupId);
            inputGroup.style.display = inputGroup.style.display === 'none' ? 'block' : 'none';
        }

        return {
            closeFilters,
            toggleSelect,
            handleSelectChange,
            toggleInputs
        };
    })();




    // Aquí pones la URL de tu archivo JSON
    const jsonUrl = 'https://script.google.com/macros/s/AKfycbyxsDz1me0gNAxkUhZZSGJy8Sd4K8-R_icIWSgLcYVrSIAj1noPPn-qebd_fBxFvbvE/exec';
    const version = Date.now();
    const pJson = 'https://ivn6.github.io/JHNPTA/productos.json?v='+version;
    let productosData = []; // Variable para almacenar los productos para no recargar varias veces revisar para cuando se actualice
   const PRODUCTOS_CACHE_KEY = "productos_cache";
const PRODUCTOS_CACHE_TIME = 1000 * 60 * 60; // 10 minutos

   
    function cargarProductos() {
    const cache = localStorage.getItem(PRODUCTOS_CACHE_KEY);

    if (cache) {
        try {
            const cacheData = JSON.parse(cache);

            const cacheValido = Date.now() - cacheData.timestamp < PRODUCTOS_CACHE_TIME;
const sinInternet = !navigator.onLine;

if (cacheValido || sinInternet) {
    productosData = cacheData.data;
    mostrarProductos(productosData);
    llenarFiltros(productosData);

    if (sinInternet) {
        mensajeEstado('Mostrando productos sin conexión 📵');
    } else {
        mensajeEstado('Productos cargados desde caché 📦');
    }

    return;
}

        } catch (e) {
            console.warn("Cache corrupta, se vuelve a pedir a la API");
        }
    }

    // Si no hay cache válida → fetch normal
    fetch(pJson)
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(data => {
            productosData = data;

            // Guardar en localStorage
            localStorage.setItem(
                PRODUCTOS_CACHE_KEY,
                JSON.stringify({
                    timestamp: Date.now(),
                    data: data
                })
            );

            mostrarProductos(productosData);
            llenarFiltros(productosData);
            mensajeEstado('Productos cargados desde servidor 🌐');
        })
        .catch(error => {
            console.error('Error en fetch:', error);
            mensajeEstado('Error cargando productos');
        });
}

cargarProductos();







    function mostrarProductos(data) {
        const productosDiv = document.getElementById('productos');
        productosDiv.innerHTML = ''; // Limpiar productos

        data.forEach(producto => {
            const productoDiv = crearProductoDiv(producto);
            productosDiv.appendChild(productoDiv);
        });
    }

    function crearProductoDiv(producto) {
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('producto');

        // Crear elementos del producto
        const imgElement = crearImagen(producto.link_foto, producto.producto_Nombre);
        const nombreElement = crearElemento('h3', producto.producto_Nombre);
        const tipoElement = crearElemento('p', `Tipo: ${producto["Tipo de producto"]} ${producto["Tipo de Mueble 🛋️"] ? `(${producto["Tipo de Mueble 🛋️"]})` : ''}`);
        const precioElement = crearPrecioElement(producto);
        const detallesElement = crearDetallesElement(producto["Detalles del producto ( opcional )"]);
        const seoElement = crearDetallesElement(producto["seo"]);
        const tallaElement = producto["¿Cuál es la talla?"] ? crearElemento('p', `Talla: ${producto["¿Cuál es la talla?"]}`) : '';
        const cantidadElement = producto.cantidad ? crearElemento('p', `disponible: ${producto.cantidad}`) : '';
        const coloresElement = producto.colores ? crearElemento('p', `Colores: ${producto.colores}`) : '';

        // Botón de añadir al carrito
        const addToCartButton = crearAddToCartButton(producto);

        // Botón para ver más detalles
        const verMasButton = crearVerMasButton(producto);

        // Añadir todos los elementos al contenedor del producto
        productoDiv.append(imgElement, nombreElement, tipoElement, precioElement, detallesElement,seoElement, tallaElement, cantidadElement, coloresElement, addToCartButton, verMasButton);

        coloresElement ? coloresElement.style.display = 'none' : '';
        tipoElement.style.display = 'none';
        nombreElement.addEventListener('click', () => {
        mostrarDetallesEnModal(producto); // Mostrar detalles en el modal cuando se haga clic en el nombre del producto
    })

        return productoDiv;
    }

    function crearElemento(tipo, texto) {
        const element = document.createElement(tipo);
        element.textContent = texto;
        return element;
    }

    function crearImagen(src, alt) {
    const productoImagenDiv = document.createElement('div');
    productoImagenDiv.classList.add('producto-imagen');

    const img = document.createElement('img');
    
    // En lugar de cargar la imagen real, ponemos un placeholder (cuadro gris o transparente)
    img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="; 
    
    // Guardamos la URL real en un atributo 'data'
    img.setAttribute('data-src', src);
    img.alt = alt;
    img.classList.add('lazy-img'); // Clase para identificarla
    // 3. Optimizaciones extra de renderizado
    img.decoding = "async";

    productoImagenDiv.appendChild(img);
    
    // Llamamos al observador para que vigile esta nueva imagen
    observer.observe(img); 
    
    return productoImagenDiv;
}

    function crearPrecioElement(producto) {
        const precioElement = document.createElement('p');
        if (producto.oferta) {
            precioElement.innerHTML = `Precio: <span style="text-decoration: line-through;">$${producto.precio_venta}</span> $${producto.oferta}`;
        } else {
            precioElement.textContent = `Precio: $${producto.precio_venta}`;
        }
        return precioElement;
    }

    function crearDetallesElement(detalles) {
    const detallesElement = document.createElement('p');
    
    // Reemplaza los saltos de línea '\n' por <br> y también los puntos '.' por <br>
    detalles = detalles.replace(/\n/g, '<br>').replace(/\./g, '.<br>');
    
    detallesElement.innerHTML = `Detalles: ${detalles}`;
    detallesElement.style.display = 'none'; // Ocultar detalles por defecto
    return detallesElement;
}



    // Función para crear el botón "Ver más detalles"
    function crearVerMasButton(producto) {
        const button = document.createElement('button');
        button.textContent = 'Ver más detalles';

        // Asignamos una clase para aplicar estilo
        button.classList.add('btn-verMas');  // Usamos la clase 'btn-verMas' para todos los botones de ver más

        // Usamos un atributo data-producto-id para asociar el producto sin necesidad de ID único
        button.setAttribute('data-producto-id', producto.id);

        // Evento al hacer clic
        button.addEventListener('click', () => {
            mostrarDetallesEnModal(producto);
        });

        return button;
    }

    // Función para crear el botón "Añadir al carrito"
    function crearAddToCartButton(producto) {
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('btn-container');

    const button = document.createElement('button');

    if (producto.cantidad === 0) {
        button.textContent = 'Agotado';
        button.disabled = true;
    } else {
        // Crear el span para el precio dentro del botón
        const precioSpan = document.createElement('span');
        precioSpan.classList.add('precio');
        precioSpan.textContent = `$${producto.oferta || producto.precio_venta}`;

        // Crear el span para el emoji dentro del botón
        const emojiSpan = document.createElement('span');
        emojiSpan.classList.add('emoji');
        emojiSpan.textContent = '🛒'; // Emoji de carrito

        button.textContent = ''; // Aseguramos que el texto principal es este

        // Añadir los spans al botón
        button.appendChild(precioSpan);
        button.appendChild(emojiSpan);

        button.addEventListener('click', () => {
            addToCart(producto);
            mensajeEstado(`${producto.producto_Nombre} ha sido añadido al carrito.`);
        });

        // Comprobamos si hay una oferta y aplicamos el estilo
        if (producto.oferta) {
            button.style.border = '1px solid #0CE279'; // Añade borde verde si hay oferta
            button.style.boxShadow = '0 0 20px #0CE279'; // Añade sombra verde si hay oferta
        }
    }

    // Asignamos una clase para aplicar estilo
    button.classList.add('btn-anadirCarrito');  // Usamos la clase 'btn-anadirCarrito' para todos los botones de añadir al carrito

    buttonContainer.appendChild(button);
    return buttonContainer;
}



    function mostrarDetallesEnModal(producto) {
    // Nombre del producto
    document.getElementById('modalNombre').textContent = producto.producto_Nombre;

    // Imagen del producto
    const imgElement = document.getElementById('modalImg');
    imgElement.src = producto.link_foto || ''; // URL de la imagen
    imgElement.alt = producto.producto_Nombre; // Alt de la imagen

    // Detalles del producto
    const detalles = producto["Detalles del producto ( opcional )"];
    document.getElementById('modalDetalles').innerHTML = `${detalles.replace(/\\n/g, '<br>').replace(/\. /g, '<br>').replace(/\  /g, '<br>')}` || ''; // Mostrar o no

    // Precio
    const precio = producto.precio_venta;
    const precioOferta = producto.oferta;
    const precioElement = document.getElementById('modalPrecio');

    if (precioOferta) {
        // Si hay oferta, mostrar el precio original tachado y el precio de oferta
        precioElement.innerHTML = `<br><span style="text-decoration: line-through; font-weight: bold; font-size: 16px;">$${precio}</span><br> 
                                   <span style="font-weight: bold; font-size: 18px; color: red;">$${precioOferta}</span><div class="controles-voz">
    <button onclick="hablar(document.getElementById('modalDetalles').innerText)">▶️ Leer</button>
    <button onclick="pausar()">⏸️ Pausar</button>
    <button onclick="detener()">⏹️ Detener</button>
</div>`;
    } else {
        // Si no hay oferta, solo mostrar el precio normal
        precioElement.innerHTML = `<br><span  style="font-weight: bold">Precio: $${precio}</span><br><div class="controles-voz">
    <button onclick="hablar(document.getElementById('modalDetalles').innerText)">▶️ Leer</button>
    <button onclick="pausar()">⏸️ Pausar</button>
    <button onclick="detener()">⏹️ Detener</button>
</div>    `;
    }

    // Cantidad
    const cantidad = producto.cantidad;
     document.getElementById('modalCantidad').innerHTML = cantidad ? `<br> <span  style="font-weight: bold; color:blue">Cantidad disponible: ${cantidad}</span>` : `<span  style="font-weight: bold; font-size:20px;">Cantidad disponible: ${cantidad}</span> <span  style="font-weight: bold; font-size:20px;color:red">AGOTADO 🙊</span>`; // Mostrar o no

    // Colores
    const colores = producto.colores;
    document.getElementById('modalColores').textContent = colores || ''; // Mostrar o no

    // Talla
    const talla = producto["¿Cuál es la talla?"];
    document.getElementById('modalTalla').textContent = talla || ''; // Mostrar o no

    // Crear botón de "Añadir al carrito" en el modal
    const addToCartButtonModal = crearAddToCartButton(producto); // Llama a la función que crea el botón
    const modalContent = document.querySelector('.modal-content'); // Asegúrate de que este es el contenedor correcto
    const existingAddToCartButton = modalContent.querySelector('.btn-container'); // Verifica si ya existe el botón (para evitar duplicados)

    if (existingAddToCartButton) {
        modalContent.removeChild(existingAddToCartButton); // Elimina el botón antiguo, si existe
    }
    modalContent.append(addToCartButtonModal); // Agrega el nuevo botón al modal
    addToCartButtonModal.style.position = 'relative';
    addToCartButtonModal.style.bottom = '5px';

    // Limpiar el modal de elementos adicionales antes de mostrarlo
    const materialElement = modalContent.querySelector('.material'); // Asumiendo que tendrás una clase específica para material

    // Si hay un material, mostrarlo
    if (producto.material) {
        if (!materialElement) {
            const newMaterialElement = document.createElement('p');
            newMaterialElement.classList.add('material');
            newMaterialElement.textContent = `Material: ${producto.material}`;
            modalContent.appendChild(newMaterialElement);
        } else {
            materialElement.textContent = `Material: ${producto.material}`; // Actualiza el texto si ya existe
        }
    } else if (materialElement) {
        modalContent.removeChild(materialElement); // Elimina el elemento si no hay material
    }

    // Mostrar el modal
    const modal = document.getElementById('modal');
    modal.style.display = 'block'; // Mostrar el modal

    // Añadir un estado a la historia
}



    document.getElementById('cerrarModal').onclick = function () {
        const modal = document.getElementById('modal');
    
        modal.style.display = 'none'; // Ocultar el modal
        history.pushState({ modalOpen: false }, 'modal', '') // Volver al estado anterior
    };

  // Variable global para controlar la instancia de voz
let locucion;
let vocesDisponibles = [];

// Función para cargar las voces (el navegador las carga de forma asíncrona)
function cargarVoces() {
    vocesDisponibles = window.speechSynthesis.getVoices();
}

// Algunos navegadores requieren este evento para detectar las voces
window.speechSynthesis.onvoiceschanged = cargarVoces;

function hablar(texto) {
    if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
        return;
    }

    window.speechSynthesis.cancel();
    locucion = new SpeechSynthesisUtterance(texto);

    // BUSCAR LA VOZ DE COLOMBIA
    // Intentamos encontrar una que diga "Colombia" o tenga el código "es-CO"
    const vozColombia = vocesDisponibles.find(voz => 
        voz.lang === 'es-CO' || voz.name.includes('Colombia')
    );

    if (vozColombia) {
        locucion.voice = vozColombia;
    } else {
        // Si no existe, buscamos cualquier voz en español (es-ES, es-MX, etc)
        const vozEspanol = vocesDisponibles.find(voz => voz.lang.includes('es'));
        if (vozEspanol) locucion.voice = vozEspanol;
        console.log("Voz de Colombia no encontrada, usando español genérico.");
    }

    locucion.rate = 1; 
    window.speechSynthesis.speak(locucion);
}

function pausar() {
    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.pause();
    }
}

function detener() {
    window.speechSynthesis.cancel();
}

    // // Cerrar el modal si se hace clic fuera del contenido
    // // Evento para cerrar el carrito si se hace clic fuera de él
    // document.addEventListener('click', () => {
    //     const cv = document.getElementById('modal');
    //     cv.style.display = 'none';
    // });
    

    // // Interacciones de zoom con la imagen del modal
    // const img = document.getElementById("modalImg");
    // const d = document.getElementById('productos');

    // img.addEventListener("touchstart", function () {
    //     d.style.transition = "none"; // Desactiva el desplazamiento en el body
    //     img.style.transition = "none"; // Desactiva la transición al inicio del zoom
    // });

    // img.addEventListener("touchend", function () {
    //     d.style.transition = "scale(1)"; // Restaura el desplazamiento en el body
    //     img.style.transition = "transform 0.3s"; // Activa la transición al soltar
    //     img.style.transform = "scale(1)"; // Vuelve a la escala original
    // });

    // img.addEventListener("touchmove", function (e) {
    //     e.preventDefault(); // Previene el comportamiento por defecto (como el desplazamiento)
    // });












    function mensajeEstado(mensaje, tiempo = 1200) {
        const respuestaDiv = document.getElementById('respuesta');
        respuestaDiv.textContent = mensaje;
        respuestaDiv.style.display = 'block'; // Mostrar el div
        setTimeout(() => {
            respuestaDiv.textContent = '';
            respuestaDiv.style.display = 'none'; // Mostrar el div
        }, tiempo);
    }
    function cerrarMensaje() {
        const respuestaDiv = document.getElementById('respuesta');
        respuestaDiv.style.display = 'none'; // Ocultar el div
    }

  const CARRITO_KEY = "carrito_shop";

    // Carrito
    let carrito = [];

const carritoGuardado = localStorage.getItem(CARRITO_KEY);

if (carritoGuardado) {
    try {
        carrito = JSON.parse(carritoGuardado);
        updateCart();
        mensajeEstado("Carrito restaurado 🛒");
    } catch (e) {
        console.warn("Carrito corrupto, se limpia");
        localStorage.removeItem(CARRITO_KEY);
    }
}



    // Añadir al carrito
   function addToCart(producto) {
    const existingProduct = carrito.find(item => item.id === producto.id);
    if (existingProduct) {
        if (existingProduct.cantidad < producto.cantidad) {
            existingProduct.cantidad++;
            updateCart();
        } else {
            mensajeEstado("No hay suficiente stock.");
        }
    } else {
        if (producto.cantidad > 0) {
            // Verificar si el producto tiene una oferta
            const precioFinal = producto.oferta && producto.oferta !== producto.precio_venta ? producto.oferta : producto.precio_venta;
            carrito.push({ ...producto, cantidad: 1, cantidadMax: producto.cantidad, precioFinal: precioFinal });
            updateCart();
        }
    }
}



    // Actualizar el carrito
    function updateCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = ''; // Limpiar contenido anterior
    let total = 0;
    let totalCount = 0; // Variable para contar el total de productos

    // Crear tabla
    const table = document.createElement('table');
    table.style.width = '100%';
    table.style.borderCollapse = 'collapse';

    carrito.forEach(item => {
        const itemRow1 = document.createElement('tr');
        const itemRow2 = document.createElement('tr');

        // Fila 1: Imagen y nombre del producto
        const imgCell = document.createElement('th');
        imgCell.rowSpan = 2; // rowspan para la imagen
        const imgElement = document.createElement('img');
        imgElement.src = item.link_foto;
        imgElement.alt = item.producto_Nombre;
        imgElement.style.width = '60px'; // Ajusta el tamaño según sea necesario
        imgCell.appendChild(imgElement);

        const nameCell = document.createElement('th');
        nameCell.colSpan = 3; // colspan para el nombre del producto
        nameCell.textContent = item.producto_Nombre;
        nameCell.style.maxWidth = '200px';
        nameCell.style.wordWrap = 'break-word';

        // Mostrar el ID de producto (opcional)
        const idCell = document.createElement('span');
        idCell.style.fontSize = 'small';
        idCell.style.color = 'gray';
        idCell.textContent = `   ID: ${item.id}`; // Mostrar ID del producto
        nameCell.appendChild(idCell);

        itemRow1.appendChild(imgCell);
        itemRow1.appendChild(nameCell);
        table.appendChild(itemRow1);

        // Fila 2: Cantidad, precio y botón de eliminar
        const cantidadCell = document.createElement('td');
        cantidadCell.style.textAlign = 'center';
        cantidadCell.style.whiteSpace = 'nowrap';

        // Botón para disminuir la cantidad
        const decreaseButton = document.createElement('button');
        decreaseButton.textContent = '-';
        decreaseButton.disabled = item.cantidad <= 1; // Deshabilitar si es uno
        decreaseButton.addEventListener('click', () => {
            if (item.cantidad > 1) {
                item.cantidad--;
                cantidadCell.textContent = item.cantidad; // Actualizar la celda de cantidad
                total -= item.precioFinal; // Actualizar total
                precioCell.textContent = `$${(item.precioFinal * item.cantidad).toFixed(2)}`; // Actualizar precio total
                updateCart(); // Volver a renderizar el carrito para mostrar cambios en botones
            }
        });
        cantidadCell.appendChild(decreaseButton);
        cantidadCell.appendChild(document.createTextNode(` ${item.cantidad} `)); // Mostrar cantidad

        // Botón para aumentar la cantidad
        const increaseButton = document.createElement('button');
        increaseButton.textContent = '+';
        increaseButton.disabled = item.cantidad >= item.cantidadMax; // Deshabilitar si ya está al máximo
        increaseButton.addEventListener('click', () => {
            if (item.cantidad < item.cantidadMax) {
                item.cantidad++;
                cantidadCell.textContent = item.cantidad; // Actualizar la celda de cantidad
                total += item.precioFinal; // Actualizar total
                precioCell.textContent = `$${(item.precioFinal * item.cantidad).toFixed(2)}`; // Actualizar precio total
                updateCart(); // Volver a renderizar el carrito para mostrar cambios en botones
            } else {
                mensajeEstado("No hay suficiente stock para aumentar la cantidad.");
            }
        });
        cantidadCell.appendChild(increaseButton);

        // Columna de precio total (precio unitario * cantidad)
        const precioCell = document.createElement('td');
        precioCell.textContent = `$${(item.precioFinal * item.cantidad).toFixed(2)}`; // Mostrar precio total
        total += item.precioFinal * item.cantidad; // Calcular total general

        // Columna de eliminar
        const accionesCell = document.createElement('th');
        const removeButton = document.createElement('button');
        removeButton.textContent = '✖';
        removeButton.addEventListener('click', () => {
            carrito = carrito.filter(cartItem => cartItem.id !== item.id);
            updateCart(); // Actualizar el carrito
        });
        accionesCell.appendChild(removeButton);

        itemRow2.appendChild(cantidadCell);
        itemRow2.appendChild(precioCell);
        itemRow2.appendChild(accionesCell);
        table.appendChild(itemRow2);

        totalCount += item.cantidad;  // Sumar la cantidad de este producto

    });

    cartDiv.appendChild(table);

    // Mostrar total
    document.getElementById('cart-total').textContent = total.toFixed(2);
    document.getElementById('cart-count').textContent = totalCount;
    document.getElementById('cart-counter').textContent = totalCount;

    // Mostrar/ocultar el botón de finalizar pedido
    const finalizarButton = document.getElementById('finalizar-pedido');
    finalizarButton.style.display = carrito.length > 0 ? 'block' : 'none';
    // Mostrar/ocultar el  formulario 
    const formButton = document.getElementById('form-container');
    formButton.style.display = carrito.length > 0 ? 'none' : 'none';
    // Mostrar/ocultar el  boton vaciar carrito 
    const vaciarCarritoButton = document.getElementById('clear-cart');
    vaciarCarritoButton.style.display = carrito.length > 0 ? 'block' : 'none';

    // Vaciar carrito
    document.getElementById('clear-cart').addEventListener('click', () => {
        const carritoContainer = document.getElementById('carritoContainer');
        carritoContainer.style.display = 'none';
        vaciarCarrito();
    });

    function vaciarCarrito() {
        carrito = []; // Vaciar el carrito
        updateCart(); // Actualizar la vista del carrito
        document.getElementById("userProfile").classList.add("hidden");
        document.getElementById("logout").classList.add("hidden");
        document.getElementById("loginLi").classList.remove("hidden");
    }
    function guardarCarrito() {
    localStorage.setItem(CARRITO_KEY, JSON.stringify(carrito));
}

    guardarCarrito();
}


const FORM_KEY = 'checkout_form_data';
const form = document.getElementById('order-form');

if (form) {
    // 1️⃣ Restaurar datos guardados
    const savedData = localStorage.getItem(FORM_KEY);
    if (savedData) {
        const data = JSON.parse(savedData);
        Object.keys(data).forEach(name => {
            const field = form.elements[name];
            if (field) field.value = data[name];
        });
    }

    // 2️⃣ Guardar automáticamente al escribir
    form.addEventListener('input', () => {
        const formData = {};
        [...form.elements].forEach(el => {
            if (el.name) {
                formData[el.name] = el.value;
            }
        });
        localStorage.setItem(FORM_KEY, JSON.stringify(formData));
    });

    // 3️⃣ Limpiar cuando se envía el pedido
    form.addEventListener('submit', () => {
        localStorage.removeItem(FORM_KEY);
    });
}
    const barriosZipa = [
        "Alcolpavis",
        "Algarra I",
        "Algarra II",
        "Algarra III",
        "Altamira",
        "Altos del Zipa",
        "América 500",
        'Aposento Alto',
        "Barandillas",
        "Bolivar",
        "Bosques de Silecia",
        "Bosques del Zipa",
        "Centro Histórico",
        "El Porvenir del Zipa I",
        "El Porvenir del Zipa II",
        "El Prado",
        "El Reposo",
        "El Rodeo",
        "El Rosal",
        "El Tejar",
        "Estación Salinas",
        "Julio Caro",
        "Pasoancho",
        "La Concepción",
        "La Esmeralda",
        "La Esperanza",
        "La Floresta",
        "La Mariela",
        "La Libertad",
        "La Paz",
        "Las Salinas",
        "Las Villas",
        "Los Cambulos",
        "Los Cedrales",
        "Los Coclies",
        "Los Comuneros 1",
        "Los Comuneros 2",
        "Minuto de Dios",
        "Portachuelo",
        "Prados del Mirador",
        "Primero de Mayo",
        "Rincón Barandillas",
        "Rincón del Zipa",
        "Samaria",
        "San Antonio",
        "San Carlos",
        "San Gabriel",
        "San Juanito",
        "San Miguel",
        "San Pablo",
        "San Rafael",
        "Santa Isabel",
        "Santa Isabel el Rodeo",
        "Santa Mónica",
        "Terraplén",
        "Villa Luz",
        "Villa Sol",
        "Villa Juliana",
        "Villa María",
        "Villa Unión",
        "Villas del Rosario"
    ];

    //Lógica para el Botón "Finalizar Pedido"
    document.getElementById('finalizar-pedido').addEventListener('click', () => {
        //  document.getElementById('finalizar-pedido').style.display = 'none'

        document.getElementById('form-container').style.display = 'block';
    });


    function enviarFormulario(action) {
        // Recoger los valores del formulario
        const nombreCliente = document.getElementById('nombre_cliente').value.trim();
        const apellidoCliente = document.getElementById('apellido_cliente').value.trim();
        const cedulaCliente = document.getElementById('cedula_cliente').value.trim();
        const telefonoCliente = document.getElementById('telefono_cliente').value.trim();
        const departamentoCliente = document.getElementById('departamento_cliente').value.trim();
        const ciudadCliente = document.getElementById('ciudad_cliente').value.trim();
        const barrioCliente = document.getElementById('barrio_cliente').value.trim();
        const direccionCliente = document.getElementById('direccion_cliente').value.trim();
        const emailCliente = document.getElementById('email_cliente').value.trim();
        const informacionAdicionalCliente = document.getElementById('informacionAdicional').value.trim();

        document.getElementById('form-container').style.display = "none";
        document.getElementById('carritoContainer').style.display = 'none'

        document.getElementById('action').value = action;

        // Crear FormData
        const formData = new FormData(document.getElementById("order-form"));
        const carritoJSON = JSON.stringify(carrito);
        const conteo = document.getElementById('cart-count');
        const total = parseFloat(document.getElementById('cart-total').textContent);

        // Crear productos
        const productos = carrito.map(item => ({
            "Tipo de producto": item["Tipo de producto"],
            "Tipo de Mueble 🛋️": item["Tipo de Mueble 🛋️"],
            "Detalles del producto ( opcional )": item["Detalles del producto ( opcional )"],
            "id": item.id,
            "link_foto": item.link_foto,
            "cantidad": item.cantidad * 2,
            "producto_Nombre": item.producto_Nombre,
            "Para Hombre o mujer": item["Para Hombre o mujer"],
            "colores": item.colores,
            "oferta": item.oferta,
            "precio_venta": item.precio_venta / 4,
            "cantidadMax": item.cantidadMax
        }));

        // Generar código único
        const codigoCliente = `${carrito.length}${emailCliente.charAt(0)}${cedulaCliente.charAt(0)}${cedulaCliente.slice(-1)}${barrioCliente.substring(0, 3)}p${carrito.length}_${conteo.textContent}`;

        // Agregar productos al FormData
        productos.forEach((producto, index) => {
            formData.append(`producto_${index}`, JSON.stringify(producto));
        });
        formData.append('total', total);
        formData.append('codTem', codigoCliente);
        formData.append('carrito', carritoJSON);

        // Utilizar manejarCarga para hacer la solicitud, pero fuera de los `then`
        manejarCarga(() => {
            return fetch(jsonUrl, {
                method: 'POST',
                body: formData
            })

                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Error al enviar el formulario: ${response.statusText}`);
                        mensajeEstado(`${response.statusText}`)
                    }
                    // return response.text();  // Aquí se obtiene la respuesta del servidor
                    return response.json();  // Cambiar a .json() para obtener el objeto JSON
                })          
                .then(data => {
                    if (data.success) {
                        // Muestra el mensaje en el HTML
                        document.getElementById('respuesta').innerHTML = data.message;
                        document.getElementById('userProfile').style.display = 'block';

                        // Aquí agregar el nuevo pedido a la tabla de historial
                        const historyContainer = document.getElementById('history-container');
                        historyContainer.style.display = 'block'
                        const orderHistoryTable = document.getElementById('order-history').getElementsByTagName('tbody')[0];

                        // Crear una nueva fila con la información del pedido
                        const row = orderHistoryTable.insertRow(0);  // Inserta en la primera fila
                        row.setAttribute('data-pedido-id', data.idPedido);  // Atributo para identificar este pedido

                        // Agregar las celdas con los datos del pedido
                        const cellId = row.insertCell(0);
                        cellId.textContent = data.idPedido;

                        const cellFecha = row.insertCell(1);
                        cellFecha.textContent = new Date(data.hora).toLocaleString();  // Convertir la hora en un formato legible

                        const cellTotal = row.insertCell(2);
                        cellTotal.textContent = `$${data.total.toFixed(2)}`;  // Mostrar el total con formato de moneda

                        const cellEstado = row.insertCell(3);
                        cellEstado.textContent = 'Pendiente';  // Puedes cambiar esto más adelante si cambian los estados

                        // Crear el botón de "Ver detalles" para expandir los productos del pedido
                        const cellDetalles = row.insertCell(4);
                        const detallesButton = document.createElement('button');
                        detallesButton.textContent = 'Ver detalles';
                        detallesButton.classList.add('ver-detalles');
                        detallesButton.addEventListener('click', () => {
                            verDetallesPedido(data.pedido);
                        });
                        cellDetalles.appendChild(detallesButton);

                        // Mostrar el historial si no estaba visible
                        historyContainer.style.display = 'block';
                        mensajeEstado(`${data.message}`, 4000);
                    } else {
                        mensajeEstado(`Hubo un error al procesar el pedido. ${data.message}`, 4000);
                    }
                })

                .catch(error => {
                    console.error('Error:', error);
                    // Mostrar el error al usuario
                    document.getElementById('respuesta').innerHTML = 'Hubo un error al enviar el formulario. Intenta nuevamente.';
                    mensajeEstado('Hubo un problema al enviar el formulario. Inténtalo nuevamente.', 4000);
                    mensajeCargando.style.display = 'none'; // Asegurarse de ocultar el loader en caso de error
                });
        })
    }

    function verDetallesPedido(detallesCarritoJSON) {
        const detallesCarrito = JSON.parse(detallesCarritoJSON);

        // Contenedor para los detalles del pedido
        const detallesContenedor = document.getElementById('detalles-contenedor');
        detallesContenedor.innerHTML = ''; // Limpiar cualquier contenido previo

        // Iterar sobre los productos y crear una tarjeta para cada uno
        detallesCarrito.forEach(producto => {
            const productoDetalle = document.createElement('div');
            productoDetalle.classList.add('producto-detalle');

            // Contenido de la tarjeta
            productoDetalle.innerHTML = `
            <h5>${producto.nombre}</h5>
            <p class="cantidad">Cantidad: ${producto.cantidad}</p>
            <p class="precio">Precio: $${(producto.precio * producto.cantidad).toFixed(2)}</p>
        `;

            // Añadir el detalle del producto al contenedor
            detallesContenedor.appendChild(productoDetalle);
        });

        // Mostrar el modal
        document.getElementById('detalles-modal').style.display = 'block';
    }

    document.getElementById('order-form').addEventListener('submit', function (event) {
        event.preventDefault(); // Previene la recarga de la página
        enviarFormulario('crear'); // Llama a la función para enviar datos
    });

    function llenarFiltros(data) {
        const tipoProductoFiltro = document.getElementById('tipoProductoFiltro');
        const tallaFiltro = document.getElementById('tallaFiltro');
        const coloresFiltro = document.getElementById('coloresFiltro');
        const listaProductosFiltro = document.getElementById('listaProductosFiltro');

        const tipos = [...new Set(data.map(item => item["Tipo de producto"]))];
        const tallas = [...new Set(data.map(item => item["¿Cuál es la talla?"]))];
        const colores = [...new Set(data.map(item => item["colores"]))];

        tipos.forEach(tipo => {
            const option = document.createElement('option');
            option.value = tipo;
            option.textContent = tipo;
            tipoProductoFiltro.appendChild(option);
        });

        tallas.forEach(talla => {
            const option = document.createElement('option');
            option.value = talla;
            option.textContent = talla;
            tallaFiltro.appendChild(option);
        });

        colores.forEach(color => {
            const option = document.createElement('option');
            option.value = color;
            option.textContent = color;
            coloresFiltro.appendChild(option);
        });
    }
    function debounce(func, delay) {
        let timeout;
        return function (...args) {
            const context = this;
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(context, args), delay);
        };

    }

    // Usando debounce con tu función de filtrar productos
    const debouncedFiltrarProductos = debounce(filtrarProductos, 10);

    // Agregar event listeners usando la función debounced
    document.getElementById('tipoProductoFiltro').addEventListener('change', debouncedFiltrarProductos);
    document.getElementById('listaProductosFiltro').addEventListener('change', debouncedFiltrarProductos);
    document.getElementById('generoFiltro').addEventListener('change', debouncedFiltrarProductos);
    document.getElementById('tallaFiltro').addEventListener('change', debouncedFiltrarProductos);
    document.getElementById('coloresFiltro').addEventListener('change', debouncedFiltrarProductos);
    document.getElementById('ofertaFiltro').addEventListener('change', debouncedFiltrarProductos);
    document.getElementById('precioMinimo').addEventListener('input', debouncedFiltrarProductos);
    document.getElementById('precioMaximo').addEventListener('input', debouncedFiltrarProductos);


    function filtrarProductos() {
        const tipoSeleccionado = document.getElementById('tipoProductoFiltro').value;
        const listaSeleccionada = document.getElementById('listaProductosFiltro').value;
        const generoSeleccionado = document.getElementById('generoFiltro').value;
        const tallaSeleccionada = document.getElementById('tallaFiltro').value;
        const colorSeleccionado = document.getElementById('coloresFiltro').value;
        const ofertaSeleccionada = document.getElementById('ofertaFiltro').value;
        const precioMinimo = parseFloat(document.getElementById('precioMinimo').value) || 0;
        const precioMaximo = parseFloat(document.getElementById('precioMaximo').value) || Infinity;

        const filtrados = productosData.filter(producto => {
            const tipoCoincide = tipoSeleccionado ? producto["Tipo de producto"] === tipoSeleccionado : true;
            const listaCoincide = listaSeleccionada ? producto["producto_Nombre"] === listaSeleccionada : true; // Cambia aquí
            const generoCoincide = generoSeleccionado ? producto["Para Hombre o mujer"] === generoSeleccionado : true;
            const tallaCoincide = tallaSeleccionada ? producto["¿Cuál es la talla?"] === tallaSeleccionada : true;
            const colorCoincide = colorSeleccionado ? producto["colores"] === colorSeleccionado : true;
            const ofertaCoincide = ofertaSeleccionada ? (ofertaSeleccionada === "true" ? producto["oferta"] : !producto["oferta"]) : true;
            const precioCoincide = producto["precio_venta"] >= precioMinimo && producto["precio_venta"] <= precioMaximo;

            return tipoCoincide && listaCoincide && generoCoincide && tallaCoincide && colorCoincide && ofertaCoincide && precioCoincide;
        });

        mostrarProductos(filtrados);
    }
    document.getElementById('tipoProductoFiltro').addEventListener('change', () => {
        const tipoSeleccionado = document.getElementById('tipoProductoFiltro').value;
        const listaProductosFiltro = document.getElementById('listaProductosFiltro');
        const tproducto = document.getElementById('tproducto');
        const generoFiltro = document.getElementById('tgenero');
        const tallaFiltro = document.getElementById('ttalla');
        const colorFiltro = document.getElementById('tcolor');
        const tipoMuebleFiltro = document.getElementById('tmueble');

        // Limpiar opciones anteriores
        listaProductosFiltro.innerHTML = '<option value="">Todos</option>';
        listaProductosFiltro.style.display = tipoSeleccionado ? 'block' : 'none';

        // Obtener productos correspondientes al tipo seleccionado
        const productosFiltrados = productosData.filter(producto => producto["Tipo de producto"] === tipoSeleccionado);
        const nombresProductos = [...new Set(productosFiltrados.map(item => item["producto_Nombre"]))];

        nombresProductos.forEach(nombre => {
            const option = document.createElement('option');
            option.value = nombre;
            option.textContent = nombre;
            listaProductosFiltro.appendChild(option);
        });

        // Mostrar u ocultar filtros según el tipo de producto seleccionado
        if (tipoSeleccionado === 'Ropa 👕👖') {
            generoFiltro.style.display = 'block';  // Mostrar filtro de género
            tallaFiltro.style.display = 'block';    // Mostrar filtro de talla
            colorFiltro.style.display = 'block';     // Si deseas mostrar también el filtro de colores
            tipoMuebleFiltro.style.display = 'none'; // Ocultar filtro de tipo de mueble
        } else {
            generoFiltro.style.display = 'none';     // Ocultar filtro de género
            tallaFiltro.style.display = 'none';      // Ocultar filtro de talla
            colorFiltro.style.display = 'none';      // Ocultar filtro de colores si no es ropa
            tipoMuebleFiltro.style.display = 'none'; // Ocultar filtro de tipo de mueble
        }
        tproducto.style.display = tipoSeleccionado ? 'block' : 'none';

    });


    document.getElementById('search').addEventListener('click', performSearch);
document.getElementById('search-input').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        performSearch();
    }
});

function performSearch() {
    let searchInput = document.getElementById('search-input').value.toUpperCase();
    const searchText = document.getElementById('search-input').value.trim(); // Obtener el texto de búsqueda

    // Función que realiza la comparación para cada propiedad, convirtiendo los valores a string
    const matchesSearch = (value) => {
        if (value !== undefined && value !== null) {
            // Asegurarse de que el valor sea tratado como texto
            return String(value).toUpperCase().includes(searchInput);
        }
        return false; // Si el valor es undefined o null, no hay coincidencia
    };

    const filtrados = productosData.filter(producto => {
        return matchesSearch(producto["id"]) ||
            matchesSearch(producto["Tipo de producto"]) ||
            matchesSearch(producto["producto_Nombre"]) ||
            matchesSearch(producto["Detalles del producto ( opcional )"]) ||
            matchesSearch(producto["seo"]) ||
            matchesSearch(producto["colores"]) ||
            matchesSearch(producto["Tipo de Mueble 🛋️"]) ||
            matchesSearch(producto["¿Cuál es la talla?"]) ||
             matchesSearch(producto.link_foto) ||
            matchesSearch(producto["precio_venta"]);
    });

    mostrarProductos(filtrados); // Mostrar los productos filtrados

    if (searchText !== '') {
        // Verificar si el usuario está logueado
        if (!usuarioActualEmail || !token) {
            console.error('El usuario no ha iniciado sesión.');
            return;
        }

        // Llamar al backend para guardar la búsqueda
        fetch(jsonUrl, {
            method: 'POST',
            body: new URLSearchParams({
                action: 'guardarBusqueda',
                email: usuarioActualEmail,  // El email del usuario
                token: token,               // El token del usuario
                searchText: searchInput.trim()     // El texto de la búsqueda
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                console.log('Búsqueda guardada exitosamente.');
            } else {
                console.error('Error al guardar la búsqueda: ', data.message);
            }
        });
    } else {
        console.log('La búsqueda está vacía');
    }
}







    const mensajes = [
        "La persistencia es la clave del éxito.",
        "Cree en ti mismo y todo será posible.",
        "El aprendizaje continuo es el camino hacia el crecimiento.",
        "No te rindas, cada paso cuenta.",
        "La creatividad es la fuerza impulsora detrás de la innovación.",
        "La felicidad es el combustible de la productividad.",
        "Encuentra el equilibrio entre trabajo y pasión.",
        "La pasión es el motor que te llevará lejos.",
        "Ama lo que haces y nunca trabajarás un día en tu vida.",
        "El éxito no es un destino, es un viaje constante."
    ];

    const imagenes = [
        'https://www.awn.com/sites/default/files/styles/inline_medium/public/image/attached/1031840-ghostintheshell.jpg?itok=zIJId-zY', //ghos
        "https://i.pinimg.com/originals/80/8c/d9/808cd912cb13dbd4e1a98329fa514851.jpg",
        "https://i.pinimg.com/originals/80/8c/d9/808cd912cb13dbd4e1a98329fa514851.jpg",
        "https://wallpaperbat.com/img/308053-garou-one-punch-man-anime-one-punch-man-manga-one.jpg",
        'https://www.fotosdememes.com/wp-content/uploads/2022/03/calma-se-va-a-estabilizar.jpg',//estabilizara
        'https://livedoor.blogimg.jp/conbul/imgs/2/5/2594101b.png',//giantcooler
        'https://ultraviolence.cl/wp-content/uploads/2023/01/pubgits.jpg',//doble ghost
        'https://alchetron.com/cdn/The-Animatrix-images-69cfca19-d189-4cd2-a44e-eb06c515874.jpg',//seek and destroy
        'https://i.pinimg.com/originals/d0/02/5a/d0025af77962761e8ef04db7d9a10395.jpg',//ghostskeleto     
        'https://areajugones.sport.es/wp-content/uploads/2017/04/alien-covenant-still.jpg',//Alienpasillo



        // Agrega más URLs de imágenes según sea necesario
    ];

    const formulario = document.getElementById('order-form');
    const loader = document.getElementById('loader');
    const mensajeCargando = document.getElementById('mensajeCargando');


    function randomLista(lista) {
        const indice = Math.floor(Math.random() * lista.length);
        return lista[indice];
    }



    let departamentosData = []

    // Cargar los datos de departamentos y ciudades desde la URL
    async function cargarDatosCiudades() {
        const response = await fetch('https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json');
        departamentosData = await response.json();
        cargarDepartamentos();
    }

    function cargarDepartamentos() {
        const departamentoSelect = document.getElementById('departamento_cliente');
        departamentosData.forEach(departamento => {
            const option = document.createElement('option');
            option.value = departamento.departamento.toLowerCase();
            option.textContent = departamento.departamento;
            departamentoSelect.appendChild(option);
        });

        // Preseleccionar Cundinamarca
        departamentoSelect.value = 'cundinamarca';
        cargarCiudades(); // Cargar ciudades después de seleccionar el departamento
    }

    function cargarCiudades() {
        const departamentoSelect = document.getElementById('departamento_cliente');
        const ciudadSelect = document.getElementById('ciudad_cliente');
        const departamento = departamentoSelect.value;

        // Limpiar el select de ciudades
        ciudadSelect.innerHTML = '<option value="">Selecciona una ciudad</option>';

        if (departamento) {
            const ciudades = departamentosData.find(dep => dep.departamento.toLowerCase() === departamento).ciudades;

            ciudades.forEach(ciudad => {
                const option = document.createElement('option');
                option.value = ciudad.toLowerCase();
                option.textContent = ciudad;
                ciudadSelect.appendChild(option);
            });
        }

        // Preseleccionar Zipaquirá
        ciudadSelect.value = 'zipaquirá';
        // mostrarBarrio(); // Cargar barrios después de seleccionar la ciudad
    }

    function mostrarBarrio() {
        const ciudad = document.getElementById('ciudad_cliente').value;
        const barrioContainer = document.getElementById('barrio-container');

        // Limpiar el contenido anterior
        barrioContainer.innerHTML = '';

        if (ciudad === 'zipaquirá') {
            const barrioSelect = document.createElement('select');
            barrioSelect.name = 'barrio_cliente';
            barrioSelect.id = 'barrio_cliente';
            barrioSelect.required = true;

            const defaultOption = document.createElement('option');
            defaultOption.value = '';
            defaultOption.textContent = 'Selecciona un barrio';
            barrioSelect.appendChild(defaultOption);

            barriosZipa.forEach(barrio => {
                const option = document.createElement('option');
                option.value = barrio;
                option.textContent = barrio;
                barrioSelect.appendChild(option);
            });

            barrioContainer.appendChild(barrioSelect);
        } else {
            const barrioInput = document.createElement('input');
            barrioInput.type = 'text';
            barrioInput.name = 'barrio_cliente';
            barrioInput.id = 'barrio_cliente';
            barrioInput.required = true;
            barrioContainer.appendChild(barrioInput);
        }
    }

    // Cargar datos al inicio
    cargarDatosCiudades();

    function cargarRegisterCiudades() {
        const departamentoSelect = document.getElementById('registerDepartamento');
        const ciudadSelect = document.getElementById('registerCiudad');
        const departamento = departamentoSelect.value;

        // Limpiar el select de ciudades
        ciudadSelect.innerHTML = '<option value="">Selecciona una ciudad</option>';

        if (departamento) {
            const ciudades = departamentosData.find(dep => dep.departamento.toLowerCase() === departamento).ciudades;

            ciudades.forEach(ciudad => {
                const option = document.createElement('option');
                option.value = ciudad.toLowerCase();
                option.textContent = ciudad;
                ciudadSelect.appendChild(option);
            });
        }

        // Preseleccionar Zipaquirá si el departamento es Cundinamarca
        if (departamento === 'cundinamarca') {
            ciudadSelect.value = 'zipaquirá';
            // mostrarRegisterBarrio(); // Cargar barrios después de seleccionar la ciudad
        }
    }

    // Agregar esta función para mostrar barrios en el segundo formulario
    function mostrarRegisterBarrio() {
        const ciudad = document.getElementById('registerCiudad').value;
        const barrioContainer = document.getElementById('registerBarrioContainer');

        // Limpiar el contenido anterior
        barrioContainer.innerHTML = '';

        if (ciudad === 'zipaquirá') {
            const barrioSelect = document.createElement('select');
            barrioSelect.name = 'registerBarrio';
            barrioSelect.id = 'registerBarrio';
            barrioSelect.required = true;

            const defaultOption = document.createElement('option');
            defaultOption.value = '';
            defaultOption.textContent = 'Selecciona un barrio';
            barrioSelect.appendChild(defaultOption);

            barriosZipa.forEach(barrio => {
                const option = document.createElement('option');
                option.value = barrio;
                option.textContent = barrio;
                barrioSelect.appendChild(option);
            });

            barrioContainer.appendChild(barrioSelect);
        } else {
            const barrioInput = document.createElement('input');
            barrioInput.type = 'text';
            barrioInput.name = 'registerBarrio';
            barrioInput.id = 'registerBarrio';
            barrioInput.required = true;
            barrioContainer.appendChild(barrioInput);
        }
    }

    // Cargar los departamentos al iniciar el registro
    async function cargarDatosRegistro() {
        const response = await fetch('https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json');
        departamentosData = await response.json();

        const departamentoSelect = document.getElementById('registerDepartamento');
        departamentosData.forEach(departamento => {
            const option = document.createElement('option');
            option.value = departamento.departamento.toLowerCase();
            option.textContent = departamento.departamento;
            departamentoSelect.appendChild(option);
        });

        // Preseleccionar Cundinamarca
        departamentoSelect.value = 'cundinamarca';
        cargarRegisterCiudades(); // Cargar ciudades después de seleccionar el departamento
    }

    // Llamar a la función al cargar la página
    cargarDatosRegistro();
    console.log(document.getElementById('telefono_cliente').value)

