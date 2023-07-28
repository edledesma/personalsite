var dataReload = document.querySelectorAll("[data-reload]");
var language = {
    en:{
        "languageButton":'<img src="img/english.webp" id="languageButtonImg" class="translate">Language',
        "languageButtonImg":"img/english.webp",
        "languageName":"Language",
        "placeholder-name": "Your name",
        "placeholder-email": "Your email",
        "placeholder-phone": "Your phone number (optional)",
        "placeholder-message": "Your message",
    },
    es: {
        "languageButton":'<img src="img/spanish.webp" id="languageButtonImg" class="translate">Idioma',
        "languageButtonImg":"img/spanish.webp",
        "languageName": "Idioma",
        "link-home": "Inicio",
        "link-about": "Sobre mí",
        "link-services": "Servicios",
        "link-portfolio": "Portafolio",
        "link-contact": "Contacto",
        "welcome": "¡Hola! Soy <span>Emiliano David</span><br>programador y desarrollador",
        "description": "Programador, desarrollador, docente",
        "about-me-title": "Sobre Mí",
        "about-me-description": "Docente dedicado con más de 10 años de experiencia. Tengo grandes expectativas personales en mi búsqueda de una nueva oportunidad en el área de desarrollo de software. Uno de mis actuales objetivos en ahondarme en el fascinante mundo de la programación y adquirir un conocimiento profundo de las minuciosidades de este campo en constante evolución.",
        "titles-skills": "Aptitudes",
        "titles-tools": "Herramientas",
        "titles-experience": "Experiencia",
        "titles-education": "Educación",
        "skill-list": "<li><span>Desarrollador Web Full-stack</span><br> Competente en varios lenguajes de programación y tecnologías para crear aplicaciones web totalmente funcionales y dinámicas</li> <li><span>Docencia</span><br> Especializado en el campo de la informática,  responsable de enseñar, realizar investigaciones y guiar a los estudiantes en su trayecto académico y actividades profesionales relacionadas con la informática y la tecnología</li> <li><span>Diseño gráfico </span><br>Profesional creativo, experto en el uso de elementos visuales y varias herramientas de diseño</li>",
        "experience-list": "<li><span>2013 - Actualidad</span><br> Profesor, enseñando informática y programación</li><li><span>2011 - 2012</span><br> Administrador y supervisor asistente</li><li><span>2009 - 2010</span><br> Personal temporal</li>",
        "education-list": "<li><span>2022 - Current</span><br> University of the People - Licenciatura en Ciencias de la Computación, Especialidad en Ciencias de la Computación</li> <li><span>2015 - 2020</span><br> Universidad Nacional de Luján - Licenciatura en Sistemas de Información </li><li><span>2011 - 2015</span><br> Universidad Nacional de Luján - Licenciatura en Información Ambiental</li>",
        "my-services": "Mis servicios",
        "web-design": "Diseño web",
        "web-design-description": "Construir y diseñar interfaces de usuario interactivas para sitios web y aplicaciones utilizando HTML, CSS, Javascript, Vue y más",
        "software-development": "Desarrollo de software",
        "software-description": "Desarrollar aplicaciones del lado del servidor/cliente, bases de datos y administrar la infraestructura del servidor trabajando con Python, Java, SQL y más",
        "graphic-design": "Diseño gráfico",
        "graphic-design-description": "Crear conceptos visuales, esquemas y diseños para diversos medios con Photoshop, Illustrator, Premiere Pro, After Effects y más",
        "learn-more": "Más información",
        "my-work": "Mis trabajos",
        "site-1-name":"Sitio web refugio de animales",
        "site-1-desc":"Rescatar, cuidar y encontrar hogares amorosos para perros abandonados o callejeros, promoviendo la tenencia responsable de mascotas y el bienestar animal.",
        "site-2-name":"Echa un vistazo a mi github",
        "site-2-desc":"¡Explora mi GitHub para obtener proyectos y código emocionantes! Descubra soluciones innovadoras y contribuciones en diversos dominios.",
        "site-3-name":"Aplicación Java",
        "site-3-desc":"¡Próximamente! Estén atentos.",
        "see-more-btn":"Ver más",
        "contact-me":"Contáctame",
        "download-cv-btn":"Descargar CV",
        "placeholder-name": "Tu nombre",
        "placeholder-email": "Tu correo electrónico",
        "placeholder-phone": "Tu número de teléfono (opcional)",
        "placeholder-message": "Tu mensaje",
        "submit-btn":"Enviar",
        "attributions": "Iconos cortesía de Flaticon",
    },
    pt: {
        "languageButton":'<img src="img/portuguese.webp" id="languageButtonImg" class="translate">Idioma',
        "languageName": "Idioma",
        "link-home": "Início",
        "link-about": "Sobre mim",
        "link-services": "Serviços",
        "link-portfolio": "Portefólio",
        "link-contact": "Contato",
        "welcome": "¡Olá! Sou o <span>Emiliano David</span><br> sou programador e desenvolvedor",
        "description": "Programador, dessenvolvedor, professor",
        "about-me-title": "Sobre Mim",
        "about-me-description": "Educador dedicado com mais de 10 anos de experiência. Tenho grandes expectativas pessoais na procura de uma nova oportunidade no domínio do desenvolvimento de software. Um dos meus objectivos actuais é mergulhar no fascinante mundo da programação e adquirir uma compreensão profunda das complexidades deste campo em constante evolução.",
        "titles-skills": "Competências",
        "titles-tools": "Ferramentas",
        "titles-experience": "Experiência",
        "titles-education": "Formação",
        "skill-list": "<li><span>Desenvolvedor Web Full-stack</span><br> Proficiente em várias linguagens de programação e ainda tecnologias para criar aplicações web totalmente funcionais e dinâmicas</li> <li><span>Educação</span><br> Educadora especializada na área de informática, responsável por ensinar, conduzir pesquisas e orientar os alunos em suas atividades acadêmicas e atividades profissionais relacionadas à computação e tecnologia</li><li><span>Designer Gráfico</span><br> Profissional criativo, hábil no uso visual elementos e várias ferramentas de design</li>",
        "experience-list": "<li><span>2013 - Atual</span><br>Professor, lecionando informática e programação</li><li><span>2011 - 2012</span><br> Administrador e supervisor adjunto</li><li><span>2009 - 2010</span><br> Funcionário temporário</li>",
        "education-list": "<li><span>2022 - Atual</span><br> University of the People - Bacharel em Ciência da Computação, Major em Ciência da Computação</li> <li><span>2015 - 2020</span><br> Universidade Nacional de Luján - Bacharel em Sistemas de Informação </li><li><span>2011 - 2015</span><br> Universidade Nacional de Luján - Bacharel em Informação Ambiental</li>",
        "my-services": "Meus serviços",
        "web-design": "Web design",
        "web-design-description": "Construir e projetar interfaces de usuário interativas para sites e aplicativos usando HTML, CSS, Javascript, Vue e muito mais",
        "software-development": "Desenvolvimento de software",
        "software-description": "Desenvolver aplicações do lado do servidor/cliente, bancos de dados e gerenciar a infraestrutura do servidor trabalhando com Python, Java, SQL e muito mais",
        "graphic-design": "Design gráfico",
        "graphic-design-description": "Crie conceitos visuais, esquemas e layouts para várias mídias com Photoshop, Illustrator, Premiere Pro, After Effects e muito mais",
        "learn-more": "Mais informações",
        "my-work": "Meus trabalhos",
        "site-1-name":"Sítio web do abrigo de animais",
        "site-1-desc":"Resgate, cuide e encontre lares amorosos para cães abandonados ou vadios, promovendo a posse responsável de animais de estimação e o bem-estar animal.",
        "site-2-name":"Confira meu GitHub",
        "site-2-desc":"Explore meu GitHub para projetos e códigos empolgantes! Descubra soluções inovadoras e contribuições em vários domínios.",
        "site-3-name":"Aplicação Java",
        "site-3-desc":"Em breve! Fique atento.",
        "see-more-btn":"Ver mais",
        "contact-me":"Contate-me ",
        "download-cv-btn":"Descarregar CV",
        "placeholder-name": "Seu nome",
        "placeholder-email": "Seu e-mail",
        "placeholder-phone": "Seu número de telefone (opcional)",
        "placeholder-message": "Sua mensagem",
        "submit-btn":"Enviar",
        "attributions": "Ícones cortesia de Flaticon",
    }
};

// Function to update language content
function updateLanguageContent(lang) {
    if (language[lang]) {
        var elementsToTranslate = document.querySelectorAll(".translate");
        elementsToTranslate.forEach(function (element) {
            var key = element.id;
            if (language[lang][key]) {
                element.innerHTML = language[lang][key];
            }
        });

        var placeholders = {
            "input-name": language[lang]["placeholder-name"],
            "input-email": language[lang]["placeholder-email"],
            "input-phone": language[lang]["placeholder-phone"],
            "textarea-message": language[lang]["placeholder-message"],
        };

        for (var id in placeholders) {
            if (placeholders.hasOwnProperty(id)) {
                var element = document.getElementById(id);
                if (element) {
                    element.placeholder = placeholders[id];
                }
            }
        }
    }
}

window.onload = function () {
    var dataReload = document.querySelectorAll("[data-reload]");
    for (i = 0; i < dataReload.length; i++) {
        dataReload[i].onclick = function () {
            location.reload(true);
        };
    }

    // Get the language from the URL hash or browser language, default to "en" if not found
    var langFromHash = window.location.hash.substr(1);
    var browserLang = navigator.language.substring(0, 2);
    var defaultLang = langFromHash || browserLang || "en";

    // Check if the language object exists in the language variable
    var langToUse = language[defaultLang] ? defaultLang : "en";

    updateLanguageContent(langToUse);

    var langName = language[langToUse]["languageButton"];
    var languageButton = document.getElementById("languageButton");
    if (languageButton) {
        languageButton.innerHTML = langName;
    }
};

function changeLanguage(lang) {
    window.location.hash = lang === "en" ? "" : lang;
    location.reload(true);
}