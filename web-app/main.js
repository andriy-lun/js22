const USERS_URL = "https://api.github.com/users";
async function getUsers() {
    let res = await fetch(USERS_URL);
    return res.json();
}

async function getUserByLogin(login) {
    let res = await fetch(`${USERS_URL}/${login}`);
    return res.json();
}

async function renderUsers() {
    let users = await getUsers();
    let html = '';

    users.forEach(user => {
        let htmlSegment = `
            <div class="user" data-login="${user.login}">
                <img src="${user.avatar_url}" data-login="${user.login}">
                <h2>${user.login}</h2>
            </div>`;
        html += htmlSegment;
    });

    const container = document.getElementById('users-list');
    container.innerHTML = html;
}

async function showUserPopup() {
    const container = document.getElementById('users-list');
    const popup = document.getElementById('pop-wrap');
    const popupClose = document.getElementById('pop-x');
    const popupContent = document.getElementById('pop-content');

    container.onclick = async ({ target }) => {
        if (target.dataset.login == undefined) {
            return;
        }

        const user = await getUserByLogin(target.dataset.login);

        const html = `
            <img src="${user.avatar_url}">
            <div>
                <h2>${user.login}</h2>
                <p>name: <b>${user.name}</b></p>
                <p>company: <b>${user.company ? user.company : '-'}</b></p>
                <p>location: <b>${user.location ? user.location : '-'}</b></p>
                <p>blog: <a href="${user.blog}" target="_blank">${user.blog}</a></p>
                <p>repository: <a href="${user.url}" target="_blank">${user.url}</a></p>
            </div>`;

        popupContent.innerHTML = html;
        
        popup.style.top = 0;
    };

    popupClose.addEventListener('click', () => {
        popup.style.top = '-100%';
    });
}

document.addEventListener('DOMContentLoaded', function(){
    renderUsers();
    showUserPopup();
}, false);