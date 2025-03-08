const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
})

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
})

// Функция для всплывающего уведомления
function showNotification() {
    let notification = document.getElementById("notification");
    notification.classList.add("show");

    setTimeout(() => {
        notification.classList.remove("show");
    }, 3000); // Исчезает через 3 секунды
}

