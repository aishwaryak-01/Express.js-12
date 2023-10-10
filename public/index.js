document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phonenumber = document.getElementById('phonenumber').value;
axios.post('/user/add-user', { username, email, phonenumber }).then(response => {
            console.log(response);
            showUser(response.data.user)})
        .catch(error => {
            console.error(error)});
    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phonenumber').value = '';
});
window.addEventListener('DOMContentLoaded', () => {
axios.get('/user/get-users').then(response => {
            const users = response.data.users;
            users.forEach(user => {
                showUser(user)})})
        .catch(error => console.error(error));
});
function showUser(user) {
    const userList = document.getElementById('userList');
    const li = document.createElement('li');
    li.textContent = `Username: ${user.username}, Email: ${user.email}, Phone: ${user.phonenumber}`;
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', function() {
        editUser(user.id, user.username, user.email, user.phonenumber)})
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
        deleteUser(user.id)});
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    userList.appendChild(li);
}
function editUser(id, username, email, phonenumber) {
    const newUsername = prompt('Enter new username:', username);
    if (newUsername !== null)
    {
        axios.put(`/user/edit-user/${id}`, { username: newUsername, email, phonenumber }).then(response => {
                alert('User updated successfully!');
                location.reload()})
            .catch(error => console.error(error));
    }}
function deleteUser(id)
{
    if (confirm('Are you sure you want to delete this user?'))
    {
        axios.delete(`/user/delete-user/${id}`).then(() => {
                alert('User deleted successfully!');
                location.reload()})
            .catch(error => console.error(error));
    }}
