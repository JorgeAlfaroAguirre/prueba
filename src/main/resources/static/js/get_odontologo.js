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
  
          newRow.appendChild(idCell);
          newRow.appendChild(nombreCell);
          newRow.appendChild(apellidoCell);
          newRow.appendChild(matriculaCell);
  
          tbody.appendChild(newRow);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });
  