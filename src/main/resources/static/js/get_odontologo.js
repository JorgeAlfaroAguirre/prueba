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
            alert(`ID del odontólogo a actualizar: ${odontologo.id}`);
          });

          const deleteCell = document.createElement('td');
          const deleteButton = document.createElement('button');
          deleteButton.textContent = 'Eliminar';
          deleteButton.addEventListener('click', function () {
            alert(`ID del odontólogo a borrar ${odontologo.id}`);
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
  