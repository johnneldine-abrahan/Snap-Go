const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

const darkMode = document.querySelector('.dark-mode');

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
})

Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
        <td>${order.UserID}</td>
        <td>${order.Fname}</td>
        <td>${order.Lname}</td>
        <td>${order.Bday}</td>
        <td>${order.Add}</td>
        <td><a href="#"><i class="las la-edit"></i></a><a href="#"><i class="las la-trash"></i></a></td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});