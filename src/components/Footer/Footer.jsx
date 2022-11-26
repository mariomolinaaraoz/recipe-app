import { Link } from "react-router-dom";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Footer() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8dardha', 'template_92ecan8', e.target, 'TxBydyoMa4SKLDCsH')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <div className="row bg-second-color text-light mx-auto mt-5">
      {/* WhatsApp icon */}
      <div className="container">
        <a
          href="https://wa.me/5493813498284/?text=Mensaje desde la Web Cintia Vides!"
          className="whatsapp_float"
          target="_blank"
          rel="noopener noreferrer"
          title="whastapp_button"
        >
          <i className="whatsapp-icon bi bi-whatsapp"></i>
        </a>
      </div>
      <div className="form-contact col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        {/* FORM CONTACT */}
        <div className="row">
          <div 
            className="col-sm-8 col-md-6 col-lg-4 col-xl-4 col-xxl-4 position-relative mx-auto"
            style={{top:"-1.6rem"}}
          >
            <div className="subscribe bg-light p-2" style={{borderRadius:"5rem"}}>
              <form ref={form} onSubmit={sendEmail} className="subscribe-form">
                <div className="form-group d-flex">
                  <input 
                    type="email"
                    name="user_email" 
                    className="form-control bg-light border-0 sm-fs" 
                    placeholder="Ingresar email"
                    required
                  />
                  <input
                    id="footer-contact_form-submit"
                    type="submit" 
                    value="Suscribirme"
                    className="bg-first-color border-0 sm-fs"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="brand_&_menu col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">      
        <div className="row">
          {/* BRAND*/}
          <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 text-center mb-4">
              <div>
                <a className="" href="/">
                  <img 
                    src="https://qpjongunqmlhnicdvokg.supabase.co/storage/v1/object/sign/recipe/logo/logo.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZWNpcGUvbG9nby9sb2dvLnN2ZyIsImlhdCI6MTY2NjcwODUwNiwiZXhwIjoxOTgyMDY4NTA2fQ.yT7j8B38_4qbAISR7YBDCgWn4eES_u-23Yinu1Hwo9Q&t=2022-10-25T14%3A35%3A01.804Z"
                    alt="logo" 
                    loading="lazy"
                    width="180px"
                  />
                </a>
                <address className="mt-2 text-muted">
                  Tucumán - Argentina
                </address>
              </div>
          </div>

          {/* MENU */}
          <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8 text-center">  
            <div className="row">
              <div className="col-3 mb-4">
                <Link to="/" className="nav-link"><span className="lg-fs border-bottom">Inicio</span></Link>
                <ul className="list-unstyled text-muted d-none d-md-block">
                  <li><a href="#" className="nav-link py-1">Quien soy?</a></li>
                  <li><a href="#" className="nav-link py-1">Galeria</a></li>
                  <li><a href="#" className="nav-link py-1">Tienda</a></li>
                </ul>
              </div>
              <div className="col-3 mb-4 border-start">
                <Link to="/store" className="nav-link"><span className="lg-fs border-bottom">Tienda</span></Link>
                <ul className="list-unstyled text-muted d-none d-md-block">
                  <li><a href="#" className="nav-link py-1">Ofertas</a></li>
                  <li><a href="#" className="nav-link py-1">Productos</a></li>
                </ul>
              </div>
              <div className="col-3 mb-4 border-start">
                <Link to="/dashboard/list_recipe" className="nav-link"><span className="lg-fs border-bottom">Recetas</span></Link>
                <ul className="list-unstyled text-muted d-none d-md-block">
                  <li><a href="#" className="nav-link py-1">Escuela</a></li>
                  <li><a href="#" className="nav-link py-1">Propias</a></li>
                  <li><a href="#" className="nav-link py-1">Tradicionales</a></li>
                </ul>
              </div>
              <div className="col-3 mb-4 border-start">
                <Link to="/dashboard/list_recipe" className="nav-link"><span className="lg-fs border-bottom">Social</span></Link>
                <ul className="list-unstyled text-muted d-none d-md-block">
                  <li><a href="#" className="nav-link py-1">Facebook</a></li>
                  <li><a href="#" className="nav-link py-1">Twitter</a></li>
                  <li><a href="#" className="nav-link py-1">Instagram</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        {/* COPYRIGHT */}
        <p className="text-center text-muted">
          Designed & Built by <a href="https://mariomolinaaraoz.com.ar" target="_blank">Mario Molina</a><br></br>
          2022
        </p>        
      </div>

    </div>
  );
}

export default Footer;
