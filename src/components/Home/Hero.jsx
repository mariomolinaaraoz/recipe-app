function Hero() {
    const card__hero=(title, text,img, link) =>{
        return(
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-4 col-xxl-4">
                <article className="box my-2 mx-auto">
                    <img src={img} alt="hero_img" loading="lazy" />
                    <div className="box__text pt-4 px-4">
                        <h3 className="lg-fs mt-2">{title}</h3>
                        <p className="text-start sm-fs mt-3">{text}</p>
                        <a 
                            className="btn btn-outline-light btn-sm border-0"
                            href={link}
                        >
                            <small>más ⟶</small>
                        </a>
                    </div>
                </article>
            </div>
        )
    }
  return (
    <section id="hero">
            <div className="row mb-4">
                {card__hero(
                    "Quien soy?",
                    "Soy Cintia, y la cocina es mi pasión, brindar amor a traves de la elaboración de alimentos, es una experiencia unica.",
                    "https://t4.ftcdn.net/jpg/02/54/93/61/240_F_254936166_5MFxlGv7PNPw4VmpuNNQxlU0K2D4f7Ya.jpg",
                    "#about"
                )}
                {card__hero(
                    "Recetas",
                    "Aquí encontraras, recetas tradicionales, elaboradas y tambien exclusivas para miembros, crea tu cuenta y accede.",
                    "https://t4.ftcdn.net/jpg/00/59/22/37/240_F_59223799_yNtHchqCaxlYtnFfPUo7VywWVbHA5Xit.jpg",
                    "/dashboard/list_recipe"
                )}
                {card__hero(
                    "Hiciste tu pedido?",
                    "Realizamos menús diarios, frescos y preparados en el momento, como tambien tortas y postres, conoce nuestra galeria.",
                    "https://t3.ftcdn.net/jpg/03/16/43/38/240_F_316433874_c4KNyyJSp0pGJ0OcAsnIykdeGgntHJCk.jpg",
                    "/store"
                )}
            </div>     
    </section>
  )
}
export default Hero