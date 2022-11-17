import React from 'react'

function Hero() {
  return (
    <div className="d-flex flex-row justify-content-between bg-light shadow px-3 my-5">
        <div className="d-flex flex-column text-center text-primary xxl-fs p-0 mx-3">
            <i className="bi bi-star"></i>
            <span className="vsm-fs">Ofertas del día</span>
        </div>
        <div className="d-flex flex-column text-center text-primary xxl-fs p-0 mx-3">
            <i className="bi bi-lightning"></i>
            <span className="vsm-fs">Ofertas relámpago</span>
        </div>
        <div className="d-flex flex-column text-center text-primary xxl-fs p-0 mx-3">
            <i className="bi bi-calendar-check"></i>
            <span className="vsm-fs">Ofertas solo x hoy</span>
        </div>
        <div className="d-flex flex-column text-center text-primary xxl-fs p-0 mx-3">
            <i className="bi bi-truck"></i>
            <span className="vsm-fs">Entrega gratis</span>
        </div>
        <div className="d-flex flex-column text-center text-primary xxl-fs p-0 mx-3">
            <i className="bi bi-star"></i>
            <span className="vsm-fs">Ofertas del día</span>
        </div>
        <div className="d-flex flex-column text-center text-primary xxl-fs p-0 mx-3">
            <i className="bi bi-star"></i>
            <span className="vsm-fs">Ofertas del día</span>
        </div>
    </div>
  )
}

export default Hero