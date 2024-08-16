document.addEventListener('DOMContentLoaded', () => {
    const slidesContainer = document.querySelector('.slides');
    const slides = document.querySelectorAll('.slide');
    
    // Verifica se os elementos necessários existem
    if (slidesContainer && slides.length > 0) {
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
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const scrollerInner = document.querySelector(".horizontal-scrolling-items");
    
    if (scrollerInner) {
        const scrollerContent = Array.from(scrollerInner.children);
        const secondCopy = [];

        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
            secondCopy.push(duplicatedItem);
        });

        // Adiciona cópias duplicadas para efeito de rolagem infinita
        secondCopy.forEach((item) => {
            scrollerInner.innerHTML += item.outerHTML;
        });
    }
});





// Função para exibir ou ocultar os campos com base na seleção do tipo de usuário
function toggleUserFields() {
    const userType = document.getElementById('user').value;
    const userFields = document.getElementById('userFields');

    if (userType === 'visitante') {
        window.location.href = 'https://www.dc.com/characters/batman';
    } else if (userType) {
        userFields.style.opacity = 1; // Exibe os campos
    } else {
        userFields.style.opacity = 0; // Oculta os campos
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const userSelect = document.getElementById('user');
    if (userSelect) {
        userSelect.addEventListener('change', toggleUserFields);
        toggleUserFields(); // Inicializa a visibilidade dos campos adicionais
    }
});





function validateLogin() {
    const credentials = {
        funcionario: { username: 'funcionario', password: 'senha123' },
        gerente: { username: 'gerente', password: 'senha123' },
        administrador: { username: 'administrador', password: 'senha123' },
        visitante: { username: 'visitante', password: 'senha123' }
    };

    const userSelect = document.getElementById('user');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const messageDiv = document.getElementById('message');

    if (userSelect && username && password && messageDiv) {
        const userType = userSelect.value;
        const enteredUsername = username.value;
        const enteredPassword = password.value;

        if (userType && credentials[userType]) {
            const { username: validUsername, password: validPassword } = credentials[userType];

            if (enteredUsername === validUsername && enteredPassword === validPassword) {
                messageDiv.textContent = 'Login bem-sucedido!';
                messageDiv.style.color = 'green';

                // Redirecionar para a página específica com base no tipo de usuário
                let redirectUrl;
                switch (userType) {
                    case 'administrador':
                    case 'gerente':
                    case 'funcionario':
                        redirectUrl = 'sistema_adm.html';
                        break;
                    default:
                        redirectUrl = 'index.html'; // Página padrão se necessário
                }
                window.location.href = redirectUrl;
            } else {
                messageDiv.textContent = 'Nome de usuário ou senha inválidos.';
                messageDiv.style.color = 'red';
            }
        } else {
            messageDiv.textContent = 'Selecione um tipo de usuário válido.';
            messageDiv.style.color = 'red';
        }
    }
}

// Adiciona o evento de clique ao botão de envio
document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.getElementById('submitBtn');
    if (submitBtn) {
        submitBtn.addEventListener('click', function (event) {
            event.preventDefault(); // Impede o comportamento padrão do botão
            validateLogin();
        });
    }
});




    // Adiciona o evento de clique ao botão de envio
    const submitBtn = document.getElementById('submitBtn');
    if (submitBtn) {
        submitBtn.addEventListener('click', function (event) {
            event.preventDefault(); // Impede o comportamento padrão do botão
            validateLogin();
        });
    }