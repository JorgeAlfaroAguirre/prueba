document.addEventListener("DOMContentLoaded", function () {
    const url = "/paciente";
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
          const paciente = data[i];
  
          const newRow = document.createElement('tr');
  
          const idCell = document.createElement('td');
          idCell.textContent = paciente.id;
  
          const nombreCell = document.createElement('td');
          nombreCell.textContent = paciente.nombre;
  
          const apellidoCell = document.createElement('td');
          apellidoCell.textContent = paciente.apellido;
  
          const cedulaCell = document.createElement('td');
          cedulaCell.textContent = paciente.cedula;
  
          const fechaIngresoCell = document.createElement('td');
          fechaIngresoCell.textContent = paciente.fechaIngreso;
  
          const emailCell = document.createElement('td');
          emailCell.textContent = paciente.email;
  
          const calleCell = document.createElement('td');
          calleCell.textContent = paciente.domicilio.calle;
  
          const numeroCell = document.createElement('td');
          numeroCell.textContent = paciente.domicilio.numero;
  
          const localidadCell = document.createElement('td');
          localidadCell.textContent = paciente.domicilio.localidad;
  
          const provinciaCell = document.createElement('td');
          provinciaCell.textContent = paciente.domicilio.provincia;
  
          const updateCell = document.createElement('td');
          const updateButton = document.createElement('button');
          updateButton.textContent = 'Actualizar';
          updateButton.addEventListener('click', function () {
            mostrarFormularioActualizar(paciente);
          });
  
          const deleteCell = document.createElement('td');
          const deleteButton = document.createElement('button');
          deleteButton.textContent = 'Eliminar';
          deleteButton.addEventListener('click', function () {
            eliminarPaciente(paciente.id);
          });
  
          updateCell.appendChild(updateButton);
          deleteCell.appendChild(deleteButton);
  
          newRow.appendChild(idCell);
          newRow.appendChild(nombreCell);
          newRow.appendChild(apellidoCell);
          newRow.appendChild(cedulaCell);
          newRow.appendChild(fechaIngresoCell);
          newRow.appendChild(emailCell);
          newRow.appendChild(calleCell);
          newRow.appendChild(numeroCell);
          newRow.appendChild(localidadCell);
          newRow.appendChild(provinciaCell);
          newRow.appendChild(updateCell);
          newRow.appendChild(deleteCell);
  
          tbody.appendChild(newRow);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });
  
  function mostrarFormularioActualizar(paciente) {
    const nuevoNombre = prompt("Nuevo nombre:", paciente.nombre);
    const nuevoApellido = prompt("Nuevo apellido:", paciente.apellido);
    const nuevaCedula = prompt("Nueva cedula:", paciente.cedula);
    const nuevaFechaIngreso = prompt("Nueva fecha de ingreso:", paciente.fechaIngreso);
    const nuevoEmail = prompt("Nuevo email:", paciente.email);
    const nuevaCalle = prompt("Nueva calle:", paciente.domicilio.calle);
    const nuevoNumero = prompt("Nuevo número:", paciente.domicilio.numero);
    const nuevaLocalidad = prompt("Nueva localidad:", paciente.domicilio.localidad);
    const nuevaProvincia = prompt("Nueva provincia:", paciente.domicilio.provincia);
  
    if (nuevoNombre !== null && nuevoApellido !== null && nuevaCedula !== null &&
        nuevaFechaIngreso !== null && nuevoEmail !== null && nuevaCalle !== null &&
        nuevoNumero !== null && nuevaLocalidad !== null && nuevaProvincia !== null) {
      const nuevoPaciente = {
        id: paciente.id,
        nombre: nuevoNombre,
        apellido: nuevoApellido,
        cedula: nuevaCedula,
        fechaIngreso: nuevaFechaIngreso,
        email: nuevoEmail,
        domicilio: {
          calle: nuevaCalle,
          numero: nuevoNumero,
          localidad: nuevaLocalidad,
          provincia: nuevaProvincia,
        },
      };
  
      actualizarPaciente(nuevoPaciente);
    }
  }
  
  function actualizarPaciente(paciente) {
    const updateUrl = "/paciente/actualizar";
    const updateSettings = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paciente),
    };
  
    fetch(updateUrl, updateSettings)
      .then((response) => {
        if (response.ok) {
          location.reload();
        } else {
          throw new Error('Error al actualizar el paciente');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  function eliminarPaciente(id) {
    const deleteUrl = `/paciente/eliminar/${id}`;
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
          throw new Error('Error al eliminar el paciente');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  