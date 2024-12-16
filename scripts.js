document.querySelector('.copy-btn').addEventListener('click', () => {
    const pixKey = document.getElementById('pix-key').textContent;

    if (navigator.clipboard) {
        navigator.clipboard.writeText(pixKey)
            .then(() => {
                const copyMsg = document.getElementById('copy-msg');
                copyMsg.classList.remove('d-none');
                setTimeout(() => copyMsg.classList.add('d-none'), 3000);
            })
            .catch(() => console.error("Erro ao copiar a chave PIX."));
    } else {
        alert("Seu navegador não suporta a cópia para a área de transferência.");
    }
});

new Splide('.splide', {
    type: 'loop',
    perPage: 1,
    autoplay: true,
    interval: 3000,
    pagination: true,
}).mount();

const shareData = {
    title: 'Ajude Pedro Henrique',
    text: 'Uma história emocionante! Ajude Pedro Henrique a alcançar seus sonhos. Chave PIX: 199880181818.',
    url: window.location.href,
};

document.getElementById('share-facebook').addEventListener('click', () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareData.url)}`;
    window.open(facebookUrl, '_blank', 'width=600,height=400');
});

document.getElementById('share-twitter').addEventListener('click', () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        `${shareData.text} ${shareData.url}`
    )}`;
    window.open(twitterUrl, '_blank', 'width=600,height=400');
});

document.getElementById('share-whatsapp').addEventListener('click', () => {
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
        `${shareData.text} ${shareData.url}`
    )}`;
    window.open(whatsappUrl, '_blank', 'width=600,height=400');
});

new Splide('.photo-carousel', {
    type: 'loop',
    perPage: 1,
    autoplay: true,
    interval: 3000,
}).mount();
