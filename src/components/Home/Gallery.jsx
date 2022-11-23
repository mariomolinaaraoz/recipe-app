import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';

function Galery() {
    // if toggler is updated when lightbox is closed it will open it
    // if toggler is updated when lightbox is opened it will close it
    const [toggler, setToggler] = useState(false);

    const picture =(title, text, img)=>{
        return(
            <div className="img__container 
                        col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 
                        overflow-hidden d-block position-relative mb-2">
                        <img 
                            className="img__gallery" 
                            src={img} 
                            width="100%" 
                            height="auto"
                            alt="img_gallery_1"
                        />
                        <div className="text__gallery">
                            <span className="xl-fs">{title}</span>
                            <span className="md-fs mt-4 p-3">{text}</span>
                        </div>
                    </div>
        );
    }
    return (
            <section id="gallery">
                <button className="btn btn-floating fw-semibold xl-fs" onClick={() => setToggler(!toggler)}
                    style={{
                        zIndex:"100", 
                        position:"absolute", 
                        top:"67rem", 
                        left:"21rem",
                        // border:"none",
                        // padding:"0rem",
                        // borderRadius:"50%",
                        // backgroundColor:"black",
                        color:"red"
                    }}
                >                    
                    <span>
                        <i className="bi bi-play-circle"></i>
                    </span>
                    <span className="border-animation border-animation--border-1"></span>
                    <span className="border-animation border-animation--border-2"></span>
                </button>
                {/* <FsLightbox
                    toggler={toggler}
                    sources={[                
                    'https://www.youtube.com/watch?v=tPqVPtXC4FI',
                    "https://qpjongunqmlhnicdvokg.supabase.co/storage/v1/object/sign/recipe/cocinera_artesanal_2022/muestra%202022_1.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZWNpcGUvY29jaW5lcmFfYXJ0ZXNhbmFsXzIwMjIvbXVlc3RyYSAyMDIyXzEuanBnIiwiaWF0IjoxNjY5MTI5MTU4LCJleHAiOjE5ODQ0ODkxNTh9.Jt-GcOFFJNzUU3u2iQb82YpbsqSxWZxtGeTPGhRkW9k",
                    "https://qpjongunqmlhnicdvokg.supabase.co/storage/v1/object/sign/recipe/cocinera_artesanal_2022/muestra%202022_3.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZWNpcGUvY29jaW5lcmFfYXJ0ZXNhbmFsXzIwMjIvbXVlc3RyYSAyMDIyXzMuanBnIiwiaWF0IjoxNjY5MTI5NTczLCJleHAiOjE5ODQ0ODk1NzN9.xvV5dZfdvVGLDl1x45NRF5IYxq9QEyR33mU0jwJLWJY",
                    "https://qpjongunqmlhnicdvokg.supabase.co/storage/v1/object/sign/recipe/cocinera_artesanal_2022/muestra%202022_5.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZWNpcGUvY29jaW5lcmFfYXJ0ZXNhbmFsXzIwMjIvbXVlc3RyYSAyMDIyXzUuanBnIiwiaWF0IjoxNjY5MTM1NzY4LCJleHAiOjE5ODQ0OTU3Njh9.OxV3wvDs1p53LofGhLlXpooAeLUtvl9ysFMZfKYYl48",
                    "https://qpjongunqmlhnicdvokg.supabase.co/storage/v1/object/sign/recipe/recipe_img/alfajor-marplatense-chocolate.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZWNpcGUvcmVjaXBlX2ltZy9hbGZham9yLW1hcnBsYXRlbnNlLWNob2NvbGF0ZS5qcGciLCJpYXQiOjE2NjkxMjA1MTUsImV4cCI6MTk4NDQ4MDUxNX0.fNUuSn_ibue3uN3q9-LGc9hsANPQ8Kmf7euYlUM21es",
                    "https://qpjongunqmlhnicdvokg.supabase.co/storage/v1/object/sign/recipe/cocinera_artesanal_2022/muestra%202022_2.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZWNpcGUvY29jaW5lcmFfYXJ0ZXNhbmFsXzIwMjIvbXVlc3RyYSAyMDIyXzIuanBnIiwiaWF0IjoxNjY5MTI5NTY0LCJleHAiOjE5ODQ0ODk1NjR9.es2QAgRTV0ql35si2YPoLrlRMIqC6sUVKdDAnzqTbNI"
                    ]}
                /> */}
                        
                <div className="row mb-4">                    
                    {picture(
                        "Cocinera Artesanal 2022",
                        "Muestra anual, Escuela nocturna 9 de Julio, exposición de trabajos realizados durante el cursado.",
                        "https://qpjongunqmlhnicdvokg.supabase.co/storage/v1/object/sign/recipe/cocinera_artesanal_2022/muestra%202022_1.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZWNpcGUvY29jaW5lcmFfYXJ0ZXNhbmFsXzIwMjIvbXVlc3RyYSAyMDIyXzEuanBnIiwiaWF0IjoxNjY5MTI5MTU4LCJleHAiOjE5ODQ0ODkxNTh9.Jt-GcOFFJNzUU3u2iQb82YpbsqSxWZxtGeTPGhRkW9k"
                    )}
                    {picture(
                        "Algunos productos en exposición",
                        "Dulces: Pan dulce, budin ingles, profiteroles, isla flotante, jesuitas. Salados: empanadas, matambre relleno de verduras, arrollado de pollo.",
                        "https://qpjongunqmlhnicdvokg.supabase.co/storage/v1/object/sign/recipe/cocinera_artesanal_2022/muestra%202022_3.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZWNpcGUvY29jaW5lcmFfYXJ0ZXNhbmFsXzIwMjIvbXVlc3RyYSAyMDIyXzMuanBnIiwiaWF0IjoxNjY5MTI5NTczLCJleHAiOjE5ODQ0ODk1NzN9.xvV5dZfdvVGLDl1x45NRF5IYxq9QEyR33mU0jwJLWJY"

                        )}
                    {picture(
                        "Pan dulce de navidad",
                        "No existe navidad sin pan dulce, ya que es un pan azucarado con frutas abrillantada y aroma a citricos, puede solictarlo tambien con chispas de chocolate, nueces y otras combinaciones.",
                        "https://qpjongunqmlhnicdvokg.supabase.co/storage/v1/object/sign/recipe/cocinera_artesanal_2022/muestra%202022_5.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZWNpcGUvY29jaW5lcmFfYXJ0ZXNhbmFsXzIwMjIvbXVlc3RyYSAyMDIyXzUuanBnIiwiaWF0IjoxNjY5MTM1NzY4LCJleHAiOjE5ODQ0OTU3Njh9.OxV3wvDs1p53LofGhLlXpooAeLUtvl9ysFMZfKYYl48"

                    )}
                    {picture(
                        "Algunos de nuestros postres",
                        "Profiteroles, isla flotante y muchos más...",
                        "https://qpjongunqmlhnicdvokg.supabase.co/storage/v1/object/sign/recipe/cocinera_artesanal_2022/muestra%202022_6.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZWNpcGUvY29jaW5lcmFfYXJ0ZXNhbmFsXzIwMjIvbXVlc3RyYSAyMDIyXzYuanBnIiwiaWF0IjoxNjY5MTU0OTI4LCJleHAiOjE5ODQ1MTQ5Mjh9.Sm8xn0-4SKhhtHJH3pTqk0YedvE8megIudGyXgHAsXs"
                    )}
                    {picture(
                        "Alfajor marplatense",
                        "Galletitas rellenas con mucho dulce de leche y cubiertas con el más puro chocolate semi amargo.",
                        "https://qpjongunqmlhnicdvokg.supabase.co/storage/v1/object/sign/recipe/recipe_img/alfajor-marplatense-chocolate.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZWNpcGUvcmVjaXBlX2ltZy9hbGZham9yLW1hcnBsYXRlbnNlLWNob2NvbGF0ZS5qcGciLCJpYXQiOjE2NjkxMjA1MTUsImV4cCI6MTk4NDQ4MDUxNX0.fNUuSn_ibue3uN3q9-LGc9hsANPQ8Kmf7euYlUM21es"
                    )}
                    {picture(
                        "Fotos Cocinera Artesanal 2022",
                        "Grupo de alumnas, en la muestra realizada, en la escuela 9 de Julio, el 18 de noviembre del 2022.",
                        "https://qpjongunqmlhnicdvokg.supabase.co/storage/v1/object/sign/recipe/cocinera_artesanal_2022/muestra%202022_2.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZWNpcGUvY29jaW5lcmFfYXJ0ZXNhbmFsXzIwMjIvbXVlc3RyYSAyMDIyXzIuanBnIiwiaWF0IjoxNjY5MTI5NTY0LCJleHAiOjE5ODQ0ODk1NjR9.es2QAgRTV0ql35si2YPoLrlRMIqC6sUVKdDAnzqTbNI"
                    )}
                </div>
            </section>
    )
}
export default Galery