// script.js

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        menuToggle.classList.toggle('open');
    });

    // Fecha o menu se clicar fora do menu
    document.addEventListener('click', (event) => {
        if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove('open');
            menuToggle.classList.remove('open');
        }
    });
});


// function redirectToPage(select) {
//     var selectedValue = select.value;
//     if (selectedValue === 'funcionario') {
//         window.location.href = '/funcionario.html';
//     } else if (selectedValue === 'gerente') {
//         window.location.href = '/gerente.html';
//     } else if (selectedValue === 'administrador') {
//         window.location.href = '/administrador.html';
//     } else if (selectedValue === 'visitante') {
//         window.location.href = '/visitante.html';
//     }
// }


// function toggleUserFields() {
//     var userSelect = document.getElementById('user');
//     var userFields = document.getElementById('userFields');
//     var batmanInfo = document.getElementById('batman-info');
//     var batmanParagrafo = document.querySelector('.paragrafo');
//     // var footer = document.querySelector('footer');

//     if (userSelect.value === 'visitante') {
//         userFields.style.opacity = '0'; // Torna os campos de usuário e senha transparentes
//         batmanInfo.style.opacity = '1'; // Torna as informações sobre o Batman opacas
//         batmanParagrafo.style.display = 'block'; // Torna o parágrafo visível
//         footer.style.display = 'flex'; // Mostra o footer

//         // Resetar a transição
//         setTimeout(function () {
//             userFields.style.opacity = '0';
//         }, 10);

//         setTimeout(function () {
//             batmanInfo.style.opacity = '1';
//         }, 10);

//         setTimeout(function () {
//             footer.style.opacity = '1';
//         }, 10);
//     } else if (userSelect.value !== '') {
//         userFields.style.opacity = '1'; // Mostra campos de usuário e senha
//         batmanInfo.style.opacity = '0'; // Oculta informações sobre o Batman
//         batmanParagrafo.style.display = 'none'; // Garante que o parágrafo fique oculto
//         footer.style.display = 'flex'; // Mostra o footer
//     } else {
//         userFields.style.opacity = '0'; // Caso nenhum usuário seja selecionado, oculta tudo
//         batmanInfo.style.opacity = '0'; // Oculta informações sobre o Batman
//         batmanParagrafo.style.display = 'none'; // Garante que o parágrafo fique oculto
//         footer.style.display = 'flex'; // Mostra o footer
//     }
// }



// Função para exibir ou ocultar os campos com base na seleção do tipo de usuário
function toggleUserFields() {
    // Obtém o valor selecionado do dropdown
    const userType = document.getElementById('user').value;

    // Obtém o elemento com os campos adicionais
    const userFields = document.getElementById('userFields');

    // Se o tipo de usuário não estiver vazio, exibe os campos adicionais
    if (userType === 'visitante') {
        window.location.href = 'https://www.dc.com/characters/batman';
    }
    else if (userType) {
        userFields.style.opacity = 1; // Exibe os campos
    } else {
        userFields.style.opacity = 0; // Oculta os campos
    }
}

// Adiciona um evento para chamar a função toggleUserFields quando a página carrega
document.addEventListener('DOMContentLoaded', function () {
    // Adiciona o evento onchange ao dropdown
    document.getElementById('user').addEventListener('change', toggleUserFields);

    // Inicializa a visibilidade dos campos adicionais
    toggleUserFields();
});


// const userSelect = document.getElementById('user');

// userSelect.addEventListener('change', function () {
//     const selectedValue = userSelect.value;

//     if (selectedValue === 'visitante') {
//         window.location.href = 'https://www.dc.com/characters/batman';
//     }
// });


// script.js
// script.js
const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
let slideIndex = 0;
const totalSlides = slides.length;



// Função para avançar o slide
function nextSlide() {
    slideIndex = (slideIndex + 1) % totalSlides;
    updateSlidePosition();
}

// Atualiza a posição do slide
function updateSlidePosition() {
    slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Configura o intervalo para mudar os slides automaticamente
setInterval(nextSlide, 3000); // Muda de slide a cada 3 segundos

const scrollerInner = document.querySelector(".horizontal-scrolling-items");
const scrollerContent = Array.from(scrollerInner.children);
const secondCopy = []
scrollerContent.forEach((item) => {
    const duplicatedItem = item.cloneNode(true);
    duplicatedItem.setAttribute("aria-hidden", true);
    scrollerInner.appendChild(duplicatedItem);
    secondCopy.push(duplicatedItem)
});
secondCopy.forEach((item) => {
    document.querySelector(".horizontal-scrolling-items").innerHTML += item.outerHTML
})
secondCopy.forEach((item) => {
    document.querySelector(".horizontal-scrolling-items").innerHTML += item.outerHTML
})