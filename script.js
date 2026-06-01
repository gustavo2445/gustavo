document.addEventListener("DOMContentLoaded", () => {
    
    // 1. EFEITO NA NAVBAR AO FAZER SCROLL (Estilo Apple/Stripe)
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.padding = "15px 40px";
            navbar.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.08)";
            navbar.style.background = "rgba(255, 255, 255, 0.95)";
        } else {
            navbar.style.padding = "20px 40px";
            navbar.style.boxShadow = "none";
            navbar.style.background = "rgba(255, 255, 255, 0.8)";
        }
    });

    // 2. MENU RESPONSIVO PARA TELEMÓVEIS (Abre e fecha o menu)
    // Cria o botão hambúrguer dinamicamente se estiver no telemóvel
    const navLinks = document.querySelector(".nav-links");
    
    if (window.innerWidth <= 768) {
        const burger = document.createElement("div");
        burger.innerHTML = '<i class="fa-solid fa-bars" style="font-size: 1.5rem; cursor: pointer; color: var(--primary-green);"></i>';
        navbar.insertBefore(burger, navLinks);

        burger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            // Muda o ícone entre barras e "X"
            const icon = burger.querySelector("i");
            if (navLinks.classList.contains("active")) {
                icon.className = "fa-solid fa-xmark";
            } else {
                icon.className = "fa-solid fa-bars";
            }
        });

        // Fecha o menu ao clicar num link
        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                burger.querySelector("i").className = "fa-solid fa-bars";
            });
        });
    }

    // 3. ANIMAÇÃO DE SURGIMENTO AO FAZER SCROLL (Scroll Reveal)
    const elementsToAnimate = document.querySelectorAll(".card, .stat-card, .blog-card, .gallery-item, .about-text");
    
    // Configura o estado inicial dos elementos via JS para não quebrar o CSS caso o JS falhe
    elementsToAnimate.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.6s ease-out";
    });

    const checkVisibility = () => {
        const triggerBottom = window.innerHeight * 0.85;

        elementsToAnimate.forEach(el => {
            const elTop = el.getBoundingClientRect().top;

            if (elTop < triggerBottom) {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }
        });
    };

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Executa uma vez ao carregar a página
});