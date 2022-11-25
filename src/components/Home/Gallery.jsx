import GLightbox from 'glightbox';

function Galery() {

    const lightbox = GLightbox({
        touchNavigation: true,
        loop: true,
        autoplayVideos: true
    });
    
    const myGallery = GLightbox({
      elements: [
          {
              'href': 'https://www.youtube.com/watch?v=tPqVPtXC4FI',
              'type': 'video',
              'title': 'Cocinera Artesanal 2022',
              'description': 'Muestra anual, Escuela nocturna 9 de Julio, exposición de trabajos realizados durante el cursado.',
              'source': 'youtube', //vimeo, youtube or local
              'width': 600,
          },
          {
              'href': 'https://qpjongunqmlhnicdvokg.supabase.co/storage/v1/object/sign/recipe/cocinera_artesanal_2022/muestra%202022_3.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZWNpcGUvY29jaW5lcmFfYXJ0ZXNhbmFsXzIwMjIvbXVlc3RyYSAyMDIyXzMuanBnIiwiaWF0IjoxNjY5MTI5NTczLCJleHAiOjE5ODQ0ODk1NzN9.xvV5dZfdvVGLDl1x45NRF5IYxq9QEyR33mU0jwJLWJY',
              'type': 'image',
              'title': 'Productos en exposición',
              'description': 'Pan dulce, budin ingles, profiteroles, isla flotante, jesuitas. Salados: empanadas, matambre relleno de verduras, arrollado de pollo.',
          },
          {
              'href': 'https://www.youtube.com/watch?v=IB5oYAinyYU',
              'type': 'video',
              'title': 'Pan dulce de navidad',
              'description': 'No existe navidad sin pan dulce, ya que es un pan azucarado con frutas abrillantada y aroma a citricos, puede solictarlo tambien con chispas de chocolate, nueces y otras combinaciones.',
              'source': 'youtube', //vimeo, youtube or local
              'width': 600,
          },
          {
            'href':'https://qpjongunqmlhnicdvokg.supabase.co/storage/v1/object/sign/recipe/cocinera_artesanal_2022/muestra%202022_6.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZWNpcGUvY29jaW5lcmFfYXJ0ZXNhbmFsXzIwMjIvbXVlc3RyYSAyMDIyXzYuanBnIiwiaWF0IjoxNjY5MTU0OTI4LCJleHAiOjE5ODQ1MTQ5Mjh9.Sm8xn0-4SKhhtHJH3pTqk0YedvE8megIudGyXgHAsXs',
            'title': 'Algunos de nuestros postres',
            'description': 'Los postres son el cuento de hadas de la cocina, un final feliz luego de la cena - Terri Guillemets',
            'type': 'image',
            'alt': 'image text alternatives'
          },
          {
            'href':'https://qpjongunqmlhnicdvokg.supabase.co/storage/v1/object/sign/recipe/cocinera_artesanal_2022/muestra%202022_7.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZWNpcGUvY29jaW5lcmFfYXJ0ZXNhbmFsXzIwMjIvbXVlc3RyYSAyMDIyXzcuanBnIiwiaWF0IjoxNjY5MzM0OTkxLCJleHAiOjE5ODQ2OTQ5OTF9.OK23oARb5i3f5WMkT0bQPTljUcvU-tikprH4PPRMErU',
            'title': 'Variedad de Tortas',
            'description': 'Las tortas son especiales. Cada cumpleaños, cada celebración terminara con algo dulce: una torta que la gente recordara - Buddy Valastro',
            'type': 'image',
            'alt': 'image text alternatives'
          },
          {
            'href':'https://qpjongunqmlhnicdvokg.supabase.co/storage/v1/object/sign/recipe/cocinera_artesanal_2022/muestra%202022_2.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZWNpcGUvY29jaW5lcmFfYXJ0ZXNhbmFsXzIwMjIvbXVlc3RyYSAyMDIyXzIuanBnIiwiaWF0IjoxNjY5MTI5NTY0LCJleHAiOjE5ODQ0ODk1NjR9.es2QAgRTV0ql35si2YPoLrlRMIqC6sUVKdDAnzqTbNI',
            'title': 'Fotos Cocinera Artesanal 2022',
            'description': 'Grupo de alumnas, en la muestra realizada, en la escuela 9 de Julio, el 18 de noviembre del 2022.',
            'type': 'image',
            'alt': 'image text alternatives'
          }      
      ],
      autoplayVideos: true,
    });

    const picture =(title, text, img, id)=>{
        return(
            <div className="img__container 
                        col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 
                        overflow-hidden d-block position-relative mb-2"
                        onClick={()=>myGallery.openAt(id)}
            >
                        <img 
                            className="img__gallery" 
                            src={img} 
                            width="100%" 
                            height="auto"
                            alt="img_gallery_1"
                        />
                        <div className="text__gallery">
                            <span className="lg-fs">{title}</span>
                            <span className="sm-fs mt-4 p-3">{text}</span>
                        </div>
                    </div>
        );
    }
    return (
            <section id="gallery">                                 
                <div className="row mb-4">                    
                    {picture(
                        "Cocinera Artesanal 2022",
                        "Muestra anual, Escuela nocturna 9 de Julio, exposición de trabajos realizados durante el cursado.",
                        "https://qpjongunqmlhnicdvokg.supabase.co/storage/v1/object/sign/recipe/cocinera_artesanal_2022/muestra%202022_1.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZWNpcGUvY29jaW5lcmFfYXJ0ZXNhbmFsXzIwMjIvbXVlc3RyYSAyMDIyXzEuanBnIiwiaWF0IjoxNjY5MTI5MTU4LCJleHAiOjE5ODQ0ODkxNTh9.Jt-GcOFFJNzUU3u2iQb82YpbsqSxWZxtGeTPGhRkW9k",
                        "0"
                    )}
                    {picture(
                        "Productos en exposición",
                        "Dulces: Pan dulce, budin ingles, profiteroles, isla flotante, jesuitas. Salados: empanadas, matambre relleno de verduras, arrollado de pollo.",
                        "https://qpjongunqmlhnicdvokg.supabase.co/storage/v1/object/sign/recipe/cocinera_artesanal_2022/muestra%202022_3.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZWNpcGUvY29jaW5lcmFfYXJ0ZXNhbmFsXzIwMjIvbXVlc3RyYSAyMDIyXzMuanBnIiwiaWF0IjoxNjY5MTI5NTczLCJleHAiOjE5ODQ0ODk1NzN9.xvV5dZfdvVGLDl1x45NRF5IYxq9QEyR33mU0jwJLWJY",
                        "1"

                        )}
                    {picture(
                        "Pan dulce de navidad",
                        "No existe navidad sin pan dulce, ya que es un pan azucarado con frutas abrillantada y aroma a citricos, puede solictarlo tambien con chispas de chocolate, nueces y otras combinaciones.",
                        "https://qpjongunqmlhnicdvokg.supabase.co/storage/v1/object/sign/recipe/cocinera_artesanal_2022/muestra%202022_5.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZWNpcGUvY29jaW5lcmFfYXJ0ZXNhbmFsXzIwMjIvbXVlc3RyYSAyMDIyXzUuanBnIiwiaWF0IjoxNjY5MTM1NzY4LCJleHAiOjE5ODQ0OTU3Njh9.OxV3wvDs1p53LofGhLlXpooAeLUtvl9ysFMZfKYYl48",
                        "2"

                    )}
                    {picture(
                        "Algunos de nuestros postres",
                        "Profiteroles, isla flotante y muchos más...",
                        "https://qpjongunqmlhnicdvokg.supabase.co/storage/v1/object/sign/recipe/cocinera_artesanal_2022/muestra%202022_6.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZWNpcGUvY29jaW5lcmFfYXJ0ZXNhbmFsXzIwMjIvbXVlc3RyYSAyMDIyXzYuanBnIiwiaWF0IjoxNjY5MTU0OTI4LCJleHAiOjE5ODQ1MTQ5Mjh9.Sm8xn0-4SKhhtHJH3pTqk0YedvE8megIudGyXgHAsXs",
                        "3"
                    )}
                    {picture(
                        "Variedad de Tortas",
                        "Las tortas son especiales. Cada cumpleaños, cada celebración terminara con algo dulce: una torta que la gente recordara - Buddy Valastro",
                        "https://qpjongunqmlhnicdvokg.supabase.co/storage/v1/object/sign/recipe/cocinera_artesanal_2022/muestra%202022_7.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZWNpcGUvY29jaW5lcmFfYXJ0ZXNhbmFsXzIwMjIvbXVlc3RyYSAyMDIyXzcuanBnIiwiaWF0IjoxNjY5MzM0OTkxLCJleHAiOjE5ODQ2OTQ5OTF9.OK23oARb5i3f5WMkT0bQPTljUcvU-tikprH4PPRMErU",
                        "4"
                    )}
                    {picture(
                        "Fotos Cocinera Artesanal 2022",
                        "Grupo de alumnas, en la muestra realizada, en la escuela 9 de Julio, el 18 de noviembre del 2022.",
                        "https://qpjongunqmlhnicdvokg.supabase.co/storage/v1/object/sign/recipe/cocinera_artesanal_2022/muestra%202022_2.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZWNpcGUvY29jaW5lcmFfYXJ0ZXNhbmFsXzIwMjIvbXVlc3RyYSAyMDIyXzIuanBnIiwiaWF0IjoxNjY5MTI5NTY0LCJleHAiOjE5ODQ0ODk1NjR9.es2QAgRTV0ql35si2YPoLrlRMIqC6sUVKdDAnzqTbNI",
                        "5"
                    )}
                </div>
            </section>
    )
}
export default Galery