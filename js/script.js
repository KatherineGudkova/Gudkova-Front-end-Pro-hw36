function showTable() {
    const formContainer = document.getElementById("formContainer");
    const tableContainer = document.getElementById("tableContainer");

    const form = document.getElementById("regForm");
    const table = document.getElementById("dataTable");

    const firstName = form.elements.firstName.value;
    const lastName = form.elements.lastName.value;
    const birthdate = form.elements.date.value;
    const gender = form.elements.gender.value;
    const city = form.elements.city.value;
    const address = form.elements.address.value;
    const languages = [...form.elements.languages]
        .filter(input => input.checked)
        .map(input => input.value);

    form.reset();

    formContainer.style.display = "none";
    tableContainer.style.display = "block";

    const headerRow = table.insertRow(0);
    const headerCell1 = headerRow.insertCell(0);
    const headerCell2 = headerRow.insertCell(1);
    const headerCell3 = headerRow.insertCell(2);
    const headerCell4 = headerRow.insertCell(3);
    const headerCell5 = headerRow.insertCell(4);
    const headerCell6 = headerRow.insertCell(5);
    const headerCell7 = headerRow.insertCell(6);

    headerCell1.innerHTML = "Ім'я";
    headerCell2.innerHTML = "Прізвище";
    headerCell3.innerHTML = "Дата народження";
    headerCell4.innerHTML = "Стать";
    headerCell5.innerHTML = "Місто";
    headerCell6.innerHTML = "Адреса";
    headerCell7.innerHTML = "Мови";

    const dataRow = table.insertRow(1);
    const dataCell1 = dataRow.insertCell(0);
    const dataCell2 = dataRow.insertCell(1);
    const dataCell3 = dataRow.insertCell(2);
    const dataCell4 = dataRow.insertCell(3);
    const dataCell5 = dataRow.insertCell(4);
    const dataCell6 = dataRow.insertCell(5);
    const dataCell7 = dataRow.insertCell(6);

    dataCell1.innerHTML = firstName;
    dataCell2.innerHTML = lastName;
    dataCell3.innerHTML = birthdate;
    dataCell4.innerHTML = gender;
    dataCell5.innerHTML = city;
    dataCell6.innerHTML = address;
    dataCell7.innerHTML = languages.join(", ");
}
