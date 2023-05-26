
  // Seleccionar el formulario y los campos
  const form = document.querySelector('#formulario-de-contacto form');
  const nombre = document.querySelector('#nombre');
  const email = document.querySelector('#email');
  const telefono = document.querySelector('#telefono');
  const mensaje = document.querySelector('#mensaje');

  // Validar el formulario cuando se envía
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevenir el envío del formulario

    // Validar el campo de nombre
    if (nombre.value.trim() === '') {
      alert('Por favor ingresa tu nombre.');
      nombre.focus();
      return;
    }

    // Validar el campo de email
    if (email.value.trim() === '') {
      alert('Por favor ingresa tu correo electrónico.');
      email.focus();
      return;
    } else if (!isValidEmail(email.value.trim())) {
      alert('Por favor ingresa un correo electrónico válido.');
      email.focus();
      return;
    }

    // Validar el campo de mensaje
    if (mensaje.value.trim() === '') {
      alert('Por favor ingresa tu mensaje.');
      mensaje.focus();
      return;
    }

    // Si todos los campos son válidos, enviar el formulario a través de AJAX
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();

    xhr.open('POST', form.getAttribute('action'), true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        alert('Tu mensaje ha sido enviado. Gracias por contactarnos.');
        form.reset();
      } else {
        alert('Hubo un error al enviar tu mensaje. Por favor inténtalo de nuevo más tarde.');
      }
    };
    xhr.send(formData);
  });

  // Función para validar un correo electrónico
  function isValidEmail(email) {
    const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegExp.test(email);
  }

  function cambiarColorFondo() {
    var colorSelect = document.getElementById('colorSelect');
    var selectedColor = colorSelect.value;
    var contactForm = document.getElementById('contactForm');
    contactForm.style.backgroundColor = selectedColor;
  }
  function cambiarEstilo() {
    var fontSelect = document.getElementById('fontSelect');
    var selectedFont = fontSelect.value;
    var contactForm = document.getElementById('contactForm');
    contactForm.style.fontFamily = selectedFont;
  }
  