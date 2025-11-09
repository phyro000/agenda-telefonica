const lnameInput=document.getElementById('lname');
const fnameInput=document.getElementById('fname');
const numbInput=document.getElementById('numb');

const addBtn=document.getElementById('addPer');

const tableBody=document.getElementById('tableBody');

const personCount=document.getElementById('personCount');

let totalPersons=0;

function updateCounter(){
    personCount.textContent=`Numar total de persoane: ${totalPersons}`;
}

function deletePerson(button){
    const row=button.parentElement.parentElement;
    row.remove();
    totalPersons--;
    updateCounter();
}

function addPerson(){
    const lname=lnameInput.value.trim();
    const fname=fnameInput.value.trim();
    const numb=numbInput.value.trim();

    if (lname === '' || fname === '' || numb === ''){
        alert('Te rog completeaza toate campurile!');
        return;
    }

    const newRow=document.createElement('tr');

    newRow.classList.add('loading');

    newRow.innerHTML = `
        <td>${lname}</td>
        <td>${fname}</td>
        <td>${numb}</td>
        <td><button class="btn-delete" onclick="deletePerson(this)">Sterge</button></td>
    `;

    tableBody.appendChild(newRow);

    totalPersons++;
    updateCounter();

    lnameInput.value='';
    fnameInput.value='';
    numbInput.value ='';

    setTimeout(() => {
        newRow.classList.remove('loading');
    }, 500);
}

addBtn.addEventListener('click', addPerson);

lnameInput.addEventListener('keypress', function(e){
    if (e.key === 'Enter') addPerson();
});

fnameInput.addEventListener('keypress', function(e){
    if (e.key === 'Enter') addPerson();
});

numbInput.addEventListener('keypress', function(e){
    if (e.key === 'Enter') addPerson();
});


const themeToggle = document.getElementById('themeToggle');
let isDarkMode = false;

themeToggle.addEventListener('click', function() {
    isDarkMode = !isDarkMode;
    
    if (isDarkMode) {
        document.body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️ Light Mode';
    } else {
        document.body.removeAttribute('data-theme');
        themeToggle.textContent = '🌙 Dark Mode';
    }
});