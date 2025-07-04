function openWhatsApp() {
    // Substitua pelo número real da empresa
    const phoneNumber = "5511999999999"; // Formato: código do país + DDD + número
    const message = encodeURIComponent("Olá! Gostaria de conhecer mais sobre as joias da ANAMI.");
    window.open(`https://wa.me/556392242480?text=Ol%C3%A1!%20Gostaria%20de%20conhecer%20mais%20sobre%20as%20joias%20da%20ANAMI.`, '_blank');
}

function openCatalog() {
    // Substitua pela URL real do catálogo
    window.open("https://www.whatsapp.com/catalog/556392242480/?app_absent=0", '_blank');
}

function openLocation() {
    // Substitua pelas coordenadas reais da loja
    const address = encodeURIComponent("ANAMI Joias - Endereço da Loja");
    window.open(`https://www.google.com/maps/place/Anami+Joias+-+Prata925+e+Semijoias/@-10.1878723,-48.3279438,15z/data=!4m6!3m5!1s0x9324cb741182be0d:0x14806d4c8c3842!8m2!3d-10.1878723!4d-48.3279438!16s%2Fg%2F11khtt5h1f?entry=tts&g_ep=EgoyMDI0MDYyMy4wKgBIAVAD`, '_blank');
}

function openSite() {
    // Substitua pela URL real do site
    window.open("https://anamijoias.com.br/", '_blank');
}

// Efeito de partículas sutil no fundo
function createParticles() {
    const particles = document.createElement('div');
    particles.style.position = 'fixed';
    particles.style.top = '0';
    particles.style.left = '0';
    particles.style.width = '100%';
    particles.style.height = '100%';
    particles.style.pointerEvents = 'none';
    particles.style.zIndex = '-1';
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '2px';
        particle.style.height = '2px';
        particle.style.background = 'rgba(198, 158, 148, 0.3)';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${3 + Math.random() * 4}s ease-in-out infinite`;
        particle.style.animationDelay = Math.random() * 2 + 's';
        particles.appendChild(particle);
    }
    
    document.body.appendChild(particles);
}

// Adicionar animação de flutuação
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
    }
`;
document.head.appendChild(style);

// Inicializar partículas quando a página carregar
window.addEventListener('load', createParticles);

// Adicionar efeito de hover nos botões
document.querySelectorAll('.link-button').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.02)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});