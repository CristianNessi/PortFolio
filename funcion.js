// Visibilidad del texto


function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    section.classList.add('visible');
  }
}


// Cambio de lenguaje


const translations = {
    'es': {
      'aboutMe': 'Sobre mí',
      'experience': 'Experiencia',
      'projects': 'Proyectos',
      'Hello, I am Cristian Fernandez Nessi': 'Hola, soy Cristian Fernandez Nessi',
      'Web programmer // Fullstack developer // Mobile developer':'Programador web // Desarrollador fullstack // Desarrollador Mobile',
      'Junior Web Developer with 1+ year of experience. From Buenos Aires Argentina. Specialized in creating static websites and using the Framework I perfect myself in front end-backend, focusing on React-js delving deeper into JavaScript. My goal is to be a specialist in cybersecurity.' : 'Desarrollador Web junior con 1+ año de experiencia. De Buenos Aires Argentina. Especializado en crear sitios web estaticos y utilizando el Framework Me perfecciono en front end- backend, enfocandome en React-js profundizando JavaScript. Mi meta es ser especialista en ciberseguridad.',
      'Mail' : 'Correo',
      'February' : 'Febrero',
      'Principle of software and application.': 'Princicio de software y aplicacion.',
      'Still working on the design and style. Using tools "Html", "JavaScript", "Python", "Mysql". App, version only "andriod", starting to design for "ios". How is it not finished? I don`t comment on what it is about.':'Aun trabajando en el diseñado y estilo. Utilizando herramientas "Html", "JavaScript", "Python", "Mysql". App, solo en version"andriod", comenzando diseñar para "ios". Como no esta terminada no comento de que se trata.', 
      'Octuber' : 'Octubre',
      'HTML-JAVASCRIPT project design.':'Diseño de proyectos HTML-JAVASCRIPT.',
      'Currently finishing personal projects with the end of explain use and functions of both languages. Both projects are found presenting in repositories on Github. Which They show both the code and the representation on the page Web.':'Actualmente terminando proyectos personales con el final de explicar uso y funciones de ambos lenguajes. Ambos proyectos se encuentran presentando en repositorios en Github. Los cuales muestran tanto el codigo como tambien la representacion en pagina web.', 
      'January':'Enero',
      'Improvement of security software.':'Perfeccionamiento de software de seguridad.',
      'The security company software not designed by me, but yes analyzed security system and license plate programming. doing system quality control, modification, reuse deletion of database data. Implemented in different servers. PostgresSlq database.':'El sotfwate de empresa de seguridad no diseñado por mi, pero si analizaba sistema seguridad y programacion de placas. realizando control de calidad de sistema, modificacion , reutilizacion eliminacion de datos base de datos. Implementada en distintos servidores. Base de datos PostgresSlq.',
      'March':'Marzo',
      'Structure, style and functionality design.':'Diseño de estructura, estilo y funcionalidad.',
      'Creation of 10 web pages. With different themes for use Similar. Independently for clients with requirements different. Which implement the use of tools marketing: like MailChimp. And web structure using "html", "Css" and "JavaScript". Front-end design only.':'Creacion de 10 paginas web. Con diferentes tematicas para uso similares. De manera idependiente para clientes con requisitos diferentes. Los cuales implemente el uso de herramientas de marketing: como MailChimp. Y estructura web usando "html", "Css" y "JavaScript". Solo diseño front-end.',
      'Proyects':'Proyectos',
      'Proyect':'Proyecto',
      'In HTML, it was my first language that I learned, with this language I I found meaning in programming. It can be easy to understand and drive.':'En HTML, fue mi primer lenguaje que aprendi, con este lenguaje le encontre sentido a la programacion. Puede ser facil de entender y manejar.',
      'However, it must be done delicately so that there is a Functional and well structured site. The same as CSS and JavaScript. They are languages that must be learned. For this one too I have a step by step of its structure and use.':'Sin embargo, hay que hacerlo con delicadeza para que quede un sitio funcional y bien estructurado. Lo mismo que Css y JavaScript. Son lenguajes que hay que aprender. Por este tambien tengo un paso a paso de su estructura y utilizadad.',
      'Lear more':'Leer mas',
      "As you will see, this PORTFOLIO has a lot of CSS, I already know in the part web as in the responsive part. But I'm also explaining briefly each CSS step of how to modify and style the website.":'Como veran este PORTFOLIO tiene mucho de Css, ya se en la parte web como en la parte responsive. Pero tambien estoy explicando brevemente cada paso de CSS de como modificar y dar estilo a web.',
      'For some time now, it is very fun and exciting to do it. By my interpretation both HTML and CSS. They are essential for for creating a good interface that is user friendly. By It is reason, it is what created a step by step of the language so that can use in the best way.':'Ya tiempo por el mismo, es muy divertido y apasionante hacerlo. Por mi interpretacion tanto HTML como CSS. Son indispensables para por crear una buena interfaz que sea amigable para el usuario. Por es razon, es la que creo un paso a paso del lenguaje para que se pueda utilizar de la mejor manera.',
      'I am carrying out the task of reviewing the language step by step JavaScript, the first part is already complete and captured in my Github repository.':'Estoy realizando la tarea de repasar paso por paso el lenguaje JavaScript, la primer parte ya esta completa y plasmada en mi repositoria de Github.',
      "I plan to continue it but it took a lot of time. I'm going to take one series of 6 long projects to complete it. They can do the first one seeing and learning is a 6-part teroai, with 6 practices that divided into chapters.":'Planeo continuarlo pero me demando mucho tiempo. Voy a llevar una serie de 6 largos proyectos para completarlo. El primero lo pueden ver y aprender es una teroai de 6 partes, con 6 practicas que las dividi en capitulos.',
      'Software Project':'Proyecto Software',
      'In this section, I am starting with a new application and software with a lot of demand and a lot of growth potential.':'En este apartado, estoy comenzando con un aplicacion y software nuevo con mucha demanda y mucha posibilidad de crecimiento.',
      "At the moment it is not ending, it is the question of why it is not I provide a lot of information in this respect. But I'm very excited in completing it. I will continue uploading news accordingly.":'Por el momento no esta terminando es la cuestion de por el cual no proporciono muchos datos al respeto. Pero estoy muy entusiasmado en completarlo. Seguire subiendo novedades al respeto.',
      'Futuro':'Futuro',
      'Nesscri.':'Nesscri.',
      'Privacy Policy.':'Política de privacidad.',
      'All rights reserved.':'Todos los derechos reservados.',
      'pink':'rosa'
    },
    'en': {
      'aboutMe': 'About me',
      'experience': 'Experience',
      'projects': 'Projects',
      'Hello, I am Cristian Fernandez Nessi':'Hello, I am Cristian Fernandez Nessi',
      'Web programmer // Fullstack developer // Mobile developer' : 'Web programmer // Fullstack developer // Mobile developer',
      'Junior Web Developer with 1+ year of experience. From Buenos Aires Argentina. Specialized in creating static websites and using the Framework I perfect myself in front end-backend, focusing on React-js delving deeper into JavaScript. My goal is to be a specialist in cybersecurity.' : 'Junior Web Developer with 1+ year of experience. From Buenos Aires Argentina. Specialized in creating static websites and using the Framework I perfect myself in front end-backend, focusing on React-js delving deeper into JavaScript. My goal is to be a specialist in cybersecurity.',
      'Mail' : 'Mail' ,
      'February' : 'February',
      'Principle of software and application.':'Principle of software and application.',
      'Still working on the design and style. Using tools "Html", "JavaScript", "Python", "Mysql". App, version only "andriod", starting to design for "ios". How is it not finished? I don`t comment on what it is about.' : 'Still working on the design and style. Using tools "Html", "JavaScript", "Python", "Mysql". App, version only "andriod", starting to design for "ios". How is it not finished? I don`t comment on what it is about.',
      'Octuber':'Octuber',
      'HTML-JAVASCRIPT project design.':'HTML-JAVASCRIPT project design.',
      'Currently finishing personal projects with the end of explain use and functions of both languages. Both projects are found presenting in repositories on Github. Which They show both the code and the representation on the page Web.':'Currently finishing personal projects with the end of explain use and functions of both languages. Both projects are found presenting in repositories on Github. Which They show both the code and the representation on the page Web.',
      'January':'January',
      'Improvement of security software.':'Improvement of security software.',
      'The security company software not designed by me, but yes analyzed security system and license plate programming. doing system quality control, modification, reuse deletion of database data. Implemented in different servers. PostgresSlq database.':'The security company software not designed by me, but yes analyzed security system and license plate programming. doing system quality control, modification, reuse deletion of database data. Implemented in different servers. PostgresSlq database.',
      'March':'March',
      'Structure, style and functionality design.':'Structure, style and functionality design.',
      'Creation of 10 web pages. With different themes for use Similar. Independently for clients with requirements different. Which implement the use of tools marketing: like MailChimp. And web structure using "html", "Css" and "JavaScript". Front-end design only.':'Creation of 10 web pages. With different themes for use Similar. Independently for clients with requirements different. Which implement the use of tools marketing: like MailChimp. And web structure using "html", "Css" and "JavaScript". Front-end design only.',
      'Proyects':'Proyects',
      'Proyect':'Proyect',
      'In HTML, it was my first language that I learned, with this language I I found meaning in programming. It can be easy to understand and drive.':'In HTML, it was my first language that I learned, with this language I I found meaning in programming. It can be easy to understand and drive.',
      'However, it must be done delicately so that there is a Functional and well structured site. The same as CSS and JavaScript. They are languages that must be learned. For this one too I have a step by step of its structure and use.':'However, it must be done delicately so that there is a Functional and well structured site. The same as CSS and JavaScript. They are languages that must be learned. For this one too I have a step by step of its structure and use.',
      'Lear more':'Lear more',
      "As you will see, this PORTFOLIO has a lot of CSS, I already know in the part web as in the responsive part. But I'm also explaining briefly each CSS step of how to modify and style the website.":"As you will see, this PORTFOLIO has a lot of CSS, I already know in the part web as in the responsive part. But I'm also explaining briefly each CSS step of how to modify and style the website.", 
      'For some time now, it is very fun and exciting to do it. By my interpretation both HTML and CSS. They are essential for for creating a good interface that is user friendly. By It is reason, it is what created a step by step of the language so that can use in the best way.':'For some time now, it is very fun and exciting to do it. By my interpretation both HTML and CSS. They are essential for for creating a good interface that is user friendly. By It is reason, it is what created a step by step of the language so that can use in the best way.',
      'I am carrying out the task of reviewing the language step by step JavaScript, the first part is already complete and captured in my Github repository.':'I am carrying out the task of reviewing the language step by step JavaScript, the first part is already complete and captured in my Github repository.',
      "I plan to continue it but it took a lot of time. I'm going to take one series of 6 long projects to complete it. They can do the first one seeing and learning is a 6-part teroai, with 6 practices that divided into chapters.":"I plan to continue it but it took a lot of time. I'm going to take one series of 6 long projects to complete it. They can do the first one seeing and learning is a 6-part teroai, with 6 practices that divided into chapters.",
      'Software Project':'Software Project',
      'In this section, I am starting with a new application and software with a lot of demand and a lot of growth potential.':'In this section, I am starting with a new application and software with a lot of demand and a lot of growth potential.',
      "At the moment it is not ending, it is the question of why it is not I provide a lot of information in this respect. But I'm very excited in completing it. I will continue uploading news accordingly.":"At the moment it is not ending, it is the question of why it is not I provide a lot of information in this respect. But I'm very excited in completing it. I will continue uploading news accordingly.",
      'Future':'Future',
      'Nesscri.':'Nesscri.',
      'Privacy Policy.':'Privacy Policy.',
      'All rights reserved.':'All rights reserved.',
      'pink':'pink'
    }
  };


  function changeLanguage(lang) {
    const elementsToTranslate = document.querySelectorAll('[data-language]');
    elementsToTranslate.forEach((element) => {
      const key = element.getAttribute('data-language');
      if (translations[lang] && translations[lang][key]) {
        element.innerText = translations[lang][key];
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    // Define el idioma predeterminado (puede ser según la configuración del usuario)
    const defaultLanguage = 'es';
    changeLanguage(defaultLanguage);
  });