document.addEventListener("DOMContentLoaded", () => {
  onInit();
});

function onInit() {

    //Template Nosotros
  let nosotrosItems = [
    {
      imagenSrc: "./assets/images/icono1.svg",
      imagenAlt: "Icono Candado",
      h3Text: "Seguridad",
      pText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque laboriosam velit ab incidunt omnis suscipit reprehenderit vel doloremque, rerum debitis quam vitae tenetur, ipsum unde ea deserunt, corporis impedit corrupti!"
    },
    {
        imagenSrc: "./assets/images/icono2.svg",
        imagenAlt: "Icono Dinero",
        h3Text: "El Mejor Precio",
        pText:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque laboriosam velit ab incidunt omnis suscipit reprehenderit vel doloremque, rerum debitis quam vitae tenetur, ipsum unde ea deserunt, corporis impedit corrupti!"
    },
    {
        imagenSrc: "./assets/images/icono3.svg",
        imagenAlt: "Icono Reloj",
        h3Text: "A tiempo",
        pText:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque laboriosam velit ab incidunt omnis suscipit reprehenderit vel doloremque, rerum debitis quam vitae tenetur, ipsum unde ea deserunt, corporis impedit corrupti!"
    },
  ];

  // contenedorNosotrosItems del template
  const contenedorNosotrosItems = document.getElementById("nosotros-contenido");

  // Contenido del elemento template
  const templateNosotrosItems =
    document.getElementById("items-nosotros").content;

  nosotrosItems.forEach((item) => {
    // Clona el contenido del template
    const clone = document.importNode(templateNosotrosItems, true);

    // Rellena los datos de la itemn
    clone.querySelector("div.nosotros-item>img").src = item.imagenSrc;
    clone.querySelector("div.nosotros-item>img").alt = item.imagenAlt;
    clone.querySelector("div.nosotros-item>h3").textContent = item.h3Text;
    clone.querySelector("div.nosotros-item>p").textContent = item.pText;

    // Añade el item clonado al contenedor de la galería
    contenedorNosotrosItems.appendChild(clone);
  });

  // FIN Template Nosotros


    //Template CasasItems
  let casasItems = [
    {
      imagenPrincipalSrc: "./assets/images/anuncio1.jpg",
      imagenPrincipalAlt: "Casa en el lago",
      h3Text: "Casa de Lujo en el Lago",
      pText:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus quibusdam asperiores est ab nostrum ipsam. Earum voluptatem iste quidem minus accusantium asperiores aut, fugiat obcaecati exercitationem molestiae saepe similique. Debitis.",
      bText: "u$s 3.500.000",
      icono1Src: "./assets/images/icono_wc.svg",
      icono1Alt: "Icono baño",
      icono1PText: "3",
      icono2Src: "./assets/images/icono_estacionamiento.svg",
      icono2Alt: "Icono Estacionamiento",
      icono2PText: "3",
      icono3Src: "./assets/images/icono_dormitorio.svg",
      icono3Alt: "Icono Dormitorio",
      icono3PText: "4"
    },
    {
      imagenPrincipalSrc: "./assets/images/anuncio2.jpg",
      imagenPrincipalAlt: "Casa de lujo",
      h3Text: "Casa terminados de lujo",
      pText:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, fuga tenetur dolorem in beatae ipsum ipsa quisquam vero quos ullam eaque, accusamus aperiam commodi rerum quasi magni dolores? Cupiditate, quae.",
      bText: "u$s 3.500.000",
      icono1Src: "./assets/images/icono_wc.svg",
      icono1Alt: "Icono baño",
      icono1PText: "3",
      icono2Src: "./assets/images/icono_estacionamiento.svg",
      icono2Alt: "Icono Estacionamiento",
      icono2PText: "3",
      icono3Src: "./assets/images/icono_dormitorio.svg",
      icono3Alt: "Icono Dormitorio",
      icono3PText: "4"
    },
    {
      imagenPrincipalSrc: "./assets/images/anuncio3.jpg",
      imagenPrincipalAlt: "Casa con pileta",
      h3Text: "Casa con Pileta",
      pText:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa suscipit blanditiis magnam nostrum obcaecati nisi ad quisquam voluptates sed, delectus debitis, consequatur eius deleniti consectetur ipsam similique neque, esse repudiandae.",
      bText: "u$s 3.500.000",
      icono1Src: "./assets/images/icono_wc.svg",
      icono1Alt: "Icono baño",
      icono1PText: "3",
      icono2Src: "./assets/images/icono_estacionamiento.svg",
      icono2Alt: "Icono Estacionamiento",
      icono2PText: "3",
      icono3Src: "./assets/images/icono_dormitorio.svg",
      icono3Alt: "Icono Dormitorio",
      icono3PText: "4"
    },
  ];

  // contenedorCasasItems del template
  const contenedorCasasItems = document.getElementById("listado-casas");

  // Contenido del elemento template
  const templateCasasItems =
    document.getElementById("items-casas-venta").content;

  casasItems.forEach((item) => {
    // Clona el contenido del template
    const clone = document.importNode(templateCasasItems, true);

    // Rellena los datos de la itemn
    clone.querySelector("div.casas-venta-item>img").src =
      item.imagenPrincipalSrc;
    clone.querySelector("div.casas-venta-item>img").alt =
      item.imagenPrincipalAlt;
    clone.querySelector("div.casas-venta-item>h3").textContent = item.h3Text;
    clone.querySelector("div.casas-venta-item>p").textContent = item.pText;
    clone.querySelector("div.casas-venta-item>b").textContent = item.bText;
    clone.querySelector(
      "div.casas-venta-item>div.casas-venta-iconos>img:nth-child(1)"
    ).src = item.icono1Src;
    clone.querySelector(
      "div.casas-venta-item>div.casas-venta-iconos>img:nth-child(1)"
    ).alt = item.icono1Alt;
    clone.querySelector(
      "div.casas-venta-item>div.casas-venta-iconos>p:nth-child(2)"
    ).textContent = item.icono1PText;
    clone.querySelector(
      "div.casas-venta-item>div.casas-venta-iconos>img:nth-child(3)"
    ).src = item.icono2Src;
    clone.querySelector(
      "div.casas-venta-item>div.casas-venta-iconos>img:nth-child(3)"
    ).alt = item.icono2Alt;
    clone.querySelector(
      "div.casas-venta-item>div.casas-venta-iconos>p:nth-child(4)"
    ).textContent = item.icono2PText;
    clone.querySelector(
      "div.casas-venta-item>div.casas-venta-iconos>img:nth-child(5)"
    ).src = item.icono3Src;
    clone.querySelector(
      "div.casas-venta-item>div.casas-venta-iconos>img:nth-child(5)"
    ).alt = item.icono3Alt;
    clone.querySelector(
      "div.casas-venta-item>div.casas-venta-iconos>p:nth-child(6)"
    ).textContent = item.icono3PText;

    // Añade el item clonado al contenedor de la galería
    contenedorCasasItems.appendChild(clone);
  });

  // FIN Template CasasItems


    //Template Blogs
    let blogItems = [
        {
          imagenPrincipalSrc: "./assets/images/blog1.jpg",
          imagenPrincipalAlt: "Terraza con sillones",
          h3Text: "Terraza en el techo de tu casa",
          fechaText: "20/10/2019",
          autorText: "Admin",
          pText:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus quibusdam."
        },
        {
            imagenPrincipalSrc: "./assets/images/blog2.jpg",
            imagenPrincipalAlt: "Pileta",
            h3Text: "Guía para la decoración del hogar",
            fechaText: "20/10/2019",
            autorText: "Admin",
            pText:
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        }
      ];
    
      // contenedorBlogItems del template
      const contenedorBlogItems = document.getElementById("blog-content");
    
      // Contenido del elemento template
      const templateBlogItems =
        document.getElementById("blog-item").content;
    
      blogItems.forEach((item) => {
        // Clona el contenido del template
        const clone = document.importNode(templateBlogItems, true);
    
        // Rellena los datos de la itemn
        clone.querySelector("div.blog-item>img").src =
          item.imagenPrincipalSrc;
        clone.querySelector("div.blog-item>img").alt =
          item.imagenPrincipalAlt;
        clone.querySelector("div.blog-info>h3").textContent = item.h3Text;
        clone.querySelector("div.blog-info>p>b:nth-child(1)").textContent = item.fechaText;
        clone.querySelector("div.blog-info>p>b:nth-child(2)").textContent = item.autorText;
        clone.querySelector("div.blog-info>p:nth-child(4)").textContent = item.pText;
        
        // Añade el item clonado al contenedor de la galería
        contenedorBlogItems.appendChild(clone);
      });
    
      // FIN Template Blogs
}
