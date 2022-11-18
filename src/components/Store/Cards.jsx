import {useCart} from "react-use-cart";

const Cards = (props) => {
    const {addItem} = useCart ();
    return (
        <div className="col-6 col-sm-6 col-md-4 col-xl-3 col-xxl-3">
            <div className="card shadow rounded-0 mb-3" 
                // style={{width: '12rem', height: 'auto'}}
                onClick={()=>addItem(props.item)}
            >
                <div className="card-title border-bottom-1"
                    style={{width: 'auto', height: '6rem'}}
                >
                    <img 
                        src={props.img}
                        alt="" className="card-img-top rounded-0"
                        loading="lazy"
                    />
                </div>                    
                <div className="card-body">
                    <div className="d-flex flex-column">
                        <span className="badge rounded-1 text-bg-primary small">Oferta del día</span>                            
                        <span className="blod text-secondary mt-2 text-decoration-line-through">20% Off</span>
                        <span className="fw-semibold mt-0 lg-fs">${props.price}
                            <span className="text-success mt-2 vsm-fs"> 20% Off</span>
                        </span>
                        <span className="text-success mt-0 vsm-fs">Hasta 6 pagos sin interes.</span>
                        <span className="blod card-title small mt-3">{props.title}</span>
                    </div>                                           
                </div>
            </div>
        </div>
    )
}

export default Cards;