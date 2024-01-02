let id = 0;
                                    //Add button add click event
document.getElementById('add').addEventListener('click', () => {
  let createdDate = new Date();     //To make new date and insert on list
  let table = document.getElementById('list');
  let row = table.insertRow(1);     
  row.setAttribute('id', `item-${id}`);
  row.insertCell(0).innerHTML = document.getElementById('new-task').value;
  row.insertCell(1).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth() + 1}-${createdDate.getDate()}`;
  row.insertCell(2).innerHTML = document.getElementById('new-start-date').value;
  row.insertCell(3).innerHTML = document.getElementById('new-end-date').value;
  let actions = row.insertCell(4);    //Insert new row cells for th values
  actions.appendChild(createDeleteButton(id++));  //Create delete button
  document.getElementById('new-task').value = ''; //New task
});

function createDeleteButton(id) {   //Primary delete button
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}