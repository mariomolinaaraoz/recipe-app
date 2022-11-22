import {About, Home_Hero, Gallery} from '../../components/index'
import './home.css';

function Home() {
  const separator=()=>{
    return(
      <div className="my-4">
        <hr className="border-first-color mx-auto w-50 m-0 p-0"/>
        <hr className="border-second-color mx-auto w-25 m-0 p-0"/>
      </div>
    );
  }
  return (
    <section id="home" className="container">
      <section id="intro_section">
        <div className="logo__intro">
          <img src="https://qpjongunqmlhnicdvokg.supabase.co/storage/v1/object/sign/recipe/logo/logo.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZWNpcGUvbG9nby9sb2dvLnN2ZyIsImlhdCI6MTY2ODQ1MjkzNCwiZXhwIjoxOTgzODEyOTM0fQ.EMtrqbNcUW6cKwGQflEWm5I0bBtvcuHN7TbePeIN9QA" 
            alt="logo_intro" 
            width="50%" 
            height="auto"
          />
        </div>
        <div className="space__intro"></div>
      </section>

      <section id="title__section" className="d-flex flex-column text-center my-2">
        <h1 className="title xxl-fs my-3">Bienvenidos a mi mundo</h1>
        <Home_Hero/>
      </section>

      {separator()}

      <section id="gallery__section" className="d-flex flex-column text-center my-2">
        <h2 className="xxl-fs my-3">Galeria</h2>
        <Gallery/>
      </section>

      {separator()}

      <section id="about__section" className="d-flex flex-column text-center my-2">
        <h2 className="xxl-fs my-3">Acerca de mí</h2>
        <About/>
      </section>

      {separator()}

      <div className="separator" style={{marginTop:"12vh"}}></div>      
    </section>    
  )
}

export default Home