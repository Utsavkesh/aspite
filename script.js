const form = document.getElementById("attendanceForm");
const tableBody = document.querySelector("#attendanceTable tbody");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const studentName = document.getElementById("studentName").value;
  const attendanceDate = document.getElementById("attendanceDate").value;
  const status = document.getElementById("status").value;

  if (studentName && attendanceDate && status) {
    const row = document.createElement("tr");
    row.innerHTML = `
                <td>${studentName}</td>
                <td>${attendanceDate}</td>
                <td>${status}</td>
            `;

    tableBody.appendChild(row);

    form.reset();
  }
});
