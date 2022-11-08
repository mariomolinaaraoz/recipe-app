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
    <div className="Home container">
      <div className="logo__intro">
        <img src="./logo.svg" alt="logo_intro" width="50%" height="auto"/>
      </div>

      <div className="space__intro"></div>

      <div className="title__section d-flex flex-column text-center my-2">
        <span className="xxl-fs my-3">Bienvenidos a mi mundo</span>
        <Home_Hero/>
      </div>

      {separator()}

      <div className="title__section d-flex flex-column text-center my-2">
        <span className="xxl-fs my-3">Galeria</span>
        <Gallery/>
      </div>

      {separator()}

      <div className="title__section d-flex flex-column text-center my-2">
        <span className="xxl-fs my-3">Acerca de mí</span>
        <About/>
      </div>

      {separator()}
      
    </div>    
  )
}

export default Home