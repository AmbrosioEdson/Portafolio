import { Injectable } from '@angular/core';

export interface ProyectsUI {
  semana: number;
  name: string;
  imagen: string;
  reflexion: string;
  resumen: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProvideSectionsService {

  proyects: Array<ProyectsUI> = [
    { semana: 1, name: 'Fundamentos de las Tecnologías Web', resumen: 'Las tecnologías web comprenden todos los componentes que se utilizan para desarrollar aplicativos webs.Esto abarca lenguajes como HTML(HyperText Markup Language), CSS(Cascading Style Sheets) y JavaScript.También incluye el DNS, que es una tecnología que se utiliza para traducir los nombres de dominio legibles por humanos en direcciones IP numéricas que las computadoras pueden entender.Además, los protocolos TCP/ IP y HTTP; el primero es un conjunto de protocolos utilizados para la comunicación en Internet, y el segundo se usa para la transferencia de datos en la web. Para finalizar, se tienen tres roles principales en el desarrollo de aplicativos webs.Estos roles son: desarrolladores Front - End, que se enfocan en la interfaz de usuario con la que los usuarios interactúan; desarrolladores Back - End, que se ocupan de la lógica y el almacenamiento de datos detrás de una aplicación web; y por último, los desarrolladores Fullstack, que comprenden tanto el Front - End como el Back - End, siendo capaces de trabajar en todas las capas de una aplicación web, desde la interfaz de usuario hasta la lógica y el almacenamiento de datos.', imagen: ' https://www.kapitalinteligente.es/wp-content/uploads/2023/06/tecnico-superior-desarrollo-de-aplicaciones-web.jpg', reflexion: 'A diario nos relacionamos con plataformas web, por lo que es importante conocer qué está detrás del desarrollo de estas plataformas web, como los lenguajes que se emplean en su creación, los protocolos, roles y tecnologías que permiten desarrollar estos aplicativos web.' },
    { semana: 2, name: 'Contrucción y Diseño de una paginaweb con html, xml y css', resumen: ' La construcción de una página web comienza con la utilización de lenguajes de marcado como HTML y XML, los cuales permiten estructurar y organizar el contenido de manera legible, tanto para los humanos como para las máquinas. Además, se hace uso de estándares como la Plataforma Web Abierta (Open Web Platform) para garantizar la interoperabilidad entre diferentes navegadores y dispositivos. Durante el desarrollo de la página, se deben considerar aspectos como la optimización para motores de búsqueda (SEO) y la compatibilidad entre navegadores.En cuanto al diseño de la página, se utilizan hojas de estilos CSS3 para definir la apariencia y el diseño visual.Se emplean técnicas como Flexbox y Grid Layout para crear diseños flexibles y alineados, y se puede lograr un diseño fluido y responsivo utilizando unidades de medida relativas y media queries.', imagen: 'https://images.slideplayer.com/17/5366558/slides/slide_2.jpg ', reflexion: ' Para que los sitios web tengan un diseño responsive y ofrezcan una experiencia de calidad a los usuarios, se requiere conocer a fondo los componentes de HTML y CSS, y mediante la comprensión de estos, proporcionar soluciones de manera integral y efectiva para el desarrollo de sitios web.' },
    { semana: 3, name: 'Desarrollo de página web Front-End con CSS Bootstrap y Tailwind', resumen: ' El desarrollo de páginas web Front-End con CSS, Bootstrap y Tailwind significa utilizar estilos predefinidos para agilizar el diseño y el estilo de las páginas web. Bootstrap proporciona un conjunto de estilos y componentes listos para usar que permiten crear un diseño responsivo y móvil de manera rápida. Con Bootstrap, los desarrolladores pueden utilizar su sistema de cuadrícula flexible, tipografía predefinida, botones estilizados, formularios y una variedad de componentes interactivos. Por otro lado, Tailwind CSS adopta un enfoque diferente al proporcionar clases de utilidad de bajo nivel. Esto permite a los desarrolladores tener un mayor control y flexibilidad para personalizar el diseño de la página web. Pueden utilizar una amplia variedad de clases CSS para aplicar estilos específicos a los elementos HTML.', imagen: 'https://miro.medium.com/v2/resize:fit:1358/1*xwAIUbfad95lsuGf2n9nnA.jpeg', reflexion: 'Para el diseño de aplicaciones web, surgen herramientas como Bootstrap y Tailwind para aumentar la productividad y eficiencia en su proceso de creación, lo cual facilita el trabajo y permite a los desarrolladores centrarse en la experiencia del usuario y la funcionalidad.' },
    { semana: 4, name: 'Desarrollo de páginas web Front-End con JavaScript', resumen: ' Para que una página web tenga funcionalidad e interactividad, es necesario desarrollar los aplicativos webs con JavaScript. JavaScript es un lenguaje de programación ampliamente utilizado en el desarrollo web. Permite manipular elementos HTML y CSS, interactuar con el usuario a través de eventos, y desarrollar lógica y funciones personalizadas.Al desarrollar una página web Front- End con JavaScript, los desarrolladores pueden agregar interacciones como botones desplegables, validación de formularios, animaciones, cambios de contenido en tiempo real y muchas otras características dinámicas.También pueden realizar solicitudes a servidores para obtener datos actualizados y mostrarlos en la página web sin necesidad de recargarla.', imagen: 'https://www.trecebits.com/wp-content/uploads/2021/01/SEO-JavaScript.jpg', reflexion: ' JavaScript es una gran herramienta que permite a los desarrolladores mejorar las interfaces web mediante la integración de funciones para que las aplicaciones web no sean estáticas, permitiendo que estas se adapten a las acciones del usuario.' }
  ]

  constructor() { }

  getAlllProyects() {
    return this.proyects
  }

  cambiando(): string {
    return 'weqqwe'
  }
}
