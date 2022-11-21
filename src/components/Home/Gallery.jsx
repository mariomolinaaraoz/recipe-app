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
                        "lorem ipsum",
                        "salkjaskd aslkdjla ja ljdl",
                        "https://qpjongunqmlhnicdvokg.supabase.co/storage/v1/object/sign/recipe/recipe_img/alfajor-marplatense-chocolate.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZWNpcGUvcmVjaXBlX2ltZy9hbGZham9yLW1hcnBsYXRlbnNlLWNob2NvbGF0ZS5qcGciLCJpYXQiOjE2NjY4Nzk2MjYsImV4cCI6MTk4MjIzOTYyNn0.xQ8NAChHmSTU9GsePFjPq-61rXbqrGFJFIMgqV8rfIU",
                    )}
                    {picture(
                        "lorem ipsum",
                        "salkjaskd aslkdjla ja ljdl",
                        "https://qpjongunqmlhnicdvokg.supabase.co/storage/v1/object/sign/recipe/recipe_img/budin-sin-fruta.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZWNpcGUvcmVjaXBlX2ltZy9idWRpbi1zaW4tZnJ1dGEuanBnIiwiaWF0IjoxNjY2ODc5NjQ5LCJleHAiOjE5ODIyMzk2NDl9.PA6_3iiSkS8a6Im_AO8mUysclm_WJ1scRO2Z4p-jpM0", 

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
                        "lorem ipsum",
                        "salkjaskd aslkdjla ja ljdl",
                        "https://qpjongunqmlhnicdvokg.supabase.co/storage/v1/object/sign/recipe/recipe_img/pan.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZWNpcGUvcmVjaXBlX2ltZy9wYW4uanBnIiwiaWF0IjoxNjY2ODc5NzI3LCJleHAiOjE5ODIyMzk3Mjd9.RibFs7TPTIJjnaWqOpaohBsmNCbOgxx48JfzIas_Akw",
                    )}
                </div>
            </section>
    )
}

export default Galery