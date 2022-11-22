function Galery() {
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
                        "lorem ipsum",
                        "salkjaskd aslkdjla ja ljdl",
                        "https://qpjongunqmlhnicdvokg.supabase.co/storage/v1/object/sign/recipe/recipe_img/crema-chantilly-mascarpone.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZWNpcGUvcmVjaXBlX2ltZy9jcmVtYS1jaGFudGlsbHktbWFzY2FycG9uZS5qcGciLCJpYXQiOjE2NjY4Nzk2NzQsImV4cCI6MTk4MjIzOTY3NH0.87DmqBbqRpEtMXcjKHhCWQtgdk55pZJZk99ZQzh0jdQ",

                    )}
                    {picture(
                        "lorem ipsum",
                        "salkjaskd aslkdjla ja ljdl",
                        "https://qpjongunqmlhnicdvokg.supabase.co/storage/v1/object/sign/recipe/recipe_img/sorrentino-1.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZWNpcGUvcmVjaXBlX2ltZy9zb3JyZW50aW5vLTEuanBnIiwiaWF0IjoxNjY2ODc5NzU0LCJleHAiOjE5ODIyMzk3NTR9.Hm8SsBIUPhSkyS2gD7NKdJutRmZU46lZqo_S4HR-JXQ",
                    )}
                    {picture(
                        "lorem ipsum",
                        "salkjaskd aslkdjla ja ljdl",
                        "https://qpjongunqmlhnicdvokg.supabase.co/storage/v1/object/sign/recipe/recipe_img/crema-pastelera-chocolate.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZWNpcGUvcmVjaXBlX2ltZy9jcmVtYS1wYXN0ZWxlcmEtY2hvY29sYXRlLmpwZyIsImlhdCI6MTY2Njg3OTcwOCwiZXhwIjoxOTgyMjM5NzA4fQ.xt9wss89OQ3RHCb4gkAW7GlIf1wYqpx5tUCOo45tVpQ",
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