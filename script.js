
/*SLIDER*/
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

    
/*FORM*/
document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    console.log('Имя:', name);
    console.log('Email:', email);
    console.log('Сообщение:', message);
  
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  
  });


  
// Функция для всплывающего уведомления
function showNotification() {
    let notification = document.getElementById("notification");
    notification.classList.add("show");

    setTimeout(() => {
        notification.classList.remove("show");
    }, 3000); // Исчезает через 3 секунды
}


/*ПОЛЗУНОК*/
const toggle = document.getElementById("themeToggle");

        toggle.addEventListener("change", () => {
            if (toggle.checked) {
                document.body.style.background = "#ffffff";
                document.body.style.color = "#000000";
            } else {
                document.body.style.background = "#0a0f1a";
                document.body.style.color = "#ffffff";
            }
        });
/*BURGER*/
        function toggleMenu() {
          const burgerLinks = document.querySelector('.burger-links');
          burgerLinks.style.display = burgerLinks.style.display === 'flex' ? 'none' : 'flex';
      }