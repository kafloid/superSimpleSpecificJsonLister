const input = document.getElementById('json-file');
const list = document.getElementById('data-list');

input.addEventListener('change', (event) => {
    const file = event.target.files[0];

    if (!file) {
        return;
    }

    const reader = new FileReader();

    reader.addEventListener('load', (event) => {
        const text = event.target.result;
        const data = JSON.parse(text);
        const ul = document.getElementById('person-list');

        // Agrega los elementos a la lista
        const liNombre = document.createElement('li');
        liNombre.textContent = `Nombre: ${data.nombre}`;
        ul.appendChild(liNombre);

        const liEdad = document.createElement('li');
        liEdad.textContent = `Edad: ${data.edad}`;
        ul.appendChild(liEdad);

        const liTelefonos = document.createElement('li');
        liTelefonos.textContent = 'Telefonos:';
        ul.appendChild(liTelefonos);

        // Crea una lista anidada para los teléfonos
        const ulTelefonos = document.createElement('ul');
        for (let i = 0; i < data.telefonos.length; i++) {
            const liTelefono = document.createElement('li');
            liTelefono.textContent = `${data.telefonos[i].tipo}: ${data.telefonos[i].numero}`;
            ulTelefonos.appendChild(liTelefono);
        }
        liTelefonos.appendChild(ulTelefonos);

        const liEmail = document.createElement('li');
        liEmail.textContent = `Email: ${data.email}`;
        ul.appendChild(liEmail);
    });

    reader.readAsText(file);
});
