document.addEventListener("DOMContentLoaded", function () {
  const url = "/odontologo";
  const settings = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(url, settings)
    .then((response) => response.json())
    .then((data) => {
      const tbody = document.querySelector('table tbody');

      for (let i = 0; i < data.length; i++) {
        const odontologo = data[i];

        const newRow = document.createElement('tr');

        const idCell = document.createElement('td');
        idCell.textContent = odontologo.id;

        const nombreCell = document.createElement('td');
        nombreCell.textContent = odontologo.nombre;

        const apellidoCell = document.createElement('td');
        apellidoCell.textContent = odontologo.apellido;

        const matriculaCell = document.createElement('td');
        matriculaCell.textContent = odontologo.matricula;

        const updateCell = document.createElement('td');
        const updateButton = document.createElement('button');
        updateButton.textContent = 'Actualizar';
        updateButton.addEventListener('click', function () {
          mostrarFormularioActualizar(odontologo);
        });

        const deleteCell = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.addEventListener('click', function () {
          eliminarOdontologo(odontologo.id);
        });

        updateCell.appendChild(updateButton);
        deleteCell.appendChild(deleteButton);

        newRow.appendChild(idCell);
        newRow.appendChild(nombreCell);
        newRow.appendChild(apellidoCell);
        newRow.appendChild(matriculaCell);
        newRow.appendChild(updateCell);
        newRow.appendChild(deleteCell);

        tbody.appendChild(newRow);
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

function mostrarFormularioActualizar(odontologo) {
  const nuevoNombre = prompt("Nuevo nombre:", odontologo.nombre);
  const nuevoApellido = prompt("Nuevo apellido:", odontologo.apellido);
  const nuevaMatricula = prompt("Nuevo Matricula:", odontologo.matricula);

  if (nuevoNombre !== null && nuevoApellido !== null && nuevaMatricula !== null) {
    const nuevoOdontologo = {
      id: odontologo.id,
      nombre: nuevoNombre,
      apellido: nuevoApellido,
      matricula: nuevaMatricula, 
    };

    actualizarOdontologo(nuevoOdontologo);
  }
}

function actualizarOdontologo(odontologo) {
  const updateUrl = "/odontologo/actualizar";
  const updateSettings = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(odontologo),
  };

  fetch(updateUrl, updateSettings)
    .then((response) => {
      if (response.ok) {
        location.reload();
      } else {
        throw new Error('Error al actualizar el odontólogo');
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

function eliminarOdontologo(id) {
  const deleteUrl = `/odontologo/eliminar/${id}`;
  const deleteSettings = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(deleteUrl, deleteSettings)
    .then((response) => {
      if (response.ok) {
        location.reload();
      } else {
        throw new Error('Error al eliminar el odontólogo');
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
