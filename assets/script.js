const addToTable = document.getElementById('form');

const addItemToTable = (e)=> {

    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const gender = document.getElementById('gender').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;
    const pincode = document.getElementById('pincode').value;
    const carTypes = [];

    const checkList = document.querySelectorAll('input[type="checkbox"]:checked');
    for ( const car of checkList ) {
        carTypes.push(car.nextElementSibling.textContent)
    };

    const tableBody = document.querySelector('.table tbody');
    const addRow = tableBody.insertRow();

    const cell1 = addRow.insertCell(0);
    const cell2 = addRow.insertCell(1);
    const cell3 = addRow.insertCell(2);
    const cell4 = addRow.insertCell(3);
    const cell5 = addRow.insertCell(4);
    const cell6 = addRow.insertCell(5);
    const cell7 = addRow.insertCell(6);
    const cell8 = addRow.insertCell(7);
    const cell9 = addRow.insertCell(8);

    cell1.textContent = name;
    cell2.textContent = phone;
    cell3.textContent = email;
    cell4.textContent = gender;
    cell5.textContent = city;
    cell6.textContent = state;
    cell7.textContent = country;
    cell8.textContent = pincode;
    cell9.textContent = carTypes.join(", ");

    document.getElementById("form").reset();

};

addToTable.addEventListener('submit', addItemToTable);