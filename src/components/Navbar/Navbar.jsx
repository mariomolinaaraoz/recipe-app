import { NavLink, Link } from "react-router-dom";
import { supabase } from "../../supabase/client";

import { useCart } from "react-use-cart";

import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';


function Navbar() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
} = useCart();

  async function signOut() {
    await supabase.auth.signOut();
    navigate("/login");
    // window.location.href = "/login";
  }

  return (
    <nav className="navbar navbar-expand-sm bg-second-color navbar-dark md-fs">
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton className="azt33 shadow m-0 py-0 ps-0">
          <Offcanvas.Title className="d-flex flex-row align-baseline my-1 ms-3">
              <div className="btn btn-primary rounded-circle me-2">
                <i class="bi bi-cart3"></i>
              </div>
              <span className="text-light mt-2 sm-fs fw-light">Carrito de Compras</span>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            {items.map((item, index) => {
                return (
                    <div className="row border-bottom mb-2" key={index}>
                      <div className="col-3 d-flex justify-content-center mb-2">
                        <img className="my-0" src={item.img}  alt={item.title} width="80rem" height="auto"/>
                      </div>
                      <div className="col-3 d-flex flex-column vsm-fs">
                        <span className="my-0">{item.title}</span>
                      </div>
                      <div className="col-3 d-flex flex-column vsm-fs">
                        <span className="mt-0 mb-1">Cant.: <span className="fw-semibold">{item.quantity}</span></span>
                        <span className="mb-1">P. unit: <span className="fw-semibold">${item.price}</span></span>
                        <span className="">Subtotal: 
                          <span className="fw-semibold">${item.price*item.quantity}</span>
                        </span>
                      </div>
                      <div className="col-3 text-center">
                        <div className="d-flex flex-row justify-content-center my-1">
                          <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className="btn btn-outline-success btn-sm vsm-fs">-</button>
                          <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className="btn btn-outline-success btn-sm ms-1 vsm-fs">+</button>
                        </div>
                        <button onClick={() => removeItem(item.id)} className="btn btn-danger btn-sm vsm-fs">Eliminar</button>
                      </div>
                    </div>
                )
            })}
            <div className={isEmpty ? "d-none" : "row py-3"}>
              <div className="col-3">
                <button onClick={() => emptyCart()} className="btn btn-outline-danger btn-sm vsm-fs">Limpiar</button>
              </div>
              <div className="col-3">
                
              </div>
              <div className="col-3">                
                <span className="text-center vsm-fs">A pagar: ${cartTotal} </span>
              </div>
              <div className="col-3 text-center">                
                <button onClick={() => emptyCart()} className="btn btn-success btn-sm vsm-fs">Confirmar</button>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      <div className="container-fluid">
        <a className="navbar-brand m-0 p-0 ms-1" href="/">
          <img 
            src="https://qpjongunqmlhnicdvokg.supabase.co/storage/v1/object/sign/recipe/logo/logo.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZWNpcGUvbG9nby9sb2dvLnN2ZyIsImlhdCI6MTY2NjcwODUwNiwiZXhwIjoxOTgyMDY4NTA2fQ.yT7j8B38_4qbAISR7YBDCgWn4eES_u-23Yinu1Hwo9Q&t=2022-10-25T14%3A35%3A01.804Z"
            alt="logo" 
            loading="lazy"
            width="80px"
          />
        </a>
        <div className="d-flex flex-row">
          {supabase.auth.user() && (
            <button className="azt-1 btn btn-outline-secondary btn-sm me-2" onClick={signOut}>
              Salir
            </button>
          )}
          {!supabase.auth.user() && (
            <Link type="button" className="azt-1 btn btn-outline-primary btn-sm border-0 text-white me-2" to="/login">
              Iniciar sesión
            </Link>
          )}
          <button
            className="navbar-toggler bnt-sm px-1 py-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon btn-sm"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
              >
                <span data-bs-toggle="collapse" data-bs-target="#navbarNav">Inicio</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/store"
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
              >
                <span data-bs-toggle="collapse" data-bs-target="#navbarNav">Tienda</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/dashboard/list_recipe"
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
              >
              
                <span data-bs-toggle="collapse" data-bs-target="#navbarNav">Recetas</span>
              </NavLink>
            </li>
            <li className="azt">
              {supabase.auth.user() && (
                <button className="navbar-collapse btn btn-outline-secondary btn-sm border-0 ms-2 me-2" onClick={signOut}>
                  Salir
                </button>
              )}
              {!supabase.auth.user() && (
                <Link type="button" className="btn btn-outline-primary btn-sm border-0 text-white ms-2 me-2" to="/login">
                  Iniciar sesión
                </Link>
              )}
            </li>
            <li className="azt">
              <button
                    onClick={handleShow}
                    style={{ 
                      width:"2.8rem", 
                      height: "2.8rem", 
                      position: "relative"
                    }}
                    className="btn btn-outline-primary border-0 rounded-circle mt-0 pt-0"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    fill="currentColor"
                    >
                    <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                </svg>
                <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" 
                    style={{
                        color:"white",
                        width: "1.2rem",
                        height: "1.2rem",
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        transform: "translate(25%,-20%)",
                    }}
                    >{totalItems}</div>
              </button>              
            </li>
          </ul>          
        </div>        
      </div>                
    </nav>
  );
}

export default Navbar;