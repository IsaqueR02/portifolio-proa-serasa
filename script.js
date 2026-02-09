const descriptionEl = document.getElementById('description');
const projetosContainer = document.querySelector('.projetos');

const descriptions = {
    halloween: 'Projeto Receita de Halloween: Bolo de Morcego da Bruxa Morgana - Uma receita temática de Halloween que combina ingredientes deliciosos para criar um bolo em forma de morcego, perfeito para festas e celebrações assustadoras.',
    hqs: 'Projeto Recomendações de Mangás, Manhuas, Manhwas e Quadrinhos: Um site que oferece recomendações personalizadas de quadrinhos, abrangendo uma variedade de gêneros e estilos, para ajudar os leitores a descobrir novas histórias emocionantes.',
    blogcats: 'Projeto Blog de Gatos: Um blog dedicado a compartilhar curiosidades, fotos e histórias sobre gatos. O projeto inclui seções para diferentes raças, dicas de cuidados e uma galeria de fotos adoráveis.',
    'functions-apps': 'Projeto Loop Functions: Um aplicativo web que demonstra o uso de funções de loop em JavaScript para criar interatividade e animações. O projeto inclui exemplos práticos e uma interface amigável para explorar diferentes tipos de loops.',
    infinitea: 'Projeto Infinitea: Um site que fiz em equipe onde apresentamos uma proposta de auxiliar na empregabilidade de pessoas com autismo.'
};

let showTimeout = null;
let hideTimeout = null;

const showLoadingThenText = (btn, text) => {
    clearTimeout(showTimeout);
    clearTimeout(hideTimeout);

    const btnOffsetTop = btn.offsetTop;
    const btnOffsetLeft = btn.offsetLeft;

    descriptionEl.style.top = btnOffsetTop + 'px';
    descriptionEl.style.left = (btnOffsetLeft + btn.offsetWidth + 12) + 'px';
    descriptionEl.innerHTML = '<div class="spinner"></div>';
    descriptionEl.classList.add('active');

    showTimeout = setTimeout(() => {
        descriptionEl.textContent = text;

        const projRect = projetosContainer.getBoundingClientRect();
        const descRect = descriptionEl.getBoundingClientRect();
        if (descRect.right > projRect.right) {
            descriptionEl.style.left = Math.max(8, btnOffsetLeft - descRect.width - 12) + 'px';
        }
    }, 600);
};

const hidePopup = () => {
    clearTimeout(showTimeout);
    clearTimeout(hideTimeout);
    descriptionEl.classList.remove('active');
};

descriptionEl.addEventListener('mouseenter', () => {
    clearTimeout(hideTimeout);
});
descriptionEl.addEventListener('mouseleave', () => {
    hideTimeout = setTimeout(hidePopup, 150);
});

Object.keys(descriptions).forEach(id => {
    const btn = document.getElementById(id);
    if (!btn) return;
    btn.addEventListener('mouseenter', () => {
        clearTimeout(hideTimeout);
        showLoadingThenText(btn, descriptions[id]);
    });
    btn.addEventListener('mouseleave', () => {
        hideTimeout = setTimeout(hidePopup, 150);
    });
});

const carrosselItems = document.querySelectorAll('.carrossel .destaque');
carrosselItems.forEach(item => {
    item.addEventListener('click', () => {
        const url = item.getAttribute('data-url');
        if (url) window.open(url, '_blank');
    });
});

