async function fetchUserData() {
    const apiurl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        dataContainer.innerHTML = 'Loading user data...'; 

        const response = await fetch(apiurl);

        if (!response.ok) {
            throw new Error(`Failed to fetch data.Status code: ${response.status}`);
            }

        const users = await response.json();

        dataContainer.innerHTML = ''; 

        const userList = document.createElement('ul');
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem); 
        });

        dataContainer.appendChild(userList); 

    } catch (error) {
        console.error('There was an error fetching the data:', error);

        // Clear existing content
        dataContainer.innerHTML = '';
        dataContainer.textContent = "Failed to load user data";
    }
}
document.addEventListener('DOMContentLoaded', function () {
    fetchUserData();
});
